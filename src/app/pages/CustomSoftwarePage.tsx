import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryFormModal } from '../components/EnquiryFormModal';
import { Code2, Layers, Zap, Shield, Settings, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CustomSoftwarePage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const features = [
    {
      icon: Code2,
      title: 'Custom-Built Architecture',
      description: 'Scalable software solutions designed specifically for your business model and growth trajectory.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400'
    },
    {
      icon: Layers,
      title: 'Multi-Tenant SaaS Platforms',
      description: 'Build subscription-based platforms with secure user isolation and dynamic feature sets.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description: 'Optimized code architecture ensuring sub-second response times at enterprise scale.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption, compliance-ready infrastructure, and continuous security monitoring.',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: Settings,
      title: 'API-First Development',
      description: 'Flexible integrations with third-party tools and future-proof extensibility.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Built for Scale',
      description: 'Auto-scaling infrastructure that grows with your user base without performance loss.',
      gradient: 'from-rose-500/20 to-red-500/20',
      iconColor: 'text-rose-400'
    }
  ];

  const outcomes = [
    '3x faster time-to-market compared to traditional development',
    '99.9% uptime SLA with automated failover systems',
    'Reduced operational costs by up to 40% with cloud-native architecture',
    'Seamless integration with existing tools and workflows'
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
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
              <span className="text-teal-400 text-sm font-medium uppercase tracking-wider">
                Custom Software & SaaS Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Software That
              <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Scales With You
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Transform your vision into production-ready SaaS platforms and custom enterprise software. 
              We build scalable, secure, and revenue-generating digital products for ambitious businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCTAClick}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Request Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-zinc-800/50 border border-zinc-700/50 rounded-xl font-semibold hover:bg-zinc-800 transition-all duration-300">
                View Case Studies
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
              Measurable Business Impact
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
                  <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
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
              Enterprise-Grade Capabilities
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every solution we build is designed for performance, security, and long-term scalability
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
                Built for Modern Businesses
              </h2>
              <p className="text-zinc-400 text-lg">
                Intuitive interfaces powered by robust backend systems
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-3xl overflow-hidden">
              {/* Mock Dashboard UI */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-700/50">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">dashboard.yoursaas.com</div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 pt-4">
                  <div className="col-span-4 md:col-span-1 space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-10 bg-zinc-800/50 rounded-lg border border-zinc-700/30" />
                    ))}
                  </div>
                  <div className="col-span-4 md:col-span-3 space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-xl">
                          <div className="h-3 w-20 bg-zinc-700/50 rounded mb-3" />
                          <div className="h-8 w-16 bg-teal-500/20 rounded" />
                        </div>
                      ))}
                    </div>
                    <div className="h-48 bg-zinc-800/50 border border-zinc-700/30 rounded-xl p-4">
                      <div className="h-full flex items-end justify-around">
                        {[40, 60, 45, 75, 55, 80, 65].map((height, i) => (
                          <div
                            key={i}
                            className="w-full mx-1 bg-gradient-to-t from-teal-500 to-cyan-500 rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
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
            onFormSubmit={handleCTAClick}
            title="Ready to Build Your Custom SaaS?"
            subtitle="Get a free technical consultation and roadmap for your software project"
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