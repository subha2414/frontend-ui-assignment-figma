export default function Hero() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Frontend UI Assignment
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Build a pixel-perfect UI from the Figma design using React + Next.js + Tailwind.
        </p>

        <button className="px-8 py-3 bg-black text-white rounded-md hover:opacity-80 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
