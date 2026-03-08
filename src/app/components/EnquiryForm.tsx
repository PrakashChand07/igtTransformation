import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Send } from 'lucide-react';


interface EnquiryFormData {
  fullName: string;
  mobile: string;
  service: string;
  requirement: string;
}

interface EnquiryFormProps {
  onFormSubmit?: () => void;
  title?: string;
  subtitle?: string;
}

export function EnquiryForm({
  onFormSubmit,
  title = "Start Your Project",
  subtitle = "Get a custom proposal within 24 hours"
}: EnquiryFormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<EnquiryFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data: EnquiryFormData) => {
    setIsLoading(true);
    setErrorMsg('');

    // ── Run Brevo email ──
    const [brevoResult] = await Promise.allSettled([
      // 1️⃣  Brevo Email
      fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': import.meta.env.VITE_BREVO_API_KEY as string,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: {
            name: 'Luxury Real Estate Landing Page',
            email: import.meta.env.VITE_CONTACT_EMAIL as string,
          },
          to: [{ email: import.meta.env.VITE_CONTACT_EMAIL as string, name: 'Admin' }],
          subject: `🏢 New Enquiry: ${data.service} - ${data.fullName}`,
          htmlContent: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; border: 2px solid #14b8a6; border-radius: 12px; overflow: hidden;">
              <div style="background: #0d9488; padding: 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 22px;">🏢 New Enquiry Received</h1>
                <p style="color: #ccfbf1; margin: 8px 0 0; font-size: 14px;">Luxury Real Estate Landing Page</p>
              </div>
              <div style="padding: 32px; background: #1c1c1c;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px; font-weight: bold; color: #14b8a6; border-bottom: 1px solid #333; width: 140px;">👤 Full Name:</td>
                    <td style="padding: 12px; color: #e4e4e4; border-bottom: 1px solid #333;">${data.fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-weight: bold; color: #14b8a6; border-bottom: 1px solid #333;">📞 Mobile:</td>
                    <td style="padding: 12px; color: #e4e4e4; border-bottom: 1px solid #333;">${data.mobile}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-weight: bold; color: #14b8a6; border-bottom: 1px solid #333;">🛠️ Service:</td>
                    <td style="padding: 12px; color: #e4e4e4; border-bottom: 1px solid #333; text-transform: capitalize;">${data.service}</td>
                  </tr>
                </table>
                <div style="margin-top: 20px; padding: 16px; background: #111; border-radius: 8px; border: 1px solid #333;">
                  <p style="font-weight: bold; color: #14b8a6; margin: 0 0 8px;">📋 Requirement:</p>
                  <p style="color: #ccc; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.requirement}</p>
                </div>
              </div>
              <div style="background: #0d9488; padding: 16px; text-align: center;">
                <p style="color: #fff; margin: 0; font-size: 12px;">Sent from Luxury Real Estate Landing Page</p>
              </div>
            </div>
          `,
        }),
      }),

    ]);

    // Brevo result decide karega success/error UI
    if (brevoResult.status === 'fulfilled' && brevoResult.value.ok) {
      setIsSubmitted(true);
      reset();
      if (onFormSubmit) onFormSubmit();
    } else {
      let errMsg = 'Email send karne me error aaya. Please try again.';
      if (brevoResult.status === 'fulfilled') {
        try {
          const errData = await brevoResult.value.json();
          errMsg = errData.message || errMsg;
        } catch (_) { /* ignore */ }
      }
      setErrorMsg(errMsg);
    }

    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-amber-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-70" />

        <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-2xl text-white mb-2">{title}</h3>
            <p className="text-zinc-400 text-sm">{subtitle}</p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/30">
                <Send className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl text-white font-medium mb-2">Enquiry Sent!</h4>
              <p className="text-zinc-400 text-sm mb-4">We will get back to you within 24 hours.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-teal-400 text-sm hover:text-teal-300 underline underline-offset-4"
              >
                Send another enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Full Name</label>
                <input
                  {...register('fullName', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.fullName.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Mobile Number</label>
                <input
                  {...register('mobile', {
                    required: 'Mobile number is required',
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Enter valid 10-digit mobile number'
                    }
                  })}
                  type="tel"
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all"
                  placeholder="10-digit mobile number"
                />
                {errors.mobile && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.mobile.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Select Service</label>
                <select
                  {...register('service', { required: 'Please select a service' })}
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Choose a service</option>
                  <option value="microsites">New Launch Microsites</option>
                  <option value="crm">Custom Sales CRM</option>
                  <option value="portal">Corporate Portal</option>
                  <option value="channel-partner">Channel Partner Portals</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.service.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Describe Your Requirement</label>
                <textarea
                  {...register('requirement', { required: 'Please describe your requirement' })}
                  rows={3}
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition-all resize-none"
                  placeholder="Tell us about your specific needs..."
                />
                {errors.requirement && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.requirement.message}</span>
                )}
              </div>

              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>Submit Enquiry <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}

          <p className="text-center text-xs text-zinc-500 mt-4">
            Trusted by 50+ premium developers across India
          </p>
        </div>
      </div>
    </motion.div>
  );
}
