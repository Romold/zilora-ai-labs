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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full opacity-40" />
            
            <div className="relative h-full w-full bg-surface/50 border border-white/10 rounded-2xl overflow-hidden group backdrop-blur-sm">
                 <img 
                    src="public/partnership-growth.jpg"
                    onError={(e) => {
                        // Fallback to a high-quality abstract network image representing connection/team
                        e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2600&auto=format&fit=crop";
                    }}
                    alt="Visualization of outsourcing tech: Robotic arms managing servers on the left, and a hand holding a glowing plant representing growth on the right." 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                 />
                 
                 {/* Subtle vignette overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};