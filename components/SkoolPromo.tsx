// import React from 'react';
// import { motion } from 'framer-motion';

// export const SkoolPromo: React.FC = () => {
//   return (
//     <section id="team" className="py-16 bg-background">
//       <div className="container max-w-4xl mx-auto px-6">
//         <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-surfaceHighlight to-surface border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
//         >
//             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            
//             <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
//                 Meet Our Team
//             </h2>
//             <p className="text-muted text-lg max-w-2xl mx-auto">
//                 Our team consists of QA engineers, software engineers, and project managers — all working together to deliver world-class AI systems, automations, and digital solutions.
//             </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

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
            <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
                Our team consists of QA engineers, software engineers, and project managers — all working together to deliver world-class AI systems, automations, and digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24">
                
                {/* Kasun Prabash - Founder */}
                <div className="flex flex-col items-center group">
                    <div className="relative w-32 h-32 mb-4">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/50 relative z-10 bg-surfaceHighlight">
                            {/* 
                                IMPORTANT: Save the user's photo as 'kasun.jpg' in your public folder.
                                The onError fallback ensures it looks good even before the image is added.
                            */}
                            <img 
                                src="/kasun.jpg" 
                                onError={(e) => {
                                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Kasun+Prabash&background=0D1712&color=C4F000&size=256&font-size=0.33";
                                }}
                                alt="Kasun Prabash" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">Kasun Prabash</h3>
                    <p className="text-primary text-sm font-medium tracking-wide uppercase mt-1">Founder</p>
                </div>

                {/* Romold Perera - Project Manager */}
                <div className="flex flex-col items-center group">
                    <div className="relative w-32 h-32 mb-4">
                         <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 relative z-10 bg-white/5 flex items-center justify-center group-hover:border-white/20 transition-colors">
                            <User className="w-12 h-12 text-white/30 group-hover:text-white/50 transition-colors" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">Romold Perera</h3>
                    <p className="text-muted text-sm font-medium tracking-wide uppercase mt-1">Project Manager</p>
                </div>

            </div>
        </motion.div>
      </div>
    </section>
  );
};