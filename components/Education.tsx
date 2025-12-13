import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { BookOpen, Users, PlayCircle, Zap } from 'lucide-react';

export const Education: React.FC = () => {
  const topics = [
    { label: "Custom Apps", highlight: true },
    { label: "Automations & Workflows", highlight: false },
    { label: "Micro SaaS", highlight: true },
    { label: "AI Websites", highlight: false },
    { label: "Voice Agents", highlight: true },
    { label: "Lead System Frameworks", highlight: false },
  ];

  return (
    <section id="education" className="py-24 bg-surfaceHighlight border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    Want to Build It Yourself? <br/>
                    <span className="text-primary">Learn With Us.</span>
                </h2>
                <p className="text-muted mb-8 text-lg">
                    Zilora Labs teaches beginners and intermediate builders how to create scalable systems. Stop guessing and start building production-ready assets.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                    {topics.map((t, i) => (
                        <span 
                            key={i} 
                            className={`px-4 py-2 rounded-full text-sm font-medium border ${t.highlight ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-white/5 border-white/10 text-white/70'}`}
                        >
                            {t.label}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                        { icon: PlayCircle, text: "Step-by-step tutorials" },
                        { icon: Zap, text: "Real project examples" },
                        { icon: Users, text: "Mentorship" },
                        { icon: BookOpen, text: "Community Support" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/90">
                            <feature.icon className="w-5 h-5 text-primary" />
                            {feature.text}
                        </div>
                    ))}
                </div>

                <Button variant="secondary">
                    Join Our Community
                </Button>
            </div>
            
            {/* Replaced code block with Image Card */}
            <div className="relative hidden md:block h-[500px] w-full group">
                {/* Decorative background element */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                
                <div className="relative h-full w-full bg-surface border border-white/10 rounded-2xl overflow-hidden">
                     <img 
                        src="/education-hero.jpg"
                        onError={(e) => {
                            // Fallback to a high-quality Unsplash image matching the "Dark Green Tech" vibe
                            e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop";
                        }}
                        alt="Abstract visualization of system architecture and automation" 
                        className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                     />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};