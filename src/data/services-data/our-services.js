//
// This files containes only ourServices data, a section on Home Page only.
//

// import projecImage from "../../assets/img/project-img1.png";
// import projectImage from "../../assets/img/project-img1.png";
// import projecImage2 from "../../assets/img/project-img2.png";
// import projecImage3 from "../../assets/img/project-img3.png";
// import robotImage from "../../assets/img/header-img.svg";

import web_dev_img from "/public/images/Web Development.jpg";
import app_dev_img from "/public/images/App Development.jpg";
import game_dev_img from "/public/images/Game Development.jpg";
import digital_marketing_img from "/public/images/Digital Marketing.jpg";
import human_resource_img from "/public/images/Customer Support.jpg";

import business_dashboard_img from "/public/images/Business Intelligence Dashboard.jpg";
export const ourServices = [
  {
    id: 1,
    title: "Web development",
    slug: "web-development",
    image: web_dev_img,
    super_desc:
      "Transforming visions into visually stunning and user-friendly websites, our web design and development services combine creativity, functionality, and seamless user experience to bring your online presence to life",
  },
  {
    id: 2,
    title: "App development",
    slug: "app-development",
    image: app_dev_img,
    super_desc:
      "Coding the future, one app at a time: where creativity meets functionality, delivering innovative and user-centric mobile solutions tailored to your needs",
  },
  {
    id: 3,
    title: "Game development",
    slug: "game-development",
    image: game_dev_img,
    super_desc:
      "Crafting immersive worlds and thrilling adventures, we transform ideas into interactive game experiences, where creativity knows no bounds and players embark on unforgettable journeys",
  },
  {
    id: 4,
    title: "Digital Marketing",
    slug: "digital-marketing",
    image: digital_marketing_img,
    super_desc:
      "Elevating brands in the digital realm, our strategic digital marketing solutions drive engagement, boost visibility, and create lasting connections, ensuring businesses thrive in the online landscape.",
  },
  {
    id: 5,
    title: "Human Resource Outsourcing",
    slug: "human-resource-outsourcing",
    image: human_resource_img,
    super_desc:
      "Passionate about providing stellar customer experiences, our dedicated customer support and sales professionals are your trusted partners in understanding your needs, addressing concerns, and ensuring your satisfaction with our products and services.",
  },
  {
    id: 6,
    title: "Business Dashboard",
    slug: "business-dashboard",
    image: business_dashboard_img,
    super_desc:
      "Empowering businesses with intuitive and insightful dashboard interfaces, our services transform complex data into actionable insights, enabling informed decision-making and driving strategic growth.",
  },
];
