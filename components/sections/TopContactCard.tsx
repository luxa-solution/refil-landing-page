import Image from "next/image";

interface TopContactCardProps {
  title?: string;
  subtitle?: string;
  topText?: string;
  topTextColor?: string;
  titleColor?: string;
  subtitleColor?: string;
}

export default function TopContactCard({ 
  title = "We'd love to hear from you!", 
  subtitle = "",
  topText = "Contact Us",
  topTextColor = "text-orange-500",
  titleColor = "text-blue-900",
  subtitleColor = "text-blue-600"
}: TopContactCardProps) {
  return (
    <div className="bg-gray-50 rounded-3xl py-16 px-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] h-full flex flex-col justify-center">
      {/* Heading container - centered with relative positioning */}
      <div className="relative inline-block text-left mx-auto">
        {/* Top text (FAQs or Contact Us) positioned above heading */}
        {topText && (
          <span className={`absolute -top-6 text-sm font-semibold ${topTextColor}`}>
            {topText}
          </span>
        )}
        
        {/* Main title */}
        <h2 className={`text-3xl md:text-4xl font-bold ${titleColor}`}>
          {title}
        </h2>
        
        {/* Subtitle if provided */}
        {subtitle && (
          <p className={`mt-2 text-lg ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </div>

      {/* ICONS - Centered below */}
      <div className="flex justify-center items-center gap-4 mt-12">
        {/* Left icon - MEDIUM */}
        <div className="w-10 h-10 flex items-center justify-center">
          <Image 
            src="/icons/left-icon.png" 
            alt="" 
            width={40} 
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Middle icon - SMALLEST */}
        <div className="w-8 h-8 flex items-center justify-center">
          <Image 
            src="/icons/right-icon.png" 
            alt="" 
            width={32} 
            height={32}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Right icon - MEDIUM */}
        <div className="w-10 h-10 flex items-center justify-center">
          <Image 
            src="/icons/middle-icon.png" 
            alt="" 
            width={40} 
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}