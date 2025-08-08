import React from "react";

export default function KeyFeaturesPage() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎨"
            title="AI Creative Generator"
            description="Automatically generates visual ad concepts"
          />
          <FeatureCard
            icon="📈"
            title="Headline Optimizer"
            description="Tests and selects highest-converting headlines"
          />
          <FeatureCard
            icon="📤"
            title="Export Ad Formats"
            description="Export ready-to-use ads for all platforms"
          />
        </div>
      </div>
    </section>
  );
}

// Feature Card Component Props
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col items-center md:items-start md:flex-row bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm transition-colors duration-300">
    <div className="text-3xl mb-4 md:mr-4 md:mb-0">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);
