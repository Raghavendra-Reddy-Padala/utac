import HeroSection from "@/components/hero-section"
import AboutTeaser from "@/components/about-teaser"
import ServiceShowcase from "@/components/service-showcase"
import WhyChooseUs from "@/components/why-choose-us"
import FeaturedWork from "@/components/featured-work"
import InstagramFeed from "@/components/instagram-feed"
import GoogleReviews from "@/components/google-reviews"
import ContactTeaser from "@/components/contact-teaser"
import JsonLd from "@/components/json-ld"

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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "ÜTAC - Übersteigen Technik Automotive Consultancy",
          image: "https://utac.in/images/utac-logo.png",
          url: "https://utac.in",
          telephone: "+919876543210",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Automotive Street, Jubilee Hills",
            addressLocality: "Hyderabad",
            postalCode: "500033",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.4484,
            longitude: 78.4308,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "10:00",
              closes: "14:00",
            },
          ],
          sameAs: [
            "https://facebook.com/utac",
            "https://twitter.com/utac",
            "https://instagram.com/utac_hyderabad",
            "https://linkedin.com/company/utac",
          ],
        }}
      />
    </>
  )
}

