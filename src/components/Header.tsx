export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-tight">UIX</h2>

        <nav className="hidden md:flex gap-10 text-gray-700 text-sm">
          <a href="#" className="hover:text-black transition">Features</a>
          <a href="#" className="hover:text-black transition">Pricing</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </nav>

        <button className="px-5 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition">
          Sign In
        </button>
      </div>
    </header>
  );
}
