import { getGallery } from "@/lib/queries/getGallery";
import { revalidateTag } from "next/cache";
import About from "../about";
import Contact from "../contact";
import Marquee from "../marquee";
import Portfolio from "../portfolio";
import Service from "../service";

export default function Home() {
  const { gallery } = getGallery("4pMUflMHvYC7ya696P5li0");

  revalidateTag("entries");
  console.log("gallery", gallery);
  return (
    <>
      <section className="page-section scrollSpysection pb-0" id="about">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center mb-md-50">
              <div>
                <div className="wow linesAnimIn" data-splitting="lines">
                  <h2 className="section-title mb-30 mb-sm-20">
                    <span className="text-gray">Sobre</span> nosotros
                    <span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray mb-30 mb-sm-20">
                    <p className="mb-0">
                      En Deleite Repostería, nos dedicamos a crear momentos
                      inolvidables a través de sabores excepcionales. Con
                      ingredientes frescos y recetas artesanales, cada producto
                      que sale de nuestro horno está hecho con amor y atención
                      al detalle. Nos especializamos en galletas, pero también
                      ofrecemos una variedad de panes, muffins y cupcakes que
                      deleitarán tus sentidos. Nuestra pasión por la repostería
                      es lo que nos impulsa a innovar y a ofrecerte productos
                      que no solo se ven bien, sino que saben aún mejor.
                    </p>
                  </div>
                </div>
                <div className="local-scroll wow fadeInUpShort wch-unset">
                  <a
                    href="#services"
                    className="link-hover-anim link-circle-1 align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      Ver servicios
                      <span className="visually-hidden">nosotros</span>
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      Ver servicios
                      <span className="visually-hidden">nosotros</span>
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <About />
          </div>
        </div>
      </section>
      <div className="page-section overflow-hidden">
        <Marquee />
      </div>
      <section className="page-section pt-0 scrollSpysection" id="services">
        <Service />
      </section>
      <hr className="mt-0 mb-0" />
      <section className="page-section pb-0 scrollSpysection" id="portfolio">
        <div className="container">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">
                <span className="text-gray">Galería</span> de fotos
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray">Nuestros momentos más dulces</div>
            </div>
          </div>
        </div>
        <Portfolio gallery={gallery} />
      </section>
      <section className="page-section scrollSpysection" id="contact">
        <div className="container">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">
                <span className="text-gray">Ponte en</span> contacto
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray">Queremos saber de ti</div>
            </div>
          </div>
        </div>
        <Contact />
      </section>
    </>
  );
}
