import Image from "next/image";
import Button from "../ui/Button";

interface FeaturesProps {
  onJoinClick: () => void;
}

export default function Features({ onJoinClick }: FeaturesProps) {
  return (
    <section className="w-full overflow-hidden my-8 sm:my-12">
      <div className="bg-gray-50 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto xl:max-w-6xl rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-0">
          {/* Mobile: Stacked layout, Desktop: Grid layout */}
          <div className="flex flex-col md:grid md:grid-cols-2 md:items-end">
            {/* Text column - Top on mobile, Left on desktop */}
            <div className="pb-8 md:pb-12">
              <div className="mb-6">
                <Image
                  src="/icons/refil-logo-2.png"
                  alt="Refil"
                  width={90}
                  height={30}
                />
              </div>
              
              <h2 className="text-3xl font-bold mb-6">
                Experience Seamless Gas Delivery
              </h2>

              <p className="text-gray-600 mb-6">
                Our platform connects you with verified gas vendors in your area. 
                Enjoy fast, reliable delivery with real-time tracking and secure payments.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Image
                    src="/icons/checklist.png"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                  <span>Real-time order tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/icons/checklist.png"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                  <span>Secure payment options</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/icons/checklist.png"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                  <span>24/7 customer support</span>
                </li>
              </ul>

              <Button onClick={onJoinClick}>Join the waitlist</Button>
            </div>

            {/* Image column - Bottom on mobile, Right on desktop */}
            <div className="relative mt-8 md:mt-0">
              {/* On desktop: Absolute bottom, On mobile: Normal flow */}
              <div className="md:absolute md:bottom-0 w-full">
                <Image
                  src="/images/mobileImage-4.png"
                  alt="App Features"
                  width={280}
                  height={560}
                  className="mx-auto max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}