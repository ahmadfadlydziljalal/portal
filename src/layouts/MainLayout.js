import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      <Header />
      <main class="flex-grow">
        <section>
          <div className="max-w-7xl mx-auto py-1 sm:px-6 lg:px-8 ">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
