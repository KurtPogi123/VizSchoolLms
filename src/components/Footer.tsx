import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import TermsCondition from "../components/modal/TermsCondition"; // adjust path if needed
import PrivacyPolicy from "./modal/PrivacyPolicy";

const Footer = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isRefundOpen, setIsRefundOpen] = useState(false); // separate state

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* Newsletter Section */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Join Our Newsletter</h3>
              <p className="text-sm text-gray-600">
                Be the first to know about our latest updates, exclusive offers, and more.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 sm:w-64 px-3 py-2 border border-gray-300 rounded text-sm"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-8">

          {/* Get Started */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get Started</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Why VidSchool?</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Courses</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Tutors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Student Reviews</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing & Plans</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Learning Resources</a></li>
              <li><a href="/ContactUs" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>

          {/* Primary Classes */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Primary Classes</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Primary 1</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Primary 2</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Primary 3</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Primary 4</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Primary 5</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Primary 6</a></li>
            </ul>
          </div>

          {/* Secondary Classes */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Secondary Classes</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Secondary 1</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Secondary 2</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Secondary 3</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Secondary 4</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-2 flex flex-wrap justify-between gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-800"><Facebook size={20} /></a>
                <a href="#" className="text-pink-600 hover:text-pink-800"><Instagram size={20} /></a>
                <a href="#" className="text-blue-700 hover:text-blue-900"><Linkedin size={20} /></a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Talk to Us</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-gray-500" />
                  <a href="mailto:contact@vidschool.com" className="text-blue-600 hover:text-blue-800">
                    contact@vidschool.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-600">+65 8449 1000</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={16} className="mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
                  <span className="text-gray-600">
                    223 Mountbatten Road #02-23<br />
                    Mountbatten Square,<br />
                    Singapore 398008
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-200 pt-4 text-center">
          <div className="flex flex-wrap justify-start space-x-4 mb-4 text-sm">
            <button
              onClick={() => setIsTermsOpen(true)}
              className="text-orange-500 hover:text-orange-600"
            >
              Terms & Conditions
            </button>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-orange-500 hover:text-orange-600">Return Policy</a>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => setIsRefundOpen(true)}
              className="text-orange-500 hover:text-orange-600"
            >
              Privacy Policy
            </button>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-orange-500 hover:text-orange-600">Sitemap</a>
          </div>
          <p className="text-sm text-gray-600 flex justify-start">
            Copyright © 2025 VidSchool. All rights reserved.
          </p>
        </div>
      </div>

      {/* Modals */}
      {isTermsOpen && <TermsCondition onClose={() => setIsTermsOpen(false)} />}
      {isRefundOpen && <PrivacyPolicy onClose={() => setIsRefundOpen(false)} />}
    </footer>
  );
};

export default Footer;
