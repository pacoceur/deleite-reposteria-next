import { services6 } from "@/data/services";

export default function Service() {
  return (
    <>
      <div
        className="page-section bg-dark-1 bg-dark-alpha-70 light-content parallax-7 pb-140"
        style={{
          backgroundImage: "url(/portfolio-4.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">Servicios.</h2>
              <div className="text-gray">Descubre nuestros sabores únicos</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-n140 position-relative z-index-1">
        <div className="row mb-n30">
          {/* Services Item*/}
          {services6.map((elm, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-30"
            >
              <div className="services-3-item round text-center">
                <div className="wow fadeInUpShort" data-wow-offset={50}>
                  <div className="services-3-icon">
                    <img src={elm.path} width={elm.width} height={elm.height} />
                  </div>
                  <h3 className="services-3-title">{elm.title}</h3>
                  <div className="services-3-text">{elm.text}</div>
                </div>
              </div>
            </div>
          ))}
          {/* End Services Item*/}

          {/* End Services Item*/}
        </div>
      </div>
    </>
  );
}
