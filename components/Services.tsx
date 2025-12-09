import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { 
  Cpu, 
  LayoutDashboard, 
  Settings, 
  Rocket, 
  Bot, 
  Mic, 
  Filter
} from 'lucide-react';

// Custom Animated Robot Icon for the specific "Blink" requirement
const RobotIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="18" height="10" x="3" y="11" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
    {/* Animated Eyes Overlay */}
    <motion.g
       initial={{ opacity: 0 }}
       whileHover={{ opacity: 1 }}
       transition={{ repeat: Infinity, duration: 0.2, repeatType: "reverse" }}
    >
       <line x1="8" y1="16" x2="8" y2="16" stroke="#C4F000" strokeWidth="3"/>
       <line x1="16" y1="16" x2="16" y2="16" stroke="#C4F000" strokeWidth="3"/>
    </motion.g>
  </svg>
);

const services = [
  {
    title: "Custom Apps & Tools",
    icon: <LayoutDashboard className="w-6 h-6" />,
    items: ["Dashboards", "CRMs", "AI Assistants", "Internal Tools"],
    desc: "Bespoke software tailored to your operational needs."
  },
  {
    title: "Automation & Workflows",
    icon: <Settings className="w-6 h-6" />,
    items: ["Business Automations", "Process Automation", "No-code / Low-code"],
    desc: "Streamline repetitive tasks and reclaim your time."
  },
  {
    title: "Micro SaaS Creation",
    icon: <Rocket className="w-6 h-6" />,
    items: ["Launch Niche Products", "Fast to Build", "High Scalability"],
    desc: "Turn ideas into recurring revenue products quickly."
  },
  {
    title: "AI-Powered Websites",
    icon: <RobotIcon />, // Using custom robot icon here
    items: ["Chatbots", "Personalization", "Smart Enhancements"],
    desc: "Websites that learn, adapt, and convert better."
  },
  {
    title: "Voice & Call AI",
    icon: <Mic className="w-6 h-6" />,
    items: ["Voice Agents", "Lead Qualification", "Customer Support"],
    desc: "Human-like voice interactions at infinite scale."
  },
  {
    title: "Lead Gen & Funnels",
    icon: <Filter className="w-6 h-6" />,
    items: ["AI Lead Finding", "Lead Nurturing", "Qualification Auto"],
    desc: "Automated systems that fill your pipeline 24/7."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface relative">
        {/* Subtle gradient bleed */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
      <div className="container max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
                Our Services
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted max-w-2xl mx-auto"
            >
                End-to-end technical execution for modern businesses.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                borderColor: '#C4F000',
                boxShadow: '0 0 20px -5px rgba(196, 240, 0, 0.3)'
              }}
              className="group bg-surfaceHighlight border border-white/5 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated Icon Header */}
              <div className="flex items-center justify-between mb-6">
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300"
                >
                  {service.icon}
                </motion.div>
                <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
              </div>

              <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted mb-6 h-10">
                  {service.desc}
              </p>

              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-white/70">
                    <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-50 group-hover:opacity-100" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Book a Consultation
            </Button>
        </div>
      </div>
    </section>
  );
};