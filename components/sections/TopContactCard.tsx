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
    <div className="bg-gray-50 rounded-3xl p-10 text-center h-full flex flex-col justify-center min-h-[400px] md:min-h-[500px]">
      {/* Heading container - centered with relative positioning */}
      <div className="relative inline-block text-left mx-auto">
        {/* Top text (FAQs or Contact Us) positioned above heading */}
        {topText && (
          <span className={`absolute -top-8 left-0 right-0 text-sm font-semibold ${topTextColor}`}>
            {topText}
          </span>
        )}
        
        {/* Main title */}
        <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4`}>
          {title}
        </h2>
        
        {/* Subtitle if provided */}
        {subtitle && (
          <p className={`mt-2 text-lg ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </div>

      {/* ICONS - Centered below with more spacing */}
      <div className="flex justify-center items-center gap-6 mt-16">
        {/* Left icon */}
        <div className="w-12 h-12 flex items-center justify-center">
          <Image 
            src="/icons/left-icon.png" 
            alt="" 
            width={48} 
            height={48}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Middle icon */}
        <div className="w-10 h-10 flex items-center justify-center">
          <Image 
            src="/icons/right-icon.png" 
            alt="" 
            width={40} 
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Right icon */}
        <div className="w-12 h-12 flex items-center justify-center">
          <Image 
            src="/icons/middle-icon.png" 
            alt="" 
            width={48} 
            height={48}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}