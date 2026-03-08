import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryFormModal } from '../components/EnquiryFormModal';
import { Building2, Heart, ShoppingBag, GraduationCap, Briefcase, Rocket, ArrowRight, Settings } from 'lucide-react';

export default function IndustriesWeServePage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const industries = [
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'CRM systems, property portals, channel partner platforms, and automated lead management for developers and brokers.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400',
      customizations: ['Property listing management', 'Lead scoring & routing', 'Site visit scheduling', 'Payment tracking']
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Patient portals, appointment systems, telehealth platforms, and HIPAA-compliant medical record management.',
      gradient: 'from-rose-500/20 to-red-500/20',
      iconColor: 'text-rose-400',
      customizations: ['Patient management', 'Appointment booking', 'Prescription tracking', 'Insurance integration']
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'Online stores, inventory management, multi-vendor marketplaces, and subscription-based commerce platforms.',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400',
      customizations: ['Product catalog', 'Payment gateways', 'Logistics integration', 'Vendor dashboards']
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Learning management systems, online course platforms, student portals, and assessment tools.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400',
      customizations: ['Course management', 'Video streaming', 'Progress tracking', 'Certificate generation']
    },
    {
      icon: Briefcase,
      title: 'Corporate Enterprises',
      description: 'Internal tools, workflow automation, employee portals, and custom ERP solutions for large organizations.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
      customizations: ['Role-based access', 'Approval workflows', 'Department integrations', 'Reporting dashboards']
    },
    {
      icon: Rocket,
      title: 'Startups & SaaS',
      description: 'MVP development, subscription platforms, API-first products, and scalable multi-tenant SaaS applications.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
      customizations: ['User onboarding', 'Billing automation', 'Feature flags', 'Analytics tracking']
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Industry-Specific
              </span>
              Digital Infrastructure
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              We don't believe in one-size-fits-all solutions. Every industry has unique workflows, 
              and we design systems around real business logic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid Section */}
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
              Industries We Transform
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Custom software built around your industry's specific requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-8 bg-gradient-to-br ${industry.gradient} border border-zinc-700/50 rounded-2xl backdrop-blur-sm group cursor-default`}
              >
                <div className="p-4 bg-zinc-900/80 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <industry.icon className={`w-10 h-10 ${industry.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {industry.title}
                </h3>
                
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  {industry.description}
                </p>

                <div className="pt-4 border-t border-zinc-700/30">
                  <div className="text-xs text-zinc-500 mb-3 uppercase tracking-wider">Key Features</div>
                  <div className="flex flex-wrap gap-2">
                    {industry.customizations.map((custom, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/30 rounded-full text-xs text-zinc-400"
                      >
                        {custom}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-[#0a1628]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
                <Settings className="w-5 h-5 text-teal-400" />
                <span className="text-teal-400 text-sm font-medium uppercase tracking-wider">
                  Tailored Solutions
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Every Industry Has Unique Workflows
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                We design systems around real business logic — not generic templates. 
                Your industry's specific requirements drive our technical architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Generic Software */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/30 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-zinc-400">Generic Software</h3>
                <ul className="space-y-4">
                  {[
                    'Built for "everyone" but fits no one',
                    'Forces your workflow to adapt',
                    'Unnecessary features clutter UI',
                    'Can\'t handle industry nuances',
                    'Expensive customization add-ons'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-zinc-700/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-zinc-500 rounded-full" />
                      </div>
                      <span className="text-zinc-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Industry-Specific Build */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-teal-500/10 to-zinc-900/50 border border-teal-500/20 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-teal-400">Industry-Specific Build</h3>
                <ul className="space-y-4">
                  {[
                    'Designed around your exact workflow',
                    'Software adapts to your process',
                    'Only features you actually need',
                    'Handles niche industry requirements',
                    'No extra costs for customization'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-teal-400 rounded-full" />
                      </div>
                      <span className="text-zinc-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Example Workflow Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-2xl"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Custom Workflow Example</h3>
                <p className="text-zinc-400">Real Estate Lead Management System</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl text-center">
                    <div className="text-sm font-medium text-blue-400 mb-2">
                      Step 1
                    </div>
                    <div className="text-white font-semibold">
                      Lead Capture
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-teal-500/30" />
                  </div>
                </div>
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl text-center">
                    <div className="text-sm font-medium text-purple-400 mb-2">
                      Step 2
                    </div>
                    <div className="text-white font-semibold">
                      Auto-Qualify
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-teal-500/30" />
                  </div>
                </div>
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 rounded-xl text-center">
                    <div className="text-sm font-medium text-teal-400 mb-2">
                      Step 3
                    </div>
                    <div className="text-white font-semibold">
                      Smart Routing
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-teal-500/30" />
                  </div>
                </div>
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl text-center">
                    <div className="text-sm font-medium text-emerald-400 mb-2">
                      Step 4
                    </div>
                    <div className="text-white font-semibold">
                      Follow-up
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-teal-500/30" />
                  </div>
                </div>
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-xl text-center">
                    <div className="text-sm font-medium text-amber-400 mb-2">
                      Step 5
                    </div>
                    <div className="text-white font-semibold">
                      Site Visit
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
                Built Around Your Business Model
              </h2>
              <p className="text-zinc-400 text-lg">
                From data models to user interfaces — everything reflects your operations
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { industry: 'Healthcare', modules: ['Patients', 'Appointments', 'Records', 'Billing'] },
                  { industry: 'E-commerce', modules: ['Products', 'Orders', 'Inventory', 'Shipping'] },
                  { industry: 'Real Estate', modules: ['Properties', 'Leads', 'Site Visits', 'Deals'] }
                ].map((example, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 bg-zinc-800/30 border border-zinc-700/30 rounded-xl"
                  >
                    <h4 className="text-lg font-semibold mb-4 text-teal-400">{example.industry}</h4>
                    <div className="space-y-2">
                      {example.modules.map((module, j) => (
                        <div key={j} className="p-3 bg-zinc-900/50 rounded-lg text-sm text-zinc-300 border border-zinc-700/20">
                          {module}
                        </div>
                      ))}
                    </div>
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
            title="Let's Build for Your Industry"
            subtitle="Schedule a consultation to discuss your industry-specific requirements"
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