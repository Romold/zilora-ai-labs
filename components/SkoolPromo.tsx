import React from 'react';
import { motion } from 'framer-motion';

export const SkoolPromo: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-surfaceHighlight to-surface border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Meet Our Team
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
                Our team consists of QA engineers, software engineers, and project managers — all working together to deliver world-class AI systems, automations, and digital solutions.
            </p>
        </motion.div>
      </div>
    </section>
  );
};