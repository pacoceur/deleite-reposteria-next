import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Home from "@/components/home";
import { mainDemoOnepage } from "@/data/menu";

export const metadata = {
  title: "Deleite Repostería",
  description:
    "Encuentra variedad de deliciosos panes y galletas, nuestra especialidad.",
};

export default function Page() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
          <Header links={mainDemoOnepage} />
        </nav>
        <main id="main">
          <ParallaxContainer
            className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5 scrollSpysection"
            style={{
              backgroundImage: "url(/banner.jpg)",
            }}
            id="home"
          >
            <Hero />
          </ParallaxContainer>
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}
