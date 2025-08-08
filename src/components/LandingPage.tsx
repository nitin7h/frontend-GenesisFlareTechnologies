"use client";

import HeroPage from "./pages/HeroPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import LeadCaptureForm from "./pages/LeadCaptureForm";
import FooterPage from "./pages/FooterPage";
import KeyFeaturesPage from "./pages/KeyFeaturesPage";

export default function LandingPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <HeroPage />
        {/* How It Works */}

        <HowItWorksPage />
        {/* Key Features */}
        <KeyFeaturesPage />
        {/* Lead Capture Form */}
        <section className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
              Get Started Today
            </h2>
            <p className="text-gray-600 text-center mb-12 dark:text-gray-300">
              Schedule your free demo to see how Growly can transform your
              advertising
            </p>
            <LeadCaptureForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterPage />
    </>
  );
}
