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
        <div className="grid md:grid-cols-2 gap-16">
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
            
            <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl" />
                <div className="h-full border border-white/10 rounded-2xl p-8 flex flex-col justify-end overflow-hidden group">
                     {/* Pseudo Code Block Visual */}
                     <div className="font-mono text-sm space-y-2 opacity-60">
                        <div className="text-primary">import <span className="text-white">Future</span> from <span className="text-white">'zilora-labs'</span>;</div>
                        <div className="pl-4 text-purple-400">
  const <span className="text-yellow-400">buildSaaS</span> = async () =&gt; {'{'}
</div>
                        <div className="pl-8 text-white">await <span className="text-blue-400">learn()</span>;</div>
                        <div className="pl-8 text-white">await <span className="text-blue-400">build()</span>;</div>
                        <div className="pl-8 text-white">return <span className="text-green-400">profit</span>;</div>
                        <div className="pl-4 text-purple-400">{'}'}</div>
                     </div>
                     <div className="mt-8">
                        <h3 className="text-xl font-bold text-white mb-2">The Build Room</h3>
                        <p className="text-sm text-muted">Weekly live builds where we go from zero to deployed product.</p>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};