import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-brightorange text-white font-lato px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img
            src={logo}
            alt="Electric Dreams Logo"
            className="w-20 mb-4"
          />
          <p className="text-base leading-relaxed">
            Voltaic Electrical provides expert residential,
            commercial, and emergency electrical services across Perth.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-warmorange transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-warmorange transition-colors">
              <Facebook size={22} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            {[
              "Lighting",
              "Private Power Poles",
              "Smoke Alarms",
              "EV Chargers",
              "Air Conditioning",
              "Thermographic Imaging",
              "View All",
            ].map((service) => (
              <li key={service}>
                <a
                  href="#"
                  className="hover:text-warmorange transition-colors"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            {[
              "About",
              "Service Areas",
              "Contact",
              "Reviews",
              "Resources",
              "Sitemap",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-warmorange transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-3">
              <MapPin className="text-warmorange mt-1" size={20} />
              <span>Location, Chennai</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-warmorange mt-1" size={20} />
              <span>(+91)1234567890</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="text-warmorange mt-1" size={20} />
              <span>Support@electricdreams.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom line */}
      <div className="mt-10 border-t border-darkorange pt-6 text-center text-sm text-white/90">
        © {new Date().getFullYear()} Electric Dreams. All rights reserved.
      </div>
    </footer>
  );
}
