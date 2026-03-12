import { motion } from 'motion/react';
import { MessageSquare, Video, Shield } from 'lucide-react';

export function TrustBar() {
  const features = [
    {
      icon: MessageSquare,
      text: 'Real-time Slack/Jira Access'
    },
    {
      icon: Video,
      text: 'Weekly Video Sprint Demos'
    },
    {
      icon: Shield,
      text: '100% Code Ownership'
    }
  ];

  return (
    <section className="relative py-6 border-y border-zinc-800/50 bg-zinc-950/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 sm:gap-8 md:gap-16 w-fit mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-teal-500/20 blur-lg rounded-full group-hover:bg-teal-500/30 transition-all duration-300" />
                <div className="relative bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800/50 group-hover:border-teal-500/30 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-teal-400" />
                </div>
              </div>
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-300">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
