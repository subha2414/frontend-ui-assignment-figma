import Header from "../components/Header";
import Hero from "../sections/Hero";
import Features from "../sections/Features";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Header />
      <Hero />
      <Features />

      {/* TODO: Add Features Section */}
      {/* TODO: Add Footer */}
    </main>
  );
}
