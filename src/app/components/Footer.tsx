import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Shield, Headphones, BadgeCheck, Phone, Instagram, Facebook, Linkedin, Twitter, Building2, Briefcase, ShieldCheck } from 'lucide-react';

export function Footer() {
  const companyLinks = [
    { label: 'Why it Matters', href: '#' },
    { label: 'Why Choose us', href: '/#' },
    { label: 'Our Services', href: '/#' },
    { label: "What's Included", href: '/#' },
    { label: 'Industries We Serve', href: '/#' }
  ];

  const serviceLinks = [
    { label: 'Custom Software & SaaS', href: '/#' },
    { label: 'Sales CRM Systems', href: '/#' },
    { label: 'Enterprise Web Applications', href: '/#' },
    { label: 'E-commerce Infrastructure', href: '/#' },
    { label: 'Performance Landing Pages', href: '/#' }
  ];

  const trustBadges = [
    {
      icon: Shield,
      title: '100% SECURE',
      subtitle: 'SSL Protected',
      bgColor: 'bg-teal-500/20',
      borderColor: 'border-teal-500/50',
      iconColor: 'text-teal-400',
      textColor: 'text-white'
    },
    {
      icon: BadgeCheck,
      title: 'MONEY BACK',
      subtitle: '100% Guarantee',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/50',
      iconColor: 'text-blue-400',
      textColor: 'text-white'
    },
    {
      icon: Headphones,
      title: '24/7 SUPPORT',
      subtitle: 'Always Available',
      bgColor: 'bg-amber-500/20',
      borderColor: 'border-amber-500/50',
      iconColor: 'text-amber-400',
      textColor: 'text-white'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/igtranspartners', label: 'Instagram' },
    // { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/igtranspartners/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/IGTransPartners', label: 'Twitter' }
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth effect
    });
  };
  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">

          {/* Left Section - Logo & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Logo */}
            <Link to="/">
              <img
                src='/assets/logo.png'
                alt="IG Transformation Partners"
                className="h-24 w-auto cursor-pointer mb-4"
              />
            </Link>

            {/* Contact Button */}
            <a
              href="tel:+919999111800"
              className="flex items-center gap-3 px-4 py-3 bg-teal-50 border border-teal-200 rounded-xl hover:bg-teal-100 transition-all duration-300 group w-fit"
            >
              <div className="p-2 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-all">
                <Phone className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Call Us</div>
                <div className="text-sm font-medium text-gray-900">+91 9999111800</div>
              </div>
            </a>

            {/* Email Button */}
            <a
              href="mailto:support@igtps.com"
              className="flex items-center gap-3 px-4 py-3 bg-teal-50 border border-teal-200 rounded-xl hover:bg-teal-100 transition-all duration-300 group w-fit"
            >
              <div className="p-2 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-all">
                <Headphones className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Email Us</div>
                <div className="text-sm font-medium text-gray-900">support@igtps.com</div>
              </div>
            </a>

            {/* Tagline */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Building powerful digital products for businesses across India since{' '}
              <span className="text-teal-600 font-semibold">2020</span>.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target='_blank'
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-gray-600 group-hover:text-teal-600 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-teal-100 rounded-lg">
                <Building2 className="w-4 h-4 text-teal-600" />
              </div>
              <h3 className="text-gray-900 font-semibold uppercase tracking-wider text-sm">Company</h3>
            </div>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-teal-100 rounded-lg">
                <Briefcase className="w-4 h-4 text-teal-600" />
              </div>
              <h3 className="text-gray-900 font-semibold uppercase tracking-wider text-sm">Services</h3>
            </div>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>))}
            </ul>
          </motion.div>

          {/* Trust & Security Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-teal-100 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
              </div>
              <h3 className="text-gray-900 font-semibold uppercase tracking-wider text-sm">Trust & Security</h3>
            </div>
            <div className="space-y-3">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 rounded-xl border backdrop-blur-sm
                    ${badge.bgColor} ${badge.borderColor}
                    transition-all duration-300 cursor-default
                  `}
                >
                  <badge.icon className={`w-4 h-4 ${badge.iconColor}`} />
                  <div>
                    <div className={`text-xs font-semibold ${badge.textColor}`}>
                      {badge.title}
                    </div>
                    <div className="text-[10px] text-gray-600">
                      {badge.subtitle}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-gray-200 text-center space-y-2"
        >
          <p className="text-sm text-gray-600">
            Copyright © 2026 | All rights reserved
          </p>
          <p className="text-sm text-gray-600">
            Designed and Developed by{' '}
            <a
              href="https://codercraftes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 transition-colors duration-300 font-medium"
            >
              CoderCraftes
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}