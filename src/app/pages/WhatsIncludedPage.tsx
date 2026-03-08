import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryFormModal } from '../components/EnquiryFormModal';
import { 
  Palette, 
  Server, 
  Zap, 
  Shield, 
  Cloud, 
  Headphones, 
  CheckCircle2, 
  ArrowRight, 
  Code2 
} from 'lucide-react';

export default function WhatsIncludedPage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const included = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered interfaces with conversion-optimized layouts and modern aesthetics.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Server,
      title: 'Backend Architecture',
      description: 'Scalable server infrastructure with clean API design and database optimization.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: '95+ PageSpeed scores with lazy loading, caching, and code splitting.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: Shield,
      title: 'Security Setup',
      description: 'SSL certificates, data encryption, authentication, and security best practices.',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: Cloud,
      title: 'Deployment & Hosting Support',
      description: 'Professional deployment to cloud infrastructure with CI/CD pipelines.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400'
    },
    {
      icon: Headphones,
      title: '30-Day Post-Launch Support',
      description: 'Bug fixes, minor adjustments, and technical assistance after going live.',
      gradient: 'from-rose-500/20 to-red-500/20',
      iconColor: 'text-rose-400'
    }
  ];

  const techStack = [
    { name: 'React', category: 'Frontend', color: 'cyan' },
    { name: 'Next.js', category: 'Framework', color: 'blue' },
    { name: 'Node.js', category: 'Backend', color: 'emerald' },
    { name: 'Laravel', category: 'Backend', color: 'red' },
    { name: 'PostgreSQL', category: 'Database', color: 'indigo' },
    { name: 'MongoDB', category: 'Database', color: 'green' },
    { name: 'AWS', category: 'Cloud', color: 'amber' },
    { name: 'TypeScript', category: 'Language', color: 'blue' },
    { name: 'Tailwind CSS', category: 'Styling', color: 'teal' },
    { name: 'Docker', category: 'DevOps', color: 'cyan' },
    { name: 'Redis', category: 'Caching', color: 'rose' },
    { name: 'GraphQL', category: 'API', color: 'pink' }
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                Everything You Need.
              </span>
              Nothing You Don't.
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              Every project includes full-stack development, security, performance optimization, 
              and post-launch support — all engineered to enterprise standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Included in Every Project Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-zinc-900">
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
                Standard Deliverables
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Included in Every Project
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Comprehensive development from design to deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {included.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 bg-gradient-to-br ${item.gradient} border border-zinc-700/50 rounded-2xl backdrop-blur-sm group hover:scale-105 transition-all duration-300 cursor-default`}
              >
                <div className="relative mb-6">
                  <div className="p-4 bg-zinc-900/80 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    <item.icon className={`w-10 h-10 ${item.iconColor}`} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-[#0a1628]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <Code2 className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                Technology Stack
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built With Modern Technologies
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              We use industry-leading tools and frameworks that ensure scalability and performance
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {techStack.map((tech, index) => {
                const colorClasses = {
                  cyan: 'from-cyan-500/10 border-cyan-500/20 text-cyan-400',
                  blue: 'from-blue-500/10 border-blue-500/20 text-blue-400',
                  emerald: 'from-emerald-500/10 border-emerald-500/20 text-emerald-400',
                  red: 'from-red-500/10 border-red-500/20 text-red-400',
                  indigo: 'from-indigo-500/10 border-indigo-500/20 text-indigo-400',
                  green: 'from-green-500/10 border-green-500/20 text-green-400',
                  amber: 'from-amber-500/10 border-amber-500/20 text-amber-400',
                  teal: 'from-teal-500/10 border-teal-500/20 text-teal-400',
                  rose: 'from-rose-500/10 border-rose-500/20 text-rose-400',
                  pink: 'from-pink-500/10 border-pink-500/20 text-pink-400'
                };
                const classes = colorClasses[tech.color as keyof typeof colorClasses] || colorClasses.teal;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-6 bg-gradient-to-br ${classes} to-zinc-900/50 border backdrop-blur-sm text-center group cursor-default rounded-xl`}
                  >
                    <div className="text-xl font-bold mb-1">
                      {tech.name}
                    </div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">
                      {tech.category}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-8 bg-zinc-900/50 border border-zinc-700/50 rounded-2xl text-center"
            >
              <p className="text-zinc-400 text-lg leading-relaxed">
                <span className="text-teal-400 font-semibold">Technology agnostic approach:</span> We select the best stack for your specific requirements, 
                ensuring optimal performance, maintainability, and scalability for your project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Deliverables Showcase */}
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
                What You Receive
              </h2>
              <p className="text-zinc-400 text-lg">
                Complete source code, documentation, and deployment guides
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-3xl overflow-hidden">
              <div className="space-y-4">
                {[
                  { item: 'Complete source code with full ownership rights', checked: true },
                  { item: 'Deployment documentation and setup guides', checked: true },
                  { item: 'Admin panel for content/data management', checked: true },
                  { item: 'Database schema and API documentation', checked: true },
                  { item: 'SSL certificate and security configuration', checked: true },
                  { item: 'Analytics integration (Google Analytics, etc.)', checked: true },
                  { item: 'Mobile responsive across all devices', checked: true },
                  { item: 'Cross-browser compatibility testing', checked: true },
                  { item: 'Performance optimization report', checked: true },
                  { item: '30 days of technical support post-launch', checked: true }
                ].map((deliverable, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-500/5 to-transparent border-l-2 border-teal-500/30 rounded-lg hover:border-teal-500/50 hover:from-teal-500/10 transition-all duration-300"
                  >
                    <div className="w-7 h-7 bg-teal-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-teal-400" />
                    </div>
                    <span className="text-zinc-300 text-lg">{deliverable.item}</span>
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
            title="Get a Fully Engineered System — Not Just a Website"
            subtitle="Request a detailed proposal with timeline, deliverables, and pricing"
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