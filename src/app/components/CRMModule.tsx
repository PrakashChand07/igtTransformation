import { motion } from 'motion/react';
import { Bot, MessageCircle, TrendingUp, Users, Zap } from 'lucide-react';

export function CRMModule() {
  const features = [
    'AI-powered lead scoring and prioritization',
    'WhatsApp-native sales funnel integration',
    'Site visit tracking and follow-up automation',
    'Custom commission workflows for channel partners',
    'Real-time inventory sync across all touchpoints'
  ];

  return (
    <section className="relative py-6 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 via-amber-500/10 to-teal-500/10 rounded-3xl blur-2xl" />

              {/* Dashboard Container */}
              <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 shadow-2xl">
                {/* Header Bar */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-medium">Sales Command Center</h3>
                      <p className="text-zinc-500 text-xs">Real-time Pipeline</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-zinc-400">Live</span>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-teal-400" />
                      <span className="text-xs text-zinc-400">Hot Leads</span>
                    </div>
                    <p className="text-2xl text-white">127</p>
                    <span className="text-xs text-green-400">+23% today</span>
                  </div>
                  <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-zinc-400">WhatsApp</span>
                    </div>
                    <p className="text-2xl text-white">84</p>
                    <span className="text-xs text-amber-400">Active chats</span>
                  </div>
                </div>

                {/* Lead List */}
                <div className="space-y-3">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Priority Follow-ups</p>
                  {[
                    { name: 'Rajesh Sharma', score: 92, status: 'Site visit booked', color: 'teal' },
                    { name: 'Priya Desai', score: 87, status: 'Negotiating', color: 'amber' },
                    { name: 'Amit Patel', score: 78, status: 'Awaiting response', color: 'blue' }
                  ].map((lead, index) => (
                    <div key={index} className="bg-zinc-950/50 border border-zinc-800/50 rounded-lg p-3 hover:border-zinc-700/60 transition-all cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                            <Users className="w-4 h-4 text-zinc-400" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{lead.name}</p>
                            <p className="text-zinc-500 text-xs">{lead.status}</p>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded-full bg-${lead.color}-500/10 border border-${lead.color}-500/20`}>
                          <span className={`text-xs text-${lead.color}-400`}>{lead.score}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-teal-600/80 to-teal-500/80 hover:from-teal-600 hover:to-teal-500 text-white py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  AI-Powered Insights
                </button>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-sm text-amber-300">Module A</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
              Custom CRM Built for
              <span className="block bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent mt-2">
                Indian Sales Teams
              </span>
            </h2>

            <p className="text-lg text-zinc-400 mb-6 lg:mb-8 leading-relaxed">
              A powerful, fully customizable CRM designed specifically for Indian sales teams. Manage leads, automate follow-ups, track performance, and close deals faster — all in one easy-to-use platform built for the Indian market.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                  </div>
                  <p className="text-zinc-300 group-hover:text-white transition-colors duration-300">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 lg:mt-10 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/30 to-amber-500/30 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
              <div className="relative p-6 bg-zinc-950/80 border border-zinc-800/80 rounded-xl backdrop-blur-sm">
                <p className="text-sm md:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-amber-200 italic text-center">
                  "No monthly fees. No data lock-in. <span className="text-white font-semibold">Complete source code ownership.</span> Deploy on your infrastructure or ours."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}