import Image from "next/image";
import userImage from "../../public/userImage.jpeg";
import React from "react";
import backgroundImage from "../assets/img/Profile-Blob.jsx";
import ProfileBlob from "../assets/img/Profile-Blob.jsx";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const TestimonialCard = ({ testimonial }) => {
  const { name, company, quote } = testimonial;
  return (
    <div className="testimonial_card">
      <div className="text-center mx-3 position-relative">
        {/* <div
          className="userImage_wrapper"
          style={{
            padding: "10px",
          }}
        >
          <Image
            src={userImage}
            alt="client profile picture"
            height={80}
            className="userImage rounded-pill "
          />
        </div> */}
        <div className="content">
          <div className="">
            <p className="text-start pt-4 pb-2  desc">
              <span className="quotation_mark quotation-mark-start">
                <BiSolidQuoteAltLeft />
              </span>
              {quote}
              <span className="quotation_mark quotation-mark-end">
                <BiSolidQuoteAltRight />
              </span>
            </p>
            <p className=" client_name">
              <span className="designation">{name}</span>
              <span style={{ color: "yellow" }}> at </span>
              {company}
              {/* person Name */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
