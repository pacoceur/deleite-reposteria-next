"use client";
import AnimatedText from "@/components/common/AnimatedText";

export default function Hero() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h1 className="hs-title-1 mb-30">
              <span className="wow charsAnimIn" data-splitting="chars">
                <AnimatedText text="Endulza tu vida con Deleite Repostería" />
              </span>
            </h1>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <p
                  className="section-descr mb-50 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  Descubre el sabor de la frescura y la dedicación en cada
                  bocado. Desde galletas y panes hasta muffins y cupcakes
                  personalizados, tenemos algo delicioso para cada ocasión.
                </p>
              </div>
            </div>
            <div
              className="local-scroll mt-n10 wow fadeInUp wch-unset"
              data-wow-delay="0.7s"
              data-wow-duration="1.2s"
              data-wow-offset={0}
            >
              <a
                href="#portfolio"
                className="btn btn-mod btn-w btn-large btn-round btn-hover-anim ms-2 me-2 ms-sm-5 me-sm-5 align-middle mt-10"
              >
                <span>Ver fotos</span>
              </a>
              <a
                href="#contact"
                className="link-hover-anim align-middle lightbox mfp-iframe mt-10"
                data-link-animate="y"
              >
                Contacto
              </a>
            </div>
          </div>
          {/* End Home Section Text */}
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-4 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-4">
            <i className="mi-arrow-down size-24" />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Status */}
      <div className="hs-status wow fadeInUp" data-wow-offset={0}>
        Zapopan, Jalisco, México
      </div>
      {/* End Status */}
    </div>
  );
}
