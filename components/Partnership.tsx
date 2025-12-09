import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const Partnership: React.FC = () => {
  const benefits = [
    "Full-stack engineering support",
    "AI & automation integration",
    "Micro-SaaS + website development",
    "Ongoing maintenance and updates"
  ];

  return (
    <section id="partners" className="py-24 bg-background border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-surfaceHighlight border border-white/10 text-primary text-sm font-medium mb-6">
              Agency Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Outsource a <br/>
              <span className="text-primary">Tech Team</span>
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Zilora Labs becomes your remote technical team. Whether you’re a business owner, agency, or freelancer — we handle development, automation, AI integration, websites, voice systems, and delivery while you focus on growth.
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>

            <Button onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Outsource Your Team
            </Button>
          </motion.div>

          {/* Illustration Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-30" />
            <div className="relative z-10 bg-surfaceHighlight border border-white/10 rounded-2xl p-8 md:p-12">
                {/* Abstract visualization of "Backend Team" */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 mt-8">
                        <div className="h-32 bg-white/5 rounded-xl border border-white/5 animate-pulse" />
                        <div className="h-20 bg-primary/10 rounded-xl border border-primary/20" />
                    </div>
                    <div className="space-y-4">
                        <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
                        <div className="h-32 bg-white/5 rounded-xl border border-white/5 animate-pulse delay-75" />
                    </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-white/10 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">System Operational</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};