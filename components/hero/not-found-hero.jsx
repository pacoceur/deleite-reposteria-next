"use client";
import AnimatedText from "@/components/common/AnimatedText";

export default function NotFoundHero() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h1 className="hs-title-1 mb-30">
              <span className="wow charsAnimIn" data-splitting="chars">
                <AnimatedText text="Esta página no existe" />
              </span>
            </h1>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <p
                  className="section-descr mb-50 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  Revisa la URL
                </p>
              </div>
            </div>
          </div>
          {/* End Home Section Text */}
        </div>
      </div>
      {/* End Home Section Content */}
    </div>
  );
}
