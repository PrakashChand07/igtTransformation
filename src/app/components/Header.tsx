import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { EnquiryFormModal } from './EnquiryFormModal';
import { ThankYouModal } from './ThankYouModal';

export function Header() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleGetStarted = () => {
    setShowEnquiryForm(true);
  };

  const handleFormSubmit = () => {
    setShowThankYou(true);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src='/assets/logo.png'
                alt="IG Transformation Partners"
                className="h-16 lg:h-24 w-auto cursor-pointer"
              />
            </Link>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStarted}
              className="hidden sm:block bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-teal-500/25"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Enquiry Form Modal */}
      <EnquiryFormModal
        isOpen={showEnquiryForm}
        onClose={() => setShowEnquiryForm(false)}
        onFormSubmit={handleFormSubmit}
      />

      {/* Thank You Modal */}
      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
      />
    </>
  );
}