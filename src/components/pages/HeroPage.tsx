import Image from "next/image";
import Link from "next/link";

export default function HeroPage() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-white">
          Create High-Converting Ads in Seconds — Powered by AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 dark:text-gray-300">
          No design or copywriting needed. Just enter your product and let
          Growly do the rest.
        </p>
        <button
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition dark:bg-indigo-700 dark:hover:bg-indigo-600"
          data-lpignore="true"
        >
          <Link href={"#bookFreeDemo"}>Book Free Demo</Link>
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/HeroImage1.png" // replace with actual image path
          alt="AI-generated ads"
          width={500} // set your actual width
          height={350} // set your actual height
          className="w-full max-w-[500px] h-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
