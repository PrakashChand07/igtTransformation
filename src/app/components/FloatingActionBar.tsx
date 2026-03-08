import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import { EnquiryFormModal } from './EnquiryFormModal';
import { ThankYouModal } from './ThankYouModal';

export function FloatingActionBar() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I want to know more about PropTech solutions', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleGetQuote = () => {
    setShowEnquiryForm(true);
  };

  const handleFormSubmit = () => {
    setShowThankYou(true);
  };

  return (
    <>
      {/* Mobile Bottom Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 shadow-2xl">
          <div className="flex items-center justify-around py-3 px-4">
            <button
              onClick={handleWhatsApp}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">WhatsApp</span>
            </button>

            <button
              onClick={handleCall}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">Call</span>
            </button>

            <button
              onClick={handleGetQuote}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">Get Quote</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Desktop Right Side Bar */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3"
      >
        <motion.button
          onClick={handleWhatsApp}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-lg group-hover:bg-green-500/30 transition-all" />
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 border border-green-400/20">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            <span className="text-sm text-white font-medium">Chat with Expert</span>
          </div>
        </motion.button>

        <motion.button
          onClick={handleCall}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-lg group-hover:bg-blue-500/30 transition-all" />
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 border border-blue-400/20">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            <span className="text-sm text-white font-medium">Instant Callback</span>
          </div>
        </motion.button>

        <motion.button
          onClick={handleGetQuote}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-teal-500/20 rounded-full blur-lg group-hover:bg-teal-500/30 transition-all" />
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/30 border border-teal-400/20">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            <span className="text-sm text-white font-medium">Get Quote</span>
          </div>
        </motion.button>
      </motion.div>

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