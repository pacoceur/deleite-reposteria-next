import { socialLinks } from "@/data/footer";

export default function Footer() {
  return (
    <div className="container">
      <div className="page-section">
        <div className="row">
          {/* Copyright */}
          <div className="col-lg-3 text-center text-lg-start mb-md-50">
            Deleite Repostería {new Date().getFullYear()}.
          </div>
          {/* End Copyright */}
          {/* Social Links */}
          <div className="col-lg-6 fw-social-inline text-center mb-md-40">
            {socialLinks.map((elm, i) => (
              <div key={i} className="fw-social-inline-item">
                <a
                  href={elm.href}
                  target="_blank"
                  rel="nofollow noopener"
                  className="link-hover-anim align-middle"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">{elm.text}</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      {elm.text}
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
          {/* End Social Links */}
          <div className="col-lg-3 text-center text-lg-end local-scroll">
            <a href="#top" className="fw-top-link">
              <span className="fw-top-link-underline">
                Regresar al principio
              </span>
              <span className="icon ms-1">
                <i className="icon-arrow-up1 size-22" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer Text */}
      {/* <div className="footer-text text-center mt-n10 pb-50">
        Deleite Repostería {new Date().getFullYear()}.
        <div className="small">
          Read <a href="#">Terms &amp; Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </div>
      </div> */}
      {/* End Footer Text */}
    </div>
  );
}
