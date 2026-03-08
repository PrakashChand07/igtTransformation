import { motion } from 'motion/react';
import { MapPin, Star, Quote, CheckCircle2 } from 'lucide-react';

export function SocialProofSection() {
  const cities = [
    { name: 'Mumbai', x: 25, y: 60, projects: 18 },
    { name: 'Bengaluru', x: 40, y: 75, projects: 12 },
    { name: 'NCR', x: 50, y: 35, projects: 15 },
    { name: 'Pune', x: 30, y: 68, projects: 9 }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Trusted Across
            <span className="block bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent mt-2">
              India's Luxury Markets
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Deployed for 50+ premium developers from Mumbai to Bengaluru
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* India Map Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 shadow-2xl">
              {/* Map Container */}
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                {/* India Outline (Simplified) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 300" className="w-full h-full opacity-20">
                    <path
                      d="M100,20 L130,40 L140,80 L145,120 L140,160 L135,200 L130,240 L120,270 L100,285 L80,270 L70,240 L65,200 L60,160 L55,120 L60,80 L70,40 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-teal-500"
                    />
                  </svg>
                </div>

                {/* City Markers */}
                {cities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="absolute group"
                    style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  >
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 animate-ping">
                      <div className="w-12 h-12 rounded-full bg-teal-500/30" />
                    </div>
                    
                    {/* Main Marker */}
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 border-2 border-zinc-900 shadow-lg shadow-teal-500/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/50 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      <p className="text-white text-xs font-medium">{city.name}</p>
                      <p className="text-teal-400 text-xs">{city.projects} projects</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-zinc-800/50">
                {[
                  { label: 'Cities', value: '15+' },
                  { label: 'Developers', value: '50+' },
                  { label: 'Projects', value: '120+' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl text-white font-medium mb-1">{stat.value}</p>
                    <p className="text-xs text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-teal-500/10 to-amber-500/10 rounded-3xl blur-2xl" />
              
              <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-12 h-12 text-teal-500/30" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-lg text-zinc-300 leading-relaxed mb-8 italic">
                  "We launched three premium projects last year. Their custom CRM handles everything—from broker networks to direct leads to site visits. No monthly fees, complete control over our data, and the WhatsApp integration alone has increased our conversion rate by 40%."
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border-2 border-zinc-700 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1509603148757-f2a393f18afa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzc21hbiUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA4OTM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Rajesh Malhotra</p>
                    <p className="text-zinc-400 text-sm">Director of Sales</p>
                    <p className="text-zinc-500 text-sm">Prestige Estates, Bengaluru</p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-zinc-800/50">
                  {['ISO Certified', 'Data Secure', 'RERA Compliant'].map((badge, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-950/50 border border-zinc-800/50 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-teal-400" />
                      <span className="text-xs text-zinc-400">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}