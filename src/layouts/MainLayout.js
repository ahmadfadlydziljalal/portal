import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      <main className="flex-grow">
        <section>
          <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6 sm:pb-6 sm:pt-6 lg:px-8">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
