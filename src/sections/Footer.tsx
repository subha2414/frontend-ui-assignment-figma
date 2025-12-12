export default function Footer() {
  return (
    <footer className="w-full bg-zinc-100 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-8">
        
        <h2 className="text-xl font-semibold text-black">UIX</h2>

        <nav className="flex gap-8 text-gray-600 text-sm">
          <a href="#" className="hover:text-black transition">Features</a>
          <a href="#" className="hover:text-black transition">Pricing</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </nav>

      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} UIX. All rights reserved.
      </p>
    </footer>
  );
}
