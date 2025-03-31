import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"

export default function ContactTeaser() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="h2 mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Have questions about our services or want to schedule an appointment? Contact us today and our team of
              automotive experts will be happy to assist you.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="border border-primary/20 rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-orbitron text-sm mb-1">Location</h4>
                    <p className="text-sm text-gray-400">
                      123 Automotive Street, Jubilee Hills,
                      <br />
                      Hyderabad, Telangana 500033
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-orbitron text-sm mb-1">Phone</h4>
                    <p className="text-sm text-gray-400">
                      <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                        +91 98765 43210
                      </a>
                      <br />
                      <a href="tel:+914023456789" className="hover:text-primary transition-colors">
                        +91 40 2345 6789
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-orbitron text-sm mb-1">Email</h4>
                    <p className="text-sm text-gray-400">
                      <a href="mailto:info@utac.in" className="hover:text-primary transition-colors">
                        info@utac.in
                      </a>
                      <br />
                      <a href="mailto:service@utac.in" className="hover:text-primary transition-colors">
                        service@utac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-primary/20 rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-orbitron text-sm mb-1">Working Hours</h4>
                    <p className="text-sm text-gray-400">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button asChild className="hexagon-button group">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </Button>
          </div>

          <div className="relative h-[400px] lg:h-auto">
            <div className="absolute inset-0 bg-black/20 rounded-lg z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1796178144627!2d78.43087731487661!3d17.448488288022695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c8b7f2d9d7%3A0x2ef2e25bf73493df!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1648882884564!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.5rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="z-0"
            ></iframe>

            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm p-3 rounded-lg z-20 border border-primary/30">
              <div className="flex items-center">
                <MapPin className="text-primary mr-2" size={16} />
                <p className="text-sm">Jubilee Hills, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

