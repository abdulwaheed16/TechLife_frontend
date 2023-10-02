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
        "I've had the privilege of collaborating with Company on multiple projects, and they consistently deliver outstanding results. Their team's creativity and attention to detail are second to none. They are not just service providers but true partners in our success. I can't recommend [Your Company Name}  enough.",
    },
  ];
  return (
    <>
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
          <div className="p-4">
            <p className="text-start py-4">{testimonials[0].description}</p>
            <p className="mt-auto">
              <span className="designation">Designation at </span>CompanyName
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
