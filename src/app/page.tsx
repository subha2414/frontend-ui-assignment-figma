import Header from "../components/Header";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />

    </main>
  );
}
