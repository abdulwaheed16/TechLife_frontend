import Image from "next/image";
import userImage from "../../public/userImage.jpeg";
import React from "react";

const TestimonialCard = () => {
  const testimonials = [
    {
      name: "Abdul waheed",
      designation: "Web Developer",
      company: "XYZ",
      image: "",
      description:
        "I've had the privilege of collaborating with Company on multiple projects, and they consistently deliver outstanding results. Their team's creativity and attention to detail are second to none.",
    },
  ];
  return (
    <div className="">
      <div className="text-center mx-3 position-relative">
        <div className="mt-n3">
          <Image
            src={userImage}
            alt="client profile picture"
            height={80}
            className="userImage rounded-pill "
          />
        </div>
        <div className="content">
          <div className="pt-3 px-2 px-lg-1">
            <p className="text-start py-4 desc">
              {testimonials[0].description}
            </p>
            <p className="mt-auto">
              <span className="designation">Designation at </span>CompanyName
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
