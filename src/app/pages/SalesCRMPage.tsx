import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryFormModal } from '../components/EnquiryFormModal';
import { Users, Target, TrendingUp, Bell, BarChart3, MessageSquare, ArrowRight, CheckCircle2, Smartphone, Zap } from 'lucide-react';

export default function SalesCRMPage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const features = [
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Centralized database with complete customer profiles, interaction history, and automated data enrichment.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400'
    },
    {
      icon: Target,
      title: 'Lead Scoring & Tracking',
      description: 'AI-powered lead qualification that identifies high-value prospects automatically.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      title: 'Sales Pipeline Visualization',
      description: 'Real-time deal tracking with drag-and-drop stages and automated follow-up reminders.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: Bell,
      title: 'Automated Workflows',
      description: 'Trigger emails, tasks, and notifications based on customer actions and deal stages.',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Revenue forecasting, conversion metrics, and team performance dashboards in real-time.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: MessageSquare,
      title: 'Unified Communication',
      description: 'Email, WhatsApp, and call integration all tracked in one place with conversation history.',
      gradient: 'from-rose-500/20 to-red-500/20',
      iconColor: 'text-rose-400'
    }
  ];

  const outcomes = [
    '35% increase in sales team productivity within first quarter',
    'Reduce lead response time from hours to minutes',
    'Close 2x more deals with intelligent follow-up automation',
    'Complete visibility into sales pipeline and revenue forecasting'
  ];

  const handleCTAClick = () => {
    setShowEnquiryForm(true);
  };

  const handleEnquiryFormSubmit = () => {
    setShowEnquiryForm(false);
    setShowThankYou(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white antialiased">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-teal-500/5" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                Sales CRM Systems
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Close More Deals With
              <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Intelligent CRM
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Purpose-built CRM for Real Estate & high-ticket sales teams. Track every lead, 
              automate follow-ups, and get complete visibility into your sales pipeline.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCTAClick}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-zinc-800/50 border border-zinc-700/50 rounded-xl font-semibold hover:bg-zinc-800 transition-all duration-300">
                See ROI Calculator
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
              Proven Results for Sales Teams
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
                  <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
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
              Everything Your Sales Team Needs
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Built specifically for Real Estate developers and high-value sales cycles
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
                Beautiful & Intuitive Interface
              </h2>
              <p className="text-zinc-400 text-lg">
                Sales pipeline management that your team will actually use
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-3xl overflow-hidden">
              {/* Mock CRM Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-700/50">
                  <div className="text-sm font-semibold text-teal-400">Sales Pipeline Overview</div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-zinc-500" />
                    <Zap className="w-4 h-4 text-zinc-500" />
                  </div>
                </div>
                
                {/* Pipeline Stages */}
                <div className="grid grid-cols-4 gap-4">
                  {['New Leads', 'Qualified', 'Proposal', 'Closing'].map((stage, i) => (
                    <div key={i} className="space-y-2">
                      <div className="text-xs text-zinc-400 font-medium mb-3">{stage}</div>
                      {[1, 2, 3].map((card) => (
                        <div
                          key={card}
                          className="p-3 bg-zinc-800/50 border border-zinc-700/30 rounded-lg space-y-2"
                        >
                          <div className="h-2 w-3/4 bg-zinc-700/50 rounded" />
                          <div className="h-2 w-1/2 bg-zinc-700/30 rounded" />
                          <div className="flex items-center justify-between pt-2">
                            <div className="h-2 w-12 bg-blue-500/30 rounded" />
                            <div className="w-5 h-5 rounded-full bg-zinc-700/50" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { label: 'Pipeline Value', value: '₹2.4Cr', color: 'blue' },
                    { label: 'Deals Closing', value: '12', color: 'teal' },
                    { label: 'Conversion Rate', value: '34%', color: 'emerald' }
                  ].map((stat, i) => (
                    <div key={i} className={`p-4 bg-gradient-to-br from-${stat.color}-500/10 to-transparent border border-${stat.color}-500/20 rounded-xl`}>
                      <div className="text-xs text-zinc-400 mb-1">{stat.label}</div>
                      <div className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</div>
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
            onFormSubmit={handleCTAClick}
            title="Transform Your Sales Process Today"
            subtitle="See how our CRM can double your team's productivity in 30 days"
          />
        </div>
      </section>

      <Footer />
      <FloatingActionBar />
      <ThankYouModal isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
      <EnquiryFormModal isOpen={showEnquiryForm} onClose={() => setShowEnquiryForm(false)} onFormSubmit={handleEnquiryFormSubmit} />
    </div>
  );
}