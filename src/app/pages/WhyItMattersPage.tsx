import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryFormModal } from '../components/EnquiryFormModal';
import { AlertCircle, TrendingUp, Clock, Target, Database, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhyItMattersPage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const problems = [
    {
      icon: Clock,
      title: 'Manual Follow-ups',
      description: 'Hours wasted on repetitive tasks that should be automated',
      color: 'rose'
    },
    {
      icon: Database,
      title: 'Data Scattered Across Tools',
      description: 'No single source of truth, leading to missed opportunities',
      color: 'red'
    },
    {
      icon: TrendingUp,
      title: 'Low Lead Conversion',
      description: 'Prospects slipping through cracks due to poor systems',
      color: 'orange'
    },
    {
      icon: AlertCircle,
      title: 'No Real Performance Visibility',
      description: 'Flying blind without actionable insights or metrics',
      color: 'amber'
    }
  ];

  const impacts = [
    { label: 'Faster Sales Cycles', value: '40%', description: 'Reduction in average deal time' },
    { label: 'Higher Close Rates', value: '2.5x', description: 'Improvement in conversion' },
    { label: 'Real-Time Reporting', value: '24/7', description: 'Live data visibility' },
    { label: 'Full Data Ownership', value: '100%', description: 'Complete control & security' }
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
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-teal-500/5" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Technology Is Either
              <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Scaling You — or Slowing You Down
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Outdated systems create friction, lost leads, and operational chaos.
            </p>

            <p className="text-xl md:text-2xl text-teal-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              Custom-built infrastructure eliminates bottlenecks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-zinc-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full mb-6">
              <AlertCircle className="w-5 h-5 text-rose-400" />
              <span className="text-rose-400 text-sm font-medium uppercase tracking-wider">
                Common Bottlenecks
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              These Problems Are Costing You Revenue
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every day without proper systems means missed opportunities and frustrated teams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-rose-500/10 to-zinc-900/50 border border-rose-500/20 rounded-2xl backdrop-blur-sm group hover:border-rose-500/40 transition-all duration-300"
              >
                <div className="p-3 bg-rose-500/10 rounded-xl w-fit mb-6">
                  <problem.icon className="w-8 h-8 text-rose-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {problem.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900/50 to-[#0a1628]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 text-sm font-medium uppercase tracking-wider">
                When Systems Align
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Transformation Is Measurable
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              When your technology infrastructure is properly engineered, everything changes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-teal-500/10 to-zinc-900/30 border border-teal-500/20 rounded-2xl backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4"
                >
                  {impact.value}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {impact.label}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-3xl overflow-hidden">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-teal-400 mb-2">System Performance Dashboard</h3>
                <p className="text-zinc-500 text-sm">Real-time visibility into your operations</p>
              </div>

              {/* Mock Performance Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl text-center">
                  <div className="text-xs text-zinc-400 mb-2">Lead Response</div>
                  <div className="text-2xl font-bold text-emerald-400">{'< 2 min'}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 rounded-xl text-center">
                  <div className="text-xs text-zinc-400 mb-2">Conversion Rate</div>
                  <div className="text-2xl font-bold text-teal-400">4.2%</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl text-center">
                  <div className="text-xs text-zinc-400 mb-2">System Uptime</div>
                  <div className="text-2xl font-bold text-blue-400">99.9%</div>
                </div>
              </div>

              {/* Performance Bars */}
              <div className="space-y-4">
                {[
                  { label: 'Sales Pipeline Health', value: 92 },
                  { label: 'Team Productivity', value: 87 },
                  { label: 'Data Quality Score', value: 95 }
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-400">{bar.label}</span>
                      <span className="text-teal-400 font-semibold">{bar.value}%</span>
                    </div>
                    <div className="h-3 bg-zinc-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
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
            title="Stop Losing Opportunities to Bad Infrastructure"
            subtitle="Let's audit your current systems and identify where you're leaving money on the table"
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