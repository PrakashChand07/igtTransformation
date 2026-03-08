import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryFormModal } from '../components/EnquiryFormModal';
import { ShoppingCart, CreditCard, Package, Truck, BarChart, Smartphone, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function EcommerceInfrastructurePage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const features = [
    {
      icon: ShoppingCart,
      title: 'Headless Commerce Platform',
      description: 'Decoupled frontend and backend for ultimate flexibility and omnichannel experiences.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400'
    },
    {
      icon: CreditCard,
      title: 'Multi-Gateway Payments',
      description: 'Integrated payment processing with Razorpay, Stripe, PayU and automatic reconciliation.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Real-time stock tracking, automated reorder alerts, and multi-warehouse support.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: Truck,
      title: 'Smart Logistics Integration',
      description: 'Connected with Delhivery, Shiprocket, and local couriers with rate comparison.',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: BarChart,
      title: 'Revenue Analytics',
      description: 'Conversion funnels, customer LTV, and real-time sales dashboards with predictive insights.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'PWA capabilities with offline browsing and one-tap checkout optimized for mobile conversions.',
      gradient: 'from-rose-500/20 to-red-500/20',
      iconColor: 'text-rose-400'
    }
  ];

  const outcomes = [
    'Increase online revenue by 3.5x within first year',
    'Reduce cart abandonment by 40% with optimized checkout',
    'Handle 50,000+ orders per day with automated processing',
    'Sub-2 second page load times across all devices'
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                E-commerce Infrastructure
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              High-Converting
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                E-commerce Stores
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Full-stack e-commerce platforms built for scale. From product catalogs to 
              payment processing — everything you need to sell online profitably.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCTAClick}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Store Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-zinc-800/50 border border-zinc-700/50 rounded-xl font-semibold hover:bg-zinc-800 transition-all duration-300">
                See Live Demos
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
              Proven E-commerce Growth
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
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
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
              Everything You Need to Sell Online
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              From catalog management to payment processing — built for conversion
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
                Beautiful Storefronts That Convert
              </h2>
              <p className="text-zinc-400 text-lg">
                Optimized for mobile shopping with frictionless checkout
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-3xl overflow-hidden">
              {/* Mock E-commerce UI */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-700/50">
                  <div className="text-sm font-semibold text-emerald-400">Store Dashboard</div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-zinc-500">Live Store</span>
                  </div>
                </div>
                
                {/* Revenue Stats */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Today\'s Sales', value: '₹1.2L', color: 'emerald' },
                    { label: 'Orders', value: '47', color: 'blue' },
                    { label: 'Conversion', value: '3.2%', color: 'amber' },
                    { label: 'Avg Order', value: '₹2,550', color: 'purple' }
                  ].map((stat, i) => (
                    <div key={i} className={`p-4 bg-gradient-to-br from-${stat.color}-500/10 to-transparent border border-${stat.color}-500/20 rounded-xl`}>
                      <div className="text-[10px] text-zinc-400 mb-1">{stat.label}</div>
                      <div className={`text-xl font-bold text-${stat.color}-400`}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-4 gap-3 pt-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="space-y-2">
                      <div className="aspect-square bg-zinc-800/50 rounded-lg border border-zinc-700/30" />
                      <div className="space-y-1">
                        <div className="h-2 w-3/4 bg-zinc-700/50 rounded" />
                        <div className="h-2 w-1/2 bg-emerald-500/30 rounded" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-700/50">
                  <div className="flex-1 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-center">
                    <div className="text-xs text-emerald-400 font-medium">+ Add Product</div>
                  </div>
                  <div className="flex-1 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-center">
                    <div className="text-xs text-blue-400 font-medium">View Orders</div>
                  </div>
                  <div className="flex-1 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-center">
                    <div className="text-xs text-amber-400 font-medium">Analytics</div>
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
            onFormSubmit={handleFormSubmit}
            title="Launch Your Online Store Today"
            subtitle="Get a conversion-optimized e-commerce platform built in 6 weeks"
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