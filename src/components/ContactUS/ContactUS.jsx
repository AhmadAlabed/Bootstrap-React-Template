import React, { useState } from "react";
import andriod from "../../assets/images/landing-page/andriod.png";
import ios from "../../assets/images/landing-page/ios.png";
import iPhone14 from "../../assets/images/landing-page/iPhone-14.png";
import axios from "axios";
const ContactUS = () => {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errMsg, setErrMsg] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getInfo = function (e) {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const sentInfo = async function () {
    try {
      setIsLoading(true);
      let { data } = await axios.post(
        "http://upskilling-egypt.com:3001/contact",
        info
      );
      setErrMsg({
        name: "",
        phone: "",
        email: "",
      });
      setSuccessMsg(data.message);
      setIsLoading(false);
    } catch (error) {
      let errorsMsg = {
        name: "",
        phone: "",
        email: "",
      };

      error.response.data.errors.forEach((ele) => {
        errorsMsg[ele.path] = ele.msg;
      });
      setErrMsg(errorsMsg);
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <h5 className="h2">
                Download Rentcars App for{" "}
                <span className="text-primary">FREE</span>
              </h5>
              <p>For faster, easier booking and exclusive deals.</p>
              <div className="d-flex">
                <a href="#" className="p-2">
                  <img src={andriod} alt="" />
                </a>
                <a href="#" className="p-2">
                  <img src={ios} alt="" />
                </a>
              </div>
              <div className="w-75">
                <input
                  type="text"
                  className="form-control bg-primary-subtle my-2 rounded-4"
                  id="name"
                  placeholder="Name"
                  name="name"
                  onChange={getInfo}
                />
                <input
                  type="text"
                  className="form-control bg-primary-subtle my-2 rounded-4"
                  id="phone"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={getInfo}
                />
                <input
                  type="email"
                  className="form-control bg-primary-subtle my-2 rounded-4"
                  id="email"
                  placeholder="Email"
                  name="email"
                  onChange={getInfo}
                />
              </div>
              <p className="small text-danger m-0">{errMsg.name}</p>
              <p className="small text-danger m-0">{errMsg.phone}</p>
              <p className="small text-danger m-0">{errMsg.email}</p>
              <p className="small text-danger m-0">{errMsg.email}</p>
              <p className=" text-success">{successMsg}</p>
              <button
                className="btn btn-primary px-5 mb-5 rounded-4 position-relative"
                onClick={sentInfo}
              >
                <div
                  className={
                    isLoading
                      ? "spinner-border position-absolute"
                      : "spinner-border position-absolute d-none"
                  }
                  role="status"
                >
                  <span className="visually-hidden"></span>
                </div>
                Send
              </button>
            </div>
            <div className="col-md-4 d-none d-md-flex align-items-end">
              <img className="img-fluid" src={iPhone14} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUS;
