import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryFormModal } from '../components/EnquiryFormModal';
import { Server, Database, Lock, Workflow, GitBranch, Globe, ArrowRight, CheckCircle2, Layers, Shield } from 'lucide-react';

export default function EnterpriseWebAppsPage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const features = [
    {
      icon: Server,
      title: 'Microservices Architecture',
      description: 'Modular, independently deployable services that scale horizontally without single points of failure.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400'
    },
    {
      icon: Database,
      title: 'High-Performance Databases',
      description: 'Optimized data models with caching layers, handling millions of transactions per day.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Lock,
      title: 'Role-Based Access Control',
      description: 'Granular permissions system with multi-factor authentication and audit logs.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: Workflow,
      title: 'Business Process Automation',
      description: 'Custom workflows that eliminate manual tasks and reduce operational overhead.',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: GitBranch,
      title: 'API Integration Hub',
      description: 'Connect with ERP, CRM, and third-party tools through standardized REST/GraphQL APIs.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Globe,
      title: 'Multi-Region Deployment',
      description: 'Global CDN distribution with edge computing for lightning-fast load times worldwide.',
      gradient: 'from-rose-500/20 to-red-500/20',
      iconColor: 'text-rose-400'
    }
  ];

  const outcomes = [
    'Reduce operational costs by 45% through automation',
    '99.99% uptime with zero-downtime deployment strategies',
    'Handle 10x traffic spikes without infrastructure changes',
    'Complete SOC 2 and ISO 27001 compliance readiness'
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-6">
              <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider">
                Enterprise Web Applications
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Mission-Critical Apps
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Complex business applications that power operations for enterprise teams. 
              From internal tools to customer portals — built for security, performance, and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCTAClick}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Architecture Review
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-zinc-800/50 border border-zinc-700/50 rounded-xl font-semibold hover:bg-zinc-800 transition-all duration-300">
                View Portfolio
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
              Enterprise-Grade Reliability
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
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
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
              Built for Complex Operations
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every layer engineered for performance, security, and maintainability
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
                System Architecture That Scales
              </h2>
              <p className="text-zinc-400 text-lg">
                From admin panels to customer portals — designed for complexity
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-3xl overflow-hidden">
              {/* Mock Architecture Diagram */}
              <div className="space-y-6">
                <div className="text-xs text-zinc-500 font-mono text-center pb-4 border-b border-zinc-700/50">
                  System Architecture Overview
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {/* Frontend Layer */}
                  <div className="col-span-3 p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="w-4 h-4 text-indigo-400" />
                      <div className="text-xs font-semibold text-indigo-400">Frontend Layer</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['Web App', 'Mobile App', 'Admin Panel'].map((item, i) => (
                        <div key={i} className="p-2 bg-zinc-800/50 rounded text-[10px] text-center text-zinc-400">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* API Layer */}
                  <div className="col-span-3 p-4 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <GitBranch className="w-4 h-4 text-teal-400" />
                      <div className="text-xs font-semibold text-teal-400">API Gateway</div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {['Auth', 'Users', 'Business Logic', 'Webhooks'].map((item, i) => (
                        <div key={i} className="p-2 bg-zinc-800/50 rounded text-[10px] text-center text-zinc-400">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Data Layer */}
                  <div className="col-span-3 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Database className="w-4 h-4 text-amber-400" />
                      <div className="text-xs font-semibold text-amber-400">Data Layer</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['PostgreSQL', 'Redis Cache', 'File Storage'].map((item, i) => (
                        <div key={i} className="p-2 bg-zinc-800/50 rounded text-[10px] text-center text-zinc-400">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 pt-4">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-medium">End-to-End Encryption</span>
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
            title="Ready to Build Enterprise-Scale Applications?"
            subtitle="Let's discuss your technical requirements and infrastructure needs"
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