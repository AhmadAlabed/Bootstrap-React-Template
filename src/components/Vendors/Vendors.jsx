import React from "react";
import Marquee from "react-fast-marquee";
import gallery from "../../assets/images/Vendors";
const Vendors = () => {
  return (
    <>
      <Marquee autoFill={true} pauseOnHover={true}>
        <img
          style={{
            display: "block",
            marginInline: "30px",
            marginBlock: "20px",
          }}
          src={gallery.img1}
          alt="img1"
        />
        <img
          style={{
            display: "block",
            marginInline: "30px",
            marginBlock: "20px",
          }}
          src={gallery.img2}
          alt="img1"
        />
        <img
          style={{
            display: "block",
            marginInline: "30px",
            marginBlock: "20px",
          }}
          src={gallery.img3}
          alt="img1"
        />
        <img
          style={{
            display: "block",
            marginInline: "30px",
            marginBlock: "20px",
          }}
          src={gallery.img4}
          alt="img1"
        />
      </Marquee>
    </>
  );
};

export default Vendors;
