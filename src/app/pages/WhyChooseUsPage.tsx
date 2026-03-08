import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryFormModal } from '../components/EnquiryFormModal';
import { Code2, Shield, Zap, Key, Search, Pen, Wrench, Rocket, BarChart, ArrowRight } from 'lucide-react';

export default function WhyChooseUsPage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const strengths = [
    {
      icon: Code2,
      title: 'Custom-First Approach',
      description: 'No generic SaaS dependency. Every system is built specifically for your business logic and workflows.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level data encryption, secure architecture, and compliance-ready infrastructure from day one.',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: Zap,
      title: 'Speed Optimized',
      description: '95+ PageSpeed performance scores. Lightning-fast load times that convert visitors into customers.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: Key,
      title: 'Full Ownership',
      description: 'You own the code. Always. No vendor lock-in. Complete control over your digital infrastructure.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400'
    }
  ];

  const process = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'Deep dive into your business, goals, and pain points'
    },
    {
      icon: Pen,
      title: 'Architecture',
      description: 'Design scalable technical foundation'
    },
    {
      icon: Wrench,
      title: 'Development',
      description: 'Build with best practices and clean code'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Launch on enterprise-grade infrastructure'
    },
    {
      icon: BarChart,
      title: 'Optimization',
      description: 'Continuous monitoring and improvements'
    }
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Built for Performance.
              <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Designed for Scale.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              We don't sell templates.
            </p>

            <p className="text-xl md:text-2xl text-teal-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              We engineer digital infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Enterprise-grade development with startup agility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-8 bg-gradient-to-br ${strength.gradient} border border-zinc-700/50 rounded-2xl backdrop-blur-sm group cursor-default`}
              >
                <div className="p-4 bg-zinc-900/80 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <strength.icon className={`w-10 h-10 ${strength.iconColor}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {strength.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-[#0a1628]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Systematic approach from concept to continuous optimization
            </p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500/20 via-teal-500/50 to-teal-500/20 transform -translate-y-1/2" />
                
                <div className="grid grid-cols-5 gap-8 relative">
                  {process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="text-center"
                    >
                      {/* Icon Circle */}
                      <div className="relative z-10 mx-auto w-20 h-20 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-2 border-teal-500/50 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <step.icon className="w-8 h-8 text-teal-400" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-2 border-teal-500/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <step.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Mockup Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                Quality You Can Measure
              </h2>
              <p className="text-zinc-400 text-lg">
                Every project meets our strict performance and security standards
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 rounded-xl">
                  <div className="text-sm text-zinc-400 mb-2">PageSpeed Score</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-teal-400">97</div>
                    <div className="text-zinc-500 text-sm">/ 100</div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl">
                  <div className="text-sm text-zinc-400 mb-2">Security Rating</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-emerald-400">A+</div>
                    <div className="text-zinc-500 text-sm">/ Grade</div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl">
                  <div className="text-sm text-zinc-400 mb-2">Code Quality</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-blue-400">9.8</div>
                    <div className="text-zinc-500 text-sm">/ 10</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { check: 'Clean, maintainable code architecture', status: true },
                  { check: 'Comprehensive security testing', status: true },
                  { check: 'Mobile-responsive on all devices', status: true },
                  { check: 'SEO optimization built-in', status: true },
                  { check: '30-day post-launch support', status: true }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-zinc-800/30 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-teal-400 rounded-full" />
                    </div>
                    <span className="text-zinc-300">{item.check}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto">
          <EnquiryForm 
            onFormSubmit={handleCTAClick}
            title="Work With a Team That Builds for Growth"
            subtitle="Let's discuss your project and create a custom solution roadmap"
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