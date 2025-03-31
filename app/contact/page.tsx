import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Link>
        </Button>

        <h1 className="h1 mb-6">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          Have questions or need to schedule a service? Reach out to us using the form below or through our contact
          information.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="bg-black/50 border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-black/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  placeholder="Your Phone Number"
                  className="bg-black/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full bg-black/50 border border-primary/30 focus:border-primary rounded-md px-3 py-2 text-white"
                >
                  <option value="">Select a Service</option>
                  <option value="engine-repair">Engine Repair</option>
                  <option value="car-servicing">Car Servicing</option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="diagnostics">Diagnostics</option>
                  <option value="performance-tuning">Performance Tuning</option>
                  <option value="electrical-systems">Electrical Systems</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your vehicle and service needs"
                  className="bg-black/50 border-primary/30 focus:border-primary min-h-[120px]"
                />
              </div>

              <Button type="submit" className="hexagon-button w-full">
                Submit Request
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
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

            <div className="h-[300px] relative">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

