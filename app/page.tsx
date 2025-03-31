import HeroSection from "@/components/hero-section"
import AboutTeaser from "@/components/about-teaser"
import ServiceShowcase from "@/components/service-showcase"
import WhyChooseUs from "@/components/why-choose-us"
import FeaturedWork from "@/components/featured-work"
import InstagramFeed from "@/components/instagram-feed"
import GoogleReviews from "@/components/google-reviews"
import ContactTeaser from "@/components/contact-teaser"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <ServiceShowcase />
      <WhyChooseUs />
      <FeaturedWork />
      <InstagramFeed />
      <GoogleReviews />
      <ContactTeaser />
    </>
  )
}

