import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { CheckCircle, X } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [workType, setWorkType] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResultMessage("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "c36ae74e-a819-4fd1-8f6a-54cbc4c5e0eb");
    formData.append("subject", "New Submission from Zilora AI Labs Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccessModal(true);
        (event.target as HTMLFormElement).reset();
        setWorkType("");
      } else {
        setResultMessage("Error sending message. Please try again.");
      }
    } catch (error) {
      setResultMessage("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-white/5">
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border border-white/10 rounded-2xl p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-white">Thank you for reaching out</h3>
                  <p className="text-muted text-base leading-relaxed">
                    I have received your info and will follow up with you shortly. Looking forward to connecting and helping you build what's next.
                  </p>
                </div>

                <div className="w-full bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <p className="text-primary font-bold tracking-wide">
                    Your request has been submitted successfully
                  </p>
                </div>
                
                <Button 
                    variant="secondary" 
                    className="w-full !mt-2"
                    onClick={() => setShowSuccessModal(false)}
                >
                    Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container max-w-xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
        >
            <h2 className="text-3xl font-display font-bold mb-4">Start Your Project</h2>
            <p className="text-muted">Tell us what you want to build. We'll handle the rest.</p>
        </motion.div>

        <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 bg-surface p-8 rounded-2xl border border-white/5 shadow-xl"
            onSubmit={onSubmit}
        >
            {/* Hidden Field for Web3Forms Configuration */}
            <input type="hidden" name="from_name" value="Zilora AI Website" />

            <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                <input 
                    type="text"
                    name="name"
                    required
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                    placeholder="Enter your name"
                />
            </div>
            
            <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                <input 
                    type="email"
                    name="email"
                    required
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                    placeholder="Enter your email"
                />
            </div>

            {/* Step 1: Select Work Type */}
            <div>
                <label className="block text-sm font-medium text-white/70 mb-2">What kind of work do you want from us?</label>
                <select 
                    name="work_type"
                    value={workType}
                    onChange={(e) => setWorkType(e.target.value)}
                    required
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                    <option value="" disabled>Select an option...</option>
                    <option value="Service">Service</option>
                    <option value="Partnership">Partnership</option>
                </select>
            </div>

            {/* Step 2: Conditional Fields based on Work Type */}
            <AnimatePresence mode="wait">
                {workType === 'Service' && (
                    <motion.div
                        key="service-fields"
                        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-6"
                    >
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Select Service</label>
                            <select 
                                name="service"
                                required
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                            >
                                <option value="" disabled selected>Choose a service...</option>
                                <option value="Custom Apps">Custom Apps</option>
                                <option value="Automation & Workflows">Automation & Workflows</option>
                                <option value="Micro SaaS">Micro SaaS</option>
                                <option value="AI-Powered Websites">AI-Powered Websites</option>
                                <option value="Voice Agents">Voice Agents</option>
                                <option value="Lead Generation">Lead Generation</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Describe Your Project</label>
                            <textarea 
                                rows={4}
                                name="project_description"
                                required
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                                placeholder="Describe your project, automation needs, or idea..."
                            />
                        </div>
                    </motion.div>
                )}

                {workType === 'Partnership' && (
                    <motion.div
                        key="partnership-fields"
                        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Describe Your Partnership Needs</label>
                            <textarea 
                                rows={4}
                                name="partnership_details"
                                required
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                                placeholder="Tell us about your agency, clients, and technical needs..."
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Request'}
            </Button>
            
            {resultMessage && (
                <p className="text-red-400 text-center text-sm mt-2 bg-red-500/10 py-2 rounded">
                    {resultMessage}
                </p>
            )}

        </motion.form>
      </div>
    </section>
  );
};