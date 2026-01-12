import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3 items-start">
          
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/refil-logo.png"
                alt="Refil"
                width={90}
                height={32}
              />
            </div>

            <p className="text-sm text-gray-600 mt-6 max-w-sm">
              Your Trusted Platform to Order Gas from Vendors You Know
            </p>

            <div className="flex gap-5 mt-6">
              <Image src="/icons/twitter-icon.png" alt="X" width={18} height={18} />
              <Image src="/icons/instagram-icon.png" alt="Instagram" width={18} height={18} />
              <Image src="/icons/linkind-icon.png" alt="LinkedIn" width={18} height={18} />
            </div>
          </div>

          {/* CENTER */}
          <div className="flex flex-col gap-6 text-sm text-gray-700 md:items-center">
            <div className="flex flex-wrap gap-6">
              <span className="cursor-pointer hover:text-black">Home</span>
              <span className="cursor-pointer hover:text-black">About Us</span>
              <span className="cursor-pointer hover:text-black">Contact Us</span>
              <span className="cursor-pointer hover:text-black">Our Partners</span>
            </div>

            <div className="flex gap-6 text-gray-500">
              <span className="cursor-pointer hover:text-black">Terms & privacy</span>
              <span className="cursor-pointer hover:text-black">Privacy</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6 text-sm text-gray-500 md:items-end">
            <p>© Refil 2026 - All Rights Reserved by Refil</p>
            <span className="cursor-pointer text-gray-700 hover:text-black">
              Join the waitlist
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}



