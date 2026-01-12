import Image from "next/image";

export default function Partners() {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          
          {/* LEFT IMAGES */}
          <div className="hidden lg:flex flex-col gap-10 items-end">
            <VendorImage />
            <VendorImage />
          </div>

          {/* CENTER CONTENT */}
          <div className="text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
              100+ Gas Vendors
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              We've partnered with trusted gas vendors to give you more
              flexibility when ordering. With Refil, you can choose your
              preferred vendor, place your order instantly, and get gas
              delivered to your home or business with ease.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="hidden lg:flex flex-col gap-10 items-start">
            <VendorImage />
            <VendorImage />
          </div>

          {/* MOBILE IMAGES */}
          <div className="lg:hidden grid grid-cols-2 gap-6 mt-10">
            <VendorImage />
            <VendorImage />
            <VendorImage />
            <VendorImage />
          </div>

        </div>
      </div>
    </section>
  );
}

function VendorImage() {
  return (
    <div className="relative w-full max-w-50 h-60 mx-auto rounded-2xl overflow-hidden">
      <Image
        src="/images/mobileImage-5.png"
        alt="Gas Vendor"
        fill
        className="object-cover"
      />

      {/* Bottom Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

      {/* Vendor Name */}
      <span className="absolute bottom-4 left-4 text-white font-medium text-sm">
        Bovas
      </span>
    </div>
  );
}








