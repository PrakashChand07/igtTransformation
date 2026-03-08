import { motion } from 'motion/react';
import { Sparkles, Building2, Globe } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Send } from 'lucide-react';

interface HeroFormData {
  fullName: string;
  mobile: string;
  service: string;
  requirement: string;
}

interface HeroSectionProps {
  onFormSubmit: () => void;
}

export function HeroSection({ onFormSubmit }: HeroSectionProps) {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<HeroFormData>();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data: HeroFormData) => {
    setIsLoading(true);
    setErrorMsg('');

    const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
    const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: {
            name: 'Luxury Real Estate Landing Page',
            email: CONTACT_EMAIL,
          },
          to: [{ email: CONTACT_EMAIL, name: 'Admin' }],
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
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        onFormSubmit();
      } else {
        const errData = await response.json();
        setErrorMsg(errData.message || 'Email send karne me error aaya. Please try again.');
      }
    } catch (error) {
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    { icon: Sparkles, title: 'New Launch Microsites', desc: '72-hour go-live guarantee' },
    { icon: Building2, title: 'Custom Sales CRM', desc: 'Built for Indian workflows' },
    { icon: Globe, title: 'Corporate Portals', desc: 'Enterprise-grade systems' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1762430047160-db0e2670c533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBuaWdodCUyMGRhcmt8ZW58MXx8fHwxNzcyMDg5MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/95 via-zinc-900/90 to-zinc-950/95" />
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-950/30 via-transparent to-amber-950/20" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm text-teal-300">Private Infrastructure for Elite Developers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              <span className="block bg-gradient-to-r from-teal-400 via-teal-300 to-amber-400 bg-clip-text text-transparent mb-3">
                Digital Infrastructure
              </span>
              <span className="block text-white">
                for Luxury Real Estate professionals
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed">
              Custom-built CRM systems, project microsites, and corporate portals designed exclusively for luxury real estate developers. No templates. No subscriptions. Complete ownership.
            </p>

            {/* Service Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  onHoverStart={() => setActiveCard(index)}
                  onHoverEnd={() => setActiveCard(null)}
                  className="relative group cursor-pointer"
                >
                  <div className={`
                    relative p-4 rounded-xl border transition-all duration-300
                    ${activeCard === index
                      ? 'bg-zinc-800/60 border-teal-500/40 shadow-lg shadow-teal-500/10'
                      : 'bg-zinc-900/40 border-zinc-800/50 hover:border-zinc-700/60'
                    }
                    backdrop-blur-sm
                  `}>
                    <service.icon className={`
                      w-7 h-7 mb-3 transition-colors duration-300
                      ${activeCard === index ? 'text-teal-400' : 'text-zinc-500'}
                    `} />
                    <h3 className="text-white text-sm font-medium mb-1">{service.title}</h3>
                    <p className="text-zinc-500 text-xs">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:justify-self-end w-full max-w-md"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-amber-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-70" />

              <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl text-white mb-2">Start Your Project</h3>
                  <p className="text-zinc-400 text-sm">Get a custom proposal within 24 hours</p>
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
        </div>
      </div>
    </section>
  );
}