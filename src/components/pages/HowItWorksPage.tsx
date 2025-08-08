import React from "react";

export default function HowItWorksPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            icon="📝"
            title="Input"
            description="Enter your product details and campaign goals"
          />
          <StepCard
            icon="🤖"
            title="AI Magic"
            description="Our AI generates creatives and copy variations"
          />
          <StepCard
            icon="🚀"
            title="Output"
            description="Get high-performing ads ready to publish"
          />
        </div>
      </div>
    </section>
  );
}

// Step Card Component Props
interface StepCardProps {
  icon: string;
  title: string;
  description: string;
}

const StepCard = ({ icon, title, description }: StepCardProps) => (
  <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm text-center transition-colors duration-300">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);
