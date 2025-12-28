import React from 'react';
import Link from 'next/link';

interface CallToActionProps {
  variant?: 'default' | 'dark' | 'minimal';
  className?: string;
  showPhone?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  variant = 'default', 
  className = '',
  showPhone = true 
}) => {
  const baseClasses = "rounded-lg p-8 text-center";
  
  const variantClasses = {
    default: "bg-gradient-to-r from-blue-600 to-blue-800 text-white",
    dark: "bg-gray-900 text-white",
    minimal: "bg-gray-50 border-2 border-gray-200 text-gray-900"
  };

  const buttonVariant = variant === 'minimal' ? 'primary' : 'warning';
  const textColor = variant === 'minimal' ? 'text-gray-600' : 'text-blue-100';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Get a Free, No Obligation Inspection & Estimate
        </h3>
        
        <p className={`text-lg mb-6 ${textColor}`}>
          Our certified professionals will assess your needs and provide you with a detailed, 
          transparent estimate at no cost to you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <button className={`
              px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105
              ${variant === 'minimal' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-orange-500 hover:bg-orange-600'
              }
            `}>
              GET FREE ESTIMATE →
            </button>
          </Link>
          
          {showPhone && (
            <div className="flex items-center gap-2">
              <span className={`text-sm ${textColor}`}>or call us:</span>
              <a 
                href="tel:301-760-6869" 
                className="text-xl font-bold hover:underline transition-all duration-200"
              >
                301-760-6869
              </a>
            </div>
          )}
        </div>
        
        <div className={`mt-4 text-sm ${textColor}`}>
          <span className="mx-3">✓ Licensed & insured</span>
          <span>✓ Same-day response</span>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
