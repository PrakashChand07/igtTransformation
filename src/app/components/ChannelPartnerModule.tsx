import { motion } from 'motion/react';
import { Users, TrendingUp, FileText, CreditCard, BarChart3, Lock } from 'lucide-react';

export function ChannelPartnerModule() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portal Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-teal-500/10 to-amber-500/10 rounded-3xl blur-2xl" />
              
              {/* Portal Container */}
              <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-medium">Welcome, Kapoor Associates</h3>
                      <p className="text-zinc-500 text-xs">Channel Partner ID: CP-4729</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-zinc-950/50 border border-zinc-800/50 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-zinc-500" />
                  </div>
                </div>

                {/* Stats Cards - Glassmorphism */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl" />
                    <div className="relative bg-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 rounded-xl p-4 group-hover:border-teal-500/30 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-teal-400" />
                        <span className="text-xs text-zinc-400">This Month</span>
                      </div>
                      <p className="text-2xl text-white mb-1">18</p>
                      <span className="text-xs text-teal-400">Total Deals</span>
                    </div>
                  </div>

                  <div className="relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-xl" />
                    <div className="relative bg-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 rounded-xl p-4 group-hover:border-amber-500/30 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="w-4 h-4 text-amber-400" />
                        <span className="text-xs text-zinc-400">Commission</span>
                      </div>
                      <p className="text-2xl text-white mb-1">₹42L</p>
                      <span className="text-xs text-amber-400">Earned</span>
                    </div>
                  </div>
                </div>

                {/* Inventory Table */}
                <div className="bg-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white text-sm font-medium flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-teal-400" />
                      Live Inventory
                    </h4>
                    <span className="text-xs text-zinc-500">Real-time sync</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { project: 'Signature Residences', units: '12/45', status: 'Available', color: 'teal' },
                      { project: 'Skyview Apartments', units: '8/32', status: 'Hot Selling', color: 'amber' },
                      { project: 'Grand Plaza', units: '3/28', status: 'Limited', color: 'red' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-zinc-900/50 rounded-lg hover:bg-zinc-900/80 transition-all cursor-pointer">
                        <div>
                          <p className="text-white text-xs font-medium">{item.project}</p>
                          <p className="text-zinc-500 text-xs">{item.units} units</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full bg-${item.color}-500/10 border border-${item.color}-500/20 text-${item.color}-400`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-teal-600/80 to-teal-500/80 hover:from-teal-600 hover:to-teal-500 text-white rounded-lg text-xs font-medium transition-all duration-300">
                    <FileText className="w-4 h-4" />
                    Generate Report
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 bg-zinc-950/50 border border-zinc-800/50 hover:border-zinc-700/60 text-zinc-300 rounded-lg text-xs font-medium transition-all duration-300">
                    <CreditCard className="w-4 h-4" />
                    View Payouts
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm mb-6">
              <span className="text-sm text-amber-300">Module C</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Channel Partner Portals
              <span className="block bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent mt-2">
                That Actually Get Used
              </span>
            </h2>

            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Give your broker network real-time inventory access, automated commission tracking, and lead management tools they'll actually want to use. Premium glassmorphism design with mobile-first UX.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Secure login system with role-based access control',
                'Real-time inventory sync across all projects',
                'Automated commission calculations and payout tracking',
                'Lead registration and status tracking dashboard',
                'Digital collateral library with branded materials',
                'Performance analytics and leaderboard system'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                  <p className="text-zinc-300 group-hover:text-white transition-colors duration-300">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-zinc-900/60 to-zinc-900/40 border border-zinc-800/50 rounded-xl backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Built for Scale</h4>
                  <p className="text-sm text-zinc-400">
                    Supports unlimited channel partners with tiered commission structures, white-label options, and API integration with your existing systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
