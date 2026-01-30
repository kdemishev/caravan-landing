import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Cities } from "@/app/components/Cities";
import { DeliveryTypes } from "@/app/components/DeliveryTypes";
import { WhoCan } from "@/app/components/WhoCan";
import { WhatWeOffer } from "@/app/components/WhatWeOffer";
import { CTA } from "@/app/components/CTA";
import { Contacts } from "@/app/components/Contacts";
import { PublicOffer } from "@/app/components/PublicOffer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Cities />
        <DeliveryTypes />
        <WhoCan />
        <WhatWeOffer />
        <CTA />
        <Contacts />
        {/* <PublicOffer /> */}
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 CaraVan Group. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}