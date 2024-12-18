import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header from "@/components/header";
import NotFoundHero from "@/components/hero/not-found-hero";

export const metadata = {
  title: "Esta página no existe",
  description: "No existe",
};

export default function NotFoundPage() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
          <Header />
        </nav>
        <main id="main">
          <ParallaxContainer
            className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5 scrollSpysection"
            style={{
              backgroundImage: "url(/banner.jpg)",
            }}
            id="home"
          >
            <NotFoundHero />
          </ParallaxContainer>
        </main>
      </div>
    </div>
  );
}
