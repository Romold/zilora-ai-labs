import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-background border-t border-white/5 text-center text-sm text-white/40">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Zilora AI Labs. All rights reserved.</p>
        <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};