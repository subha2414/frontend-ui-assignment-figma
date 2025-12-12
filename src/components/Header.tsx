export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Logo</h2>

        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#" className="hover:text-black transition">Features</a>
          <a href="#" className="hover:text-black transition">Pricing</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </nav>

        <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition">
          Sign In
        </button>
      </div>
    </header>
  );
}
