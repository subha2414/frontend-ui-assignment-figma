import FeatureCard from "@/components/FeatureCard";

export default function Features() {
  const features = [
    {
      title: "Pixel-Perfect Layout",
      description: "Clean proportions, balanced spacing, and a flawless minimal visual hierarchy.",
    },
    {
      title: "Reusable Components",
      description: "Build once, use everywhere — scalable and maintainable UI blocks.",
    },
    {
      title: "Modern Styling",
      description: "Minimal design inspired by today's top tech brands.",
    },
    {
      title: "Fully Responsive",
      description: "Looks perfect on every screen size with smooth stacking.",
    },
  ];

  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Why Choose Our UI?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
