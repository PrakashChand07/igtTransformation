import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryFormModal } from '../components/EnquiryFormModal';
import { Code2, Users, Server, ShoppingCart, Zap, ArrowRight } from 'lucide-react';

export default function OurServicesPage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const services = [
    {
      icon: Code2,
      title: 'Custom Software & SaaS',
      description: 'Scalable platforms and subscription-based software built from scratch for your unique business model.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400',
      link: '/custom-software'
    },
    {
      icon: Users,
      title: 'Sales CRM Systems',
      description: 'Purpose-built CRM for Real Estate and high-ticket sales with automated workflows and pipeline tracking.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400',
      link: '/sales-crm'
    },
    {
      icon: Server,
      title: 'Enterprise Web Applications',
      description: 'Mission-critical business applications with microservices architecture and enterprise-grade security.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
      link: '/enterprise-web-applications'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Infrastructure',
      description: 'Full-stack online stores with payment gateways, inventory management, and logistics integration.',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400',
      link: '/ecommerce-infrastructure'
    },
    {
      icon: Zap,
      title: 'Performance Landing Pages',
      description: 'High-converting pages with 95+ PageSpeed scores, A/B testing, and analytics integration.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
      link: '/performance-landing-pages'
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Digital Systems That
              <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Power Modern Businesses
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              From CRM systems to e-commerce platforms — we build custom software 
              that scales with your ambitions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
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
              Choose Your Solution
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every service is built custom, owned by you, and optimized for performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Link to={service.link}>
                  <div className={`h-full p-8 bg-gradient-to-br ${service.gradient} border border-zinc-700/50 rounded-2xl backdrop-blur-sm hover:border-zinc-600 transition-all duration-300`}>
                    <div className="p-4 bg-zinc-900/80 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className={`w-10 h-10 ${service.iconColor}`} />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-teal-400 font-medium group-hover:gap-4 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-[#0a1628]">
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
                Custom-Built vs Off-the-Shelf
              </h2>
              <p className="text-zinc-400 text-lg">
                Why businesses choose custom development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Off-the-Shelf */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-rose-500/10 to-zinc-900/50 border border-rose-500/20 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-rose-400">Off-the-Shelf Software</h3>
                <ul className="space-y-4">
                  {[
                    'Monthly subscription fees forever',
                    'Limited customization options',
                    'Vendor lock-in & dependency',
                    'Generic features you don\'t need',
                    'Data stored on their servers',
                    'Forced updates & changes'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-rose-400 rounded-full" />
                      </div>
                      <span className="text-zinc-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Custom-Built */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-teal-500/10 to-zinc-900/50 border border-teal-500/20 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-teal-400">Custom-Built Solution</h3>
                <ul className="space-y-4">
                  {[
                    'One-time investment, yours forever',
                    'Built exactly for your workflow',
                    'Complete ownership & control',
                    'Only features you actually use',
                    'Your data on your infrastructure',
                    'You decide when to upgrade'
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
          </motion.div>
        </div>
      </section>

      {/* Visual Showcase */}
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
                Built for Every Business Function
              </h2>
              <p className="text-zinc-400 text-lg">
                From customer management to revenue generation
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0 }}
                  className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl text-center group hover:scale-105 transition-transform cursor-default"
                >
                  <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-zinc-300">CRM</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-xl text-center group hover:scale-105 transition-transform cursor-default"
                >
                  <ShoppingCart className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-zinc-300">Commerce</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl text-center group hover:scale-105 transition-transform cursor-default"
                >
                  <Server className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-zinc-300">Analytics</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-xl text-center group hover:scale-105 transition-transform cursor-default"
                >
                  <Zap className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-zinc-300">Marketing</div>
                </motion.div>
              </div>

              <div className="mt-8 p-6 bg-zinc-800/30 rounded-xl border border-zinc-700/30">
                <div className="text-center text-sm text-zinc-400 mb-4">
                  Integrated Platform Architecture
                </div>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-400" />
                      {i < 4 && <div className="w-8 h-0.5 bg-teal-500/30" />}
                    </div>
                  ))}
                </div>
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
            title="Explore the Right Solution for Your Business"
            subtitle="Schedule a consultation to discuss which service fits your needs"
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