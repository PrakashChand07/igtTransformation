import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, X } from 'lucide-react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-all duration-300 z-10 shadow-xl"
        >
          <X className="w-5 h-5 text-zinc-400" />
        </button>

        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-green-500/20 to-teal-500/20 rounded-3xl blur-2xl" />

        <div className="relative bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 shadow-2xl">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg shadow-green-500/30"
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
          </motion.div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl text-white text-center mb-3">
            Request Submitted Successfully!
          </h3>

          <p className="text-zinc-400 text-center mb-8">
            Our account manager will reach out to you on WhatsApp within the next 15 minutes.
          </p>

          {/* Account Manager Card */}
          <div className="bg-zinc-950/60 border border-zinc-800/50 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-4">
              {/* Manager Photo Placeholder */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center flex-shrink-0 border-2 border-zinc-800">
                <span className="text-white text-xl font-medium">AM</span>
              </div>
              
              <div className="flex-1">
                <p className="text-white font-medium mb-1">Your Account Manager</p>
                <p className="text-sm text-zinc-400 mb-2">PropTech Solutions Team</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400">Active Now</span>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="space-y-3 mb-6">
            <p className="text-sm text-zinc-400 mb-3">What happens next:</p>
            {[
              'WhatsApp message within 15 minutes',
              'Quick discovery call (15-20 mins)',
              'Custom proposal within 24 hours',
              'Technical demo & walkthrough'
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-teal-400">{index + 1}</span>
                </div>
                <p className="text-sm text-zinc-300">{step}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={() => window.open('https://wa.me/919876543210?text=Hi, I just submitted a request', '_blank')}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Open WhatsApp Now
          </button>

          {/* Footer Note */}
          <p className="text-xs text-center text-zinc-500 mt-4">
            Available Mon-Sat, 9 AM - 8 PM IST
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
