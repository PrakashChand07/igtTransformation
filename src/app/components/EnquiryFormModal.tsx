import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

interface EnquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmit?: () => void;
}

export function EnquiryFormModal({ isOpen, onClose, onFormSubmit }: EnquiryFormModalProps) {
  if (!isOpen) return null;

  const handleFormSubmit = () => {
    if (onFormSubmit) {
      onFormSubmit();
    }
    onClose();
  };

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

        <EnquiryForm 
          onFormSubmit={handleFormSubmit}
          title="Get Your Custom Quote"
          subtitle="Share your requirements and receive a detailed proposal"
        />
      </motion.div>
    </motion.div>
  );
}
