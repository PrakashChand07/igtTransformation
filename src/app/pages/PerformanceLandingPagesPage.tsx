import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryFormModal } from '../components/EnquiryFormModal';
import { Zap, Target, MousePointerClick, Eye, LineChart, Sparkles, TrendingUp, ArrowRight, CheckCircle2, Gauge, Layers } from 'lucide-react';

export default function PerformanceLandingPagesPage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const features = [
    {
      icon: Zap,
      title: '95+ PageSpeed Score',
      description: 'Lightning-fast load times under 1 second with aggressive optimization and lazy loading.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400'
    },
    {
      icon: Target,
      title: 'Conversion-Focused Design',
      description: 'Persuasive copywriting, strategic CTAs, and psychological triggers that drive action.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: MousePointerClick,
      title: 'A/B Testing Ready',
      description: 'Built-in variant testing for headlines, CTAs, and layouts to maximize conversions.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: Eye,
      title: 'Mobile-First Responsive',
      description: 'Optimized for every screen size with thumb-friendly buttons and easy scrolling.',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: LineChart,
      title: 'Analytics Integration',
      description: 'Google Analytics, Facebook Pixel, and conversion tracking configured out of the box.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Sparkles,
      title: 'Premium Animations',
      description: 'Subtle motion design that guides attention without sacrificing performance.',
      gradient: 'from-rose-500/20 to-red-500/20',
      iconColor: 'text-rose-400'
    }
  ];

  const outcomes = [
    'Average 4.2% conversion rate (2x industry standard)',
    'Sub-1 second load time on 4G mobile connections',
    'SEO-optimized structure for organic lead generation',
    '30% reduction in cost-per-lead on paid campaigns'
  ];

  const handleCTAClick = () => {
    setShowEnquiryForm(true);
  };

  const handleFormSubmit = () => {
    setShowEnquiryForm(false);
    setShowThankYou(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white antialiased">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
                Performance Landing Pages
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Pages That Convert
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                At Lightning Speed
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              High-converting landing pages built for ads, campaigns, and lead generation. 
              Optimized for speed, conversions, and maximum ROI on your marketing spend.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCTAClick}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Request Page Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-zinc-800/50 border border-zinc-700/50 rounded-xl font-semibold hover:bg-zinc-800 transition-all duration-300">
                View Examples
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Built for Performance Marketing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-zinc-800/30 border border-zinc-700/50 rounded-xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-zinc-300 text-lg">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Optimized for Every Metric
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              From page speed to conversion rate — every element engineered for results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-8 bg-gradient-to-br ${feature.gradient} border border-zinc-700/50 rounded-2xl backdrop-blur-sm group cursor-default`}
              >
                <div className="p-3 bg-zinc-900/80 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Dashboard Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-[#0a1628]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Performance Metrics That Matter
              </h2>
              <p className="text-zinc-400 text-lg">
                Real-time analytics showing speed, conversions, and user behavior
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-3xl overflow-hidden">
              {/* Mock Performance Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-700/50">
                  <div className="text-sm font-semibold text-amber-400">Page Performance</div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-green-400 font-medium">97/100</span>
                  </div>
                </div>
                
                {/* Performance Metrics */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Load Time', value: '0.8s', icon: Zap, color: 'amber' },
                    { label: 'Conv. Rate', value: '4.2%', icon: Target, color: 'emerald' },
                    { label: 'Bounce Rate', value: '32%', icon: Eye, color: 'blue' },
                    { label: 'Avg. Session', value: '2:34', icon: TrendingUp, color: 'purple' }
                  ].map((metric, i) => (
                    <div key={i} className={`p-4 bg-gradient-to-br from-${metric.color}-500/10 to-transparent border border-${metric.color}-500/20 rounded-xl`}>
                      <metric.icon className={`w-5 h-5 text-${metric.color}-400 mb-2`} />
                      <div className="text-[10px] text-zinc-400 mb-1">{metric.label}</div>
                      <div className={`text-xl font-bold text-${metric.color}-400`}>{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Conversion Funnel */}
                <div className="space-y-3 pt-4">
                  <div className="text-xs text-zinc-500 font-medium mb-2">Conversion Funnel</div>
                  {[
                    { stage: 'Page Views', value: 100, count: '2,450' },
                    { stage: 'Engaged Visitors', value: 78, count: '1,911' },
                    { stage: 'Form Started', value: 42, count: '1,029' },
                    { stage: 'Submitted', value: 32, count: '784' }
                  ].map((step, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400">{step.stage}</span>
                        <span className="text-amber-400 font-medium">{step.count}</span>
                      </div>
                      <div className="h-2 bg-zinc-800/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                          style={{ width: `${step.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Traffic Sources */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-700/50">
                  {[
                    { source: 'Google Ads', percentage: '45%' },
                    { source: 'Facebook', percentage: '32%' },
                    { source: 'Organic', percentage: '23%' }
                  ].map((source, i) => (
                    <div key={i} className="p-3 bg-zinc-800/30 rounded-lg text-center">
                      <div className="text-[10px] text-zinc-500 mb-1">{source.source}</div>
                      <div className="text-sm font-bold text-teal-400">{source.percentage}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <EnquiryForm 
            onFormSubmit={handleFormSubmit}
            title="Ready to Boost Your Conversions?"
            subtitle="Get a high-converting landing page delivered in 2 weeks"
          />
        </div>
      </section>

      <Footer />
      <FloatingActionBar />
      <ThankYouModal isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
      <EnquiryFormModal isOpen={showEnquiryForm} onClose={() => setShowEnquiryForm(false)} onFormSubmit={handleFormSubmit} />
    </div>
  );
}