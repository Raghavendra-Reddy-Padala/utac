"use client"
import React, { useState, useRef, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, X } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'

// Define the structure for gallery items
interface GalleryItemType {
  id: number;
  type: string;
  title: string;
  desc: string;
  url: string;
  category: string;
  span: string;
}

// MediaItem component to handle both images and videos with lazy loading
const MediaItem = ({ item, className, onClick }: { item: GalleryItemType, className?: string, onClick?: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);

  // Intersection Observer to detect if video is in view
  useEffect(() => {
    if (item.type !== 'video') return;
    
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [item.type]);

  // Handle video play/pause based on visibility
  useEffect(() => {
    if (item.type !== 'video') return;
    
    let mounted = true;

    const handleVideoPlay = async () => {
      if (!videoRef.current || !isInView || !mounted) return;

      try {
        if (videoRef.current.readyState >= 3) {
          setIsBuffering(false);
          await videoRef.current.play();
        } else {
          setIsBuffering(true);
          await new Promise((resolve) => {
            if (videoRef.current) {
              videoRef.current.oncanplay = resolve;
            }
          });
          if (mounted) {
            setIsBuffering(false);
            await videoRef.current.play();
          }
        }
      } catch (error) {
        console.warn("Video playback failed:", error);
      }
    };

    if (isInView) {
      handleVideoPlay();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }

    return () => {
      mounted = false;
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute('src');
        videoRef.current.load();
      }
    };
  }, [isInView, item.type]);

  // Render video with loading state
  if (item.type === 'video') {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={onClick}
          playsInline
          muted
          loop
          preload="auto"
          style={{
            opacity: isBuffering ? 0.8 : 1,
            transition: 'opacity 0.2s',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    );
  }

  // Render image
  return (
    <div className={`${className} relative overflow-hidden`}>
      <Image
        src={item.url}
        alt={item.title}
        fill
        className="object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
        onClick={onClick}
        loading="lazy"
      />
    </div>
  );
};

// Modal component to display selected media
interface GalleryModalProps {
  selectedItem: GalleryItemType;
  isOpen: boolean;
  onClose: () => void;
  setSelectedItem: (item: GalleryItemType | null) => void;
  mediaItems: GalleryItemType[];
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });

  if (!isOpen) return null;

  return (
    <>
      {/* Main Modal */}
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
        className="fixed inset-0 w-full min-h-screen sm:h-[90vh] md:h-[600px] backdrop-blur-lg 
                  rounded-none sm:rounded-lg md:rounded-xl overflow-hidden z-10"
      >
        {/* Modal Content */}
        <div className="h-full flex flex-col">
          <div className="flex-1 p-2 sm:p-3 md:p-4 flex items-center justify-center bg-black/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                className="relative w-full aspect-[16/9] max-w-[95%] sm:max-w-[85%] md:max-w-3xl 
                         h-auto max-h-[70vh] rounded-lg overflow-hidden shadow-md"
                initial={{ y: 20, scale: 0.97 }}
                animate={{
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 0.5
                  }
                }}
                exit={{
                  y: 20,
                  scale: 0.97,
                  transition: { duration: 0.15 }
                }}
                onClick={onClose}
              >
                <MediaItem item={selectedItem} className="w-full h-full object-contain bg-gray-900/20" onClick={onClose} />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 
                              bg-gradient-to-t from-black/80 to-transparent">
                  <div className="bg-primary/80 text-white text-xs px-2 py-1 rounded inline-block mb-2">
                    {selectedItem.category}
                  </div>
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">
                    {selectedItem.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">
                    {selectedItem.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          className="absolute top-2 sm:top-2.5 md:top-3 right-2 sm:right-2.5 md:right-3 
                  p-2 rounded-full bg-gray-200/80 text-gray-700 hover:bg-gray-300/80 
                  text-xs sm:text-sm backdrop-blur-sm "
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className='w-3 h-3' />
        </motion.button>
      </motion.div>

      {/* Draggable Dock */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        initial={false}
        animate={{ x: dockPosition.x, y: dockPosition.y }}
        onDragEnd={(_, info) => {
          setDockPosition(prev => ({
            x: prev.x + info.offset.x,
            y: prev.y + info.offset.y
          }));
        }}
        className="fixed z-50 left-1/2 bottom-4 -translate-x-1/2 touch-none"
      >
        <motion.div
          className="relative rounded-xl bg-primary/20 backdrop-blur-xl 
                   border border-primary/30 shadow-lg
                   cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center -space-x-2 px-3 py-2">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(item);
                }}
                style={{
                  zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index,
                }}
                className={`
                  relative group
                  w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 
                  rounded-lg overflow-hidden 
                  cursor-pointer hover:z-20
                  ${selectedItem.id === item.id
                    ? 'ring-2 ring-primary shadow-lg'
                    : 'hover:ring-2 hover:ring-white/30'}
                `}
                initial={{ rotate: index % 2 === 0 ? -15 : 15 }}
                animate={{
                  scale: selectedItem.id === item.id ? 1.2 : 1,
                  rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -15 : 15,
                  y: selectedItem.id === item.id ? -8 : 0,
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 0,
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <div className="w-full h-full">
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
                {selectedItem.id === item.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute -inset-2 bg-primary/20 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default function GalleryPage() {
  // Transform the original gallery data to match the new structure
  const galleryItems: GalleryItemType[] = [
    { 
      id: 1, 
      type: "image", 
      title: "Engine Repair", 
      desc: "Professional engine repair and maintenance service", 
      url: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?q=80&w=800", 
      category: "Repairs",
      span: "md:col-span-1 md:row-span-2"
    },
    { 
      id: 2, 
      type: "image", 
      title: "Car Servicing", 
      desc: "Comprehensive car servicing for all models", 
      url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800", 
      category: "Servicing",
      span: "md:col-span-2 md:row-span-2"
    },
    { 
      id: 3, 
      type: "image", 
      title: "Workshop", 
      desc: "Our modern workshop facility with advanced equipment", 
      url: "https://images.unsplash.com/photo-1629382312420-2640905f9e4d?q=80&w=800", 
      category: "Facility",
      span: "md:col-span-1 md:row-span-2"
    },
    { 
      id: 4, 
      type: "video", 
      title: "Performance Tuning", 
      desc: "Custom performance tuning for enhanced driving experience", 
      url: "https://player.vimeo.com/external/371433846.sd.mp4?s=236f28f56586d2d8675797499847f7019a1d58bc&profile_id=139&oauth2_token_id=57447761", 
      category: "Tuning",
      span: "md:col-span-2 md:row-span-2"
    },
    { 
      id: 5, 
      type: "image", 
      title: "Diagnostic Equipment", 
      desc: "State-of-the-art diagnostic tools for precise troubleshooting", 
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800", 
      category: "Equipment",
      span: "md:col-span-1 md:row-span-3"
    },
    { 
      id: 6, 
      type: "image", 
      title: "Car Detail", 
      desc: "Premium detailing service for a showroom shine", 
      url: "https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=800", 
      category: "Detailing",
      span: "md:col-span-1 md:row-span-2"
    },
    { 
      id: 7, 
      type: "video", 
      title: "Electrical Repair", 
      desc: "Expert electrical system diagnostics and repair", 
      url: "https://player.vimeo.com/external/368760546.sd.mp4?s=54e82b34831347c7932745412b6403f6500c5f4f&profile_id=139&oauth2_token_id=57447761", 
      category: "Repairs",
      span: "md:col-span-2 md:row-span-2"
    },
    { 
      id: 8, 
      type: "image", 
      title: "Team Working", 
      desc: "Our dedicated team of professional mechanics", 
      url: "https://images.unsplash.com/photo-1603712726275-8bbaba9a01ea?q=80&w=800", 
      category: "Team",
      span: "md:col-span-1 md:row-span-2"
    },
    { 
      id: 9, 
      type: "image", 
      title: "Customer Consultation", 
      desc: "Personalized customer service and consultation", 
      url: "https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=800", 
      category: "Customers",
      span: "md:col-span-2 md:row-span-2"
    }
  ];

  const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(null);
  const [items, setItems] = useState(galleryItems);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Link>
        </Button>

        <motion.h1 
          className="h1 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-primary">Gallery</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-300 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore our workshop, equipment, and completed projects. Drag items to rearrange or click to see details.
        </motion.p>

        <AnimatePresence mode="wait">
          {selectedItem ? (
            <GalleryModal
              selectedItem={selectedItem}
              isOpen={true}
              onClose={() => setSelectedItem(null)}
              setSelectedItem={setSelectedItem}
              mediaItems={items}
            />
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[180px]"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={`media-${item.id}`}
                  className={`relative overflow-hidden rounded-lg cursor-move ${item.span}`}
                  onClick={() => !isDragging && setSelectedItem(item)}
                  variants={{
                    hidden: { y: 50, scale: 0.9, opacity: 0 },
                    visible: {
                      y: 0,
                      scale: 1,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                        delay: index * 0.05
                      }
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={1}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(e, info) => {
                    setIsDragging(false);
                    const moveDistance = info.offset.x + info.offset.y;
                    if (Math.abs(moveDistance) > 50) {
                      const newItems = [...items];
                      const draggedItem = newItems[index];
                      const targetIndex = moveDistance > 0 ?
                        Math.min(index + 1, items.length - 1) :
                        Math.max(index - 1, 0);
                      newItems.splice(index, 1);
                      newItems.splice(targetIndex, 0, draggedItem);
                      setItems(newItems);
                    }
                  }}
                >
                  <MediaItem
                    item={item}
                    className="absolute inset-0 w-full h-full"
                    onClick={() => !isDragging && setSelectedItem(item)}
                  />
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 md:p-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="relative">
                      <div className="bg-primary/80 text-white text-xs px-2 py-1 rounded inline-block mb-1">
                        {item.category}
                      </div>
                      <h3 className="text-white text-xs sm:text-sm md:text-base font-medium line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-[10px] sm:text-xs mt-0.5 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}