import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      </div>

      <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary tracking-wider uppercase">Accepting New Partners</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
            Zilora AI Labs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Build. Automate. </span>
            <span className="text-primary">Scale.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed">
            We build custom apps, AI-powered automations, micro-SaaS, smart websites, and voice & lead-generation systems — so you don’t have to do the heavy lifting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="primary" onClick={() => document.getElementById('services')?.scrollIntoView()}>
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              <MessageCircle className="w-4 h-4 mr-2" /> Talk to Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating particles */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-2 h-2 bg-primary/40 rounded-full blur-sm" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-10 w-3 h-3 bg-white/20 rounded-full blur-sm" 
      />
    </section>
  );
};