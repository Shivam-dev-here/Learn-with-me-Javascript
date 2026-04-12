
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-8">
      <div className="container mx-auto px-4 py-4 text-center text-xs text-slate-500">
        <p className="font-semibold">Disclaimer:</p>
        <p>Aura is an AI companion and not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. If you are in a crisis, please call or text 988 in the US/Canada or contact your local emergency services.</p>
      </div>
    </footer>
  );
};

export default Footer;
