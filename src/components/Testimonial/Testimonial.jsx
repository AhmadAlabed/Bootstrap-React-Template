import React from "react";
import man1 from "../../assets/images/landing-page/man1.jpg";
import man2 from "../../assets/images/landing-page/man2.jpg";
import man3 from "../../assets/images/landing-page/man3.png";
import girl from "../../assets/images/landing-page/girl.png";
import star from "../../assets/images/card/star.png";
const Testimonial = () => {
  return (
    <>
      <section className="testimonial text-center py-5 overflow-hidden">
        <button className="mb-3 btn btn-outline-primary text-uppercase">
          testimonial
        </button>
        <h3 className="mb-5 text-capitalize">what people say about us?</h3>
        <div className="container py-5">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active bg-dark"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className="bg-dark"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <!-- --------------------------------- --> */}
                <div className="row g-5 justify-content-center">
                  {/* <!-- --------------------------------- --> */}
                  <div className="col-12 col-lg-6">
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-4">
                          <img
                            src={man1}
                            className="img-fluid rounded-start h-100  object-fit-cover"
                            alt="man"
                          />
                        </div>
                        <div className="col-8">
                          <div className="card-body text-start">
                            <h5 className="card-title">
                              <span className="h1">5.5</span> stars
                            </h5>
                            <div>
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                            </div>
                            <div className="card-text">
                              <p>
                                “I feel very secure when using caretall's
                                services. Your customer care team is very
                                enthusiastic and the driver is always on time.”
                              </p>

                              <p>Charlie Johnson</p>
                            </div>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                Last updated 3 mins ago
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-4">
                          <img
                            src={man2}
                            className="img-fluid rounded-start h-100 object-fit-cover"
                            alt="man"
                          />
                        </div>
                        <div className="col-8">
                          <div className="card-body text-start">
                            <h5 className="card-title">
                              <span className="h1">5.5</span> stars
                            </h5>
                            <div>
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                            </div>
                            <div className="card-text">
                              <p>
                                “I feel very secure when using caretall's
                                services. Your customer care team is very
                                enthusiastic and the driver is always on time.”
                              </p>

                              <p>Charlie Johnson</p>
                            </div>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                Last updated 3 mins ago
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- --------------------------------- --> */}
                </div>
              </div>
              <div className="carousel-item ">
                {/* <!-- --------------------------------- --> */}
                <div className="row g-5 justify-content-center">
                  {/* <!-- --------------------------------- --> */}
                  <div className="col-12 col-lg-6">
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-4">
                          <img
                            src={man3}
                            className="img-fluid rounded-start h-100 object-fit-cover"
                            alt="man"
                          />
                        </div>
                        <div className="col-8">
                          <div className="card-body text-start">
                            <h5 className="card-title">
                              <span className="h1">5.5</span> stars
                            </h5>
                            <div>
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                            </div>
                            <div className="card-text">
                              <p>
                                “I feel very secure when using caretall's
                                services. Your customer care team is very
                                enthusiastic and the driver is always on time.”
                              </p>

                              <p>Charlie Johnson</p>
                            </div>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                Last updated 3 mins ago
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-4">
                          <img
                            src={man1}
                            className="img-fluid rounded-start h-100 object-fit-cover"
                            alt="man"
                          />
                        </div>
                        <div className="col-8">
                          <div className="card-body text-start">
                            <h5 className="card-title">
                              <span className="h1">5.5</span> stars
                            </h5>
                            <div>
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                              <img src={star} alt="" />
                            </div>
                            <div className="card-text">
                              <p>
                                “I feel very secure when using caretall's
                                services. Your customer care team is very
                                enthusiastic and the driver is always on time.”
                              </p>

                              <p>Charlie Johnson</p>
                            </div>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                Last updated 3 mins ago
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- --------------------------------- --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
