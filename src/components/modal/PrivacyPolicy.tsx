import React from "react";
import { X } from "lucide-react";

type PrivacyPolicyProps = {
  onClose: () => void;
};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-md px-8 pt-10">
      <div
        className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative mt-20"
        style={{
          animation: "modalSlideIn 0.3s ease-out",
        }}
      >
        <style>{`
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-10">
          {/* Logo */}
          <div className="flex flex-col items-center mb-4">
            <img
              src="/assets/logo.png"
              alt="VizSchool Logo"
              className="h-24 mb-2"
            />
            <h1 className="text-xl font-bold text-orange-600">Privacy Policy</h1>
          </div>

          {/* Effective Date */}
          <p className="text-sm font-semibold mt-4">Effective Date: 2025</p>

          {/* Privacy Policy Content */}
          <div className="space-y-5 mt-4 text-gray-700 text-sm leading-relaxed">
            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">1. Introduction</h2>
              <p>
                VizSchool LMS (“we,” “our,” or “us”) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your personal
                information when you use our platform.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, contact details,
                  and other information you provide when registering an account.
                </li>
                <li>
                  <strong>Usage Information:</strong> Data on how you interact with our
                  platform, including login details, course progress, and preferences.
                </li>
                <li>
                  <strong>Device & Technical Data:</strong> IP address, browser type, and
                  device information for security and analytics purposes.
                </li>
              </ul>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Provide and improve our services.</li>
                <li>Personalize your learning experience.</li>
                <li>
                  Communicate with you regarding updates, support, and promotional content
                  (you may opt out anytime).
                </li>
                <li>
                  Ensure security, detect fraud, and comply with legal requirements.
                </li>
              </ul>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">4. How We Share Your Information</h2>
              <p>
                We do not sell your personal information. However, we may share it with:
              </p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>
                  <strong>Service Providers:</strong> Trusted third parties that help us
                  operate our platform (e.g., hosting, analytics, customer support).
                </li>
                <li>
                  <strong>Legal Obligations:</strong> When required by law or to protect the
                  rights and safety of users and our platform.
                </li>
              </ul>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">5. Data Security</h2>
              <p>
                We implement security measures to protect your data, but no online service is
                100% secure. We encourage you to use strong passwords and safeguard your
                account information.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">6. Your Rights & Choices</h2>
              <p>You have the right to:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of marketing communications.</li>
                <li>Request a copy of your data (subject to verification).</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:care@vizschool.com"
                  className="text-orange-500 hover:text-orange-600 underline"
                >
                  care@vizschool.com
                </a>
                .
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">7. Cookies & Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance user experience, analyze
                usage, and improve our services. You can manage cookie preferences in your
                browser settings.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted
                on our website, and continued use of VizSchool LMS constitutes acceptance of the
                revised terms.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">9. Contact Information</h2>
              <p className="mb-10">
                If you have any questions about this Agreement, please contact us at{" "}
                <a
                  href="mailto:care@vizschool.com"
                  className="text-orange-500 hover:text-orange-600 underline"
                >
                  care@vizschool.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
