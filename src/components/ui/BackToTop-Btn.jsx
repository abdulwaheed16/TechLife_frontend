import React, { useEffect, useState } from "react";

const BackToTopBtn = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    if (window.scrollY > 100) {
      setBackToTop(true);
    } else {
      setBackToTop(false);
    }
  });

  const scrollUp = () => {
    window.addEventListener("scroll", () => {
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    });
  };
  return (
    <div>
      <button onClick={scrollUp}>TOP</button>
    </div>
  );
};

export default BackToTopBtn;
