import { motion } from 'motion/react';
import { Smartphone, Zap, Image, MapPin, Calendar } from 'lucide-react';

export function LaunchpadModule() {
  return (
    <section className="relative py-6 lg:py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-sm text-teal-300">Module B</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
              Project Launch Sites
              <span className="block bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent mt-2">
                That Convert in 72 Hours
              </span>
            </h2>

            <p className="text-lg text-zinc-400 mb-6 lg:mb-8 leading-relaxed">
              Mobile-first microsites custom-designed for each new project. Pre-registration forms, virtual tours, payment gateways, and CRM integration—live before your launch event.
            </p>

            <div className="space-y-4 mb-6 lg:mb-8">
              {[
                { icon: Zap, text: '72-hour go-live guarantee from design to deployment' },
                { icon: Image, text: 'Interactive 3D walkthroughs and gallery modules' },
                { icon: MapPin, text: 'Geolocation-based lead tracking and analytics' },
                { icon: Calendar, text: 'Integrated booking system for site visits' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <p className="text-zinc-300 group-hover:text-white transition-colors duration-300 pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-zinc-900/60 border border-zinc-800/50 rounded-lg text-sm text-zinc-400">
                Next.js + React
              </div>
              <div className="px-4 py-2 bg-zinc-900/60 border border-zinc-800/50 rounded-lg text-sm text-zinc-400">
                95+ PageSpeed
              </div>
              <div className="px-4 py-2 bg-zinc-900/60 border border-zinc-800/50 rounded-lg text-sm text-zinc-400">
                SEO Optimized
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/20 via-teal-500/20 to-amber-500/20 rounded-[3rem] blur-3xl" />

              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] bg-zinc-950 rounded-[2.5rem] p-3 border-4 border-zinc-800 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-950 rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="relative bg-zinc-900 rounded-[2rem] overflow-hidden h-[580px]">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 px-8 pt-3 pb-2 flex items-center justify-between z-20">
                    <span className="text-white text-xs">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-white rounded-sm" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3MjAxMDQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Luxury Property"
                      className="w-full h-64 object-cover"
                    />

                    {/* Overlay Card */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <div className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-white text-sm font-medium">Signature Residences</h3>
                            <p className="text-zinc-400 text-xs">Bandra West, Mumbai</p>
                          </div>
                          <div className="text-right">
                            <p className="text-amber-400 text-sm font-medium">₹12.5 Cr</p>
                            <p className="text-zinc-500 text-xs">onwards</p>
                          </div>
                        </div>

                        <div className="flex gap-2 mb-3">
                          <div className="flex-1 py-1.5 px-2 bg-zinc-900/80 border border-zinc-800/50 rounded-lg text-center">
                            <p className="text-white text-xs">4 BHK</p>
                          </div>
                          <div className="flex-1 py-1.5 px-2 bg-zinc-900/80 border border-zinc-800/50 rounded-lg text-center">
                            <p className="text-white text-xs">3200 sq.ft</p>
                          </div>
                          <div className="flex-1 py-1.5 px-2 bg-zinc-900/80 border border-zinc-800/50 rounded-lg text-center">
                            <p className="text-white text-xs">Ready</p>
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-2 rounded-lg text-xs font-medium">
                          Book Site Visit
                        </button>
                      </div>
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-24 right-4"
                    >
                      <div className="bg-teal-500/20 backdrop-blur-md border border-teal-500/30 rounded-full p-2">
                        <Smartphone className="w-4 h-4 text-teal-300" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
