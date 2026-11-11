import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ItinerarySection } from './components/ItinerarySection';
import { BackpackSection } from './components/BackpackSection';
import { BookingSection } from './components/BookingSection';
import { AdviceAndFaqSection } from './components/AdviceAndFaqSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToBooking = () => {
    const el = document.getElementById('reserva');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookingForDay = (day: number) => {
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#292019] flex flex-col font-sans selection:bg-[#E8C5A8] selection:text-[#3B2214]">
      {/* Navigation Top Bar Contract */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Cerro de los Siete Colores */}
        <Hero onOpenBooking={scrollToBooking} />

        {/* Day-by-Day Itinerary */}
        <ItinerarySection onOpenBookingForDay={handleOpenBookingForDay} />

        {/* Interactive Backpack Packing List */}
        <BackpackSection />

        {/* Booking Form with Realtime WhatsApp Preview */}
        <BookingSection />

        {/* High Altitude & Climate Advice + FAQs */}
        <AdviceAndFaqSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Access Button */}
      <FloatingWhatsApp onOpenBooking={scrollToBooking} />
    </div>
  );
}
