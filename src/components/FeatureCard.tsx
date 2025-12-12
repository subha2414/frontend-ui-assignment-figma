type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode; // optional icon element
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article
      className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow focus-within:shadow-md"
      tabIndex={0}
      aria-label={title}
    >
      <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">
        {icon ?? <span aria-hidden>⚡</span>}
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

      <div className="mt-auto">
        <a
          href="#"
          className="inline-block mt-3 text-sm font-medium text-black underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded"
        >
          Learn more →
        </a>
      </div>
    </article>
  );
}
