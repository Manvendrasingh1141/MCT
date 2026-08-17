/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ProductPage } from "./pages/ProductPage";
import { ContactPage } from "./pages/ContactPage";
import { OrderPage } from "./pages/OrderPage";
import { AboutPage } from "./pages/AboutPage";
import { SmoothScroll } from "./components/SmoothScroll";
import { useFadeUpAnimations } from "./hooks/useFadeUpAnimations";
import { ScrollToTop } from "./components/ScrollToTop";

function GlobalAnimations() {
  useFadeUpAnimations();
  return null;
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-sakura-base flex flex-col items-center justify-center p-8">
      <h1 className="font-serif text-4xl text-sakura-primary mb-4">{title}</h1>
      <a href="/" className="font-sans text-sm text-sakura-secondary hover:text-sakura-primary underline underline-offset-4">
        Return Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalAnimations />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/individuals" element={<PlaceholderPage title="For Individuals" />} />
        <Route path="/companies" element={<PlaceholderPage title="For Companies" />} />
        <Route path="/gymr" element={<PlaceholderPage title="GYMR" />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/start" element={<PlaceholderPage title="Get Started" />} />
      </Routes>
    </BrowserRouter>
    </SmoothScroll>
  );
}

