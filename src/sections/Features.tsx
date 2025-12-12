import FeatureCard from "../components/FeatureCard";

export default function Features() {
  const features = [
    {
      title: "Pixel-perfect UI",
      description: "Accurate layout, spacing and typography matching the Figma desktop design.",
    },
    {
      title: "Responsive Ready",
      description: "Built with mobile-first responsive Tailwind utilities (desktop target as required).",
    },
    {
      title: "Accessible",
      description: "Semantic HTML, keyboard focus, aria labels and color contrast considerations.",
    },
    {
      title: "Interactive States",
      description: "Hover, focus and transitions to match expected UI behavior.",
    },
  ];

  return (
    <section id="features" className="w-full bg-zinc-50 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
