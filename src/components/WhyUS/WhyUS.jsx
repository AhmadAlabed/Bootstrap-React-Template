import React from "react";
import sec5 from "../../assets/images/sec-5";
const WhyUS = () => {
  const contentArr = [
    {
      imageSrc: sec5.user,
      title: "Best price guaranteed",
      desc: "Find a lower price? We’ll refund you 100% of the difference.",
    },
    {
      imageSrc: sec5.user,
      title: "24 hour car delivery",
      desc: "Book your car anytime and we will deliver it directly to you.",
    },
    {
      imageSrc: sec5.message,
      title: "Best price guaranteed",
      desc: "Find a lower price? We’ll refund you 100% of the difference.",
    },
    {
      imageSrc: sec5.chat,
      title: "24 hour car delivery",
      desc: "Book your car anytime and we will deliver it directly to you.",
    },
  ];
  return (
    <>
      <section className="container-fluid py-5">
        <div className="row text-center text-md-start">
          <div className="col-5 d-none d-md-flex align-items-center audicar__box">
            <img className="img-fluid" src={sec5.AudiCar} alt="" />
          </div>
          <div className="col-12 offset-0 offset-md-1 col-md-6">
            <button className="mb-3 btn btn-outline-primary text-uppercase">
              why choose us
            </button>
            <h3 className="h4 mb-3 text-capitalize">
              We offer the best experience with our rental deals
            </h3>
            {/* -------- */}
            {contentArr.map((ele, index) => {
              return (
                <div
                  key={index}
                  className="d-flex text-start justify-content-start align-items-center mb-4"
                >
                  <div className="me-4">
                    <img src={ele.imageSrc} alt="" />
                  </div>
                  <div className="">
                    <p className="fw-bold m-0">{ele.title}</p>
                    <p className="small m-0">{ele.desc}</p>
                  </div>
                </div>
              );
            })}
            {/* -------- */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUS;
