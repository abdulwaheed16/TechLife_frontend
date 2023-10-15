//Here is breif description of services and their packages, used for home page, navbar, or options for dropdown on contact page.

import web_dev_img from "/public/images/Web Development.jpg";
import app_dev_img from "/public/images/App Development.jpg";
import game_dev_img from "/public/images/Game Development.jpg";
import digital_marketing_img from "/public/images/Digital Marketing.jpg";
import human_resource_img from "/public/images/Customer Support.jpg";
import business_dashboard_img from "/public/images/Business Intelligence Dashboard.jpg";

export const ourServices = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    image: web_dev_img,
    super_desc:
      "Transforming visions into visually stunning and user-friendly websites, our web design and development services combine creativity, functionality, and seamless user experience to bring your online presence to life",
  },
  {
    id: 2,
    title: "App Development",
    slug: "app-development",
    image: app_dev_img,
    super_desc:
      "Coding the future, one app at a time: where creativity meets functionality, delivering innovative and user-centric mobile solutions tailored to your needs",
  },
  {
    id: 3,
    title: "Game Development",
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

// used in contact form, consultation
// const serviceOptidons = services.map((service) => {
//   const service_options = [
//     {
//       label: service.title,
//       options: service.packages.map((service_package)={})
//     },
//   ];
// });

const color = "#000";
export const servicesOptions = [
  {
    label: "Web Development",
    options: [
      {
        value: "Basic Website Package",
        label: "Basic Website Package",
        color: color,
      },
      {
        value: "E-commerce Website Package",
        label: "E-commerce Website Package",
        color: color,
      },
      {
        value: "Custom Web Application Package",
        label: "Custom Web Application Package",
        color: color,
      },
      {
        value: "Website Redesign Package",
        label: "Website Redesign Package",
        color: color,
      },
    ],
  },
  {
    label: "App Development",
    options: [
      {
        value: "Basic Mobile App Package",
        label: "Basic Mobile App Package",
        color: color,
      },
      {
        value: "E-commerce Mobile App Package",
        label: "E-commerce Mobile App Package",
        color: color,
      },
      {
        value: "Custom Mobile App Package",
        label: "Custom Mobile App Package",
        color: color,
      },
      {
        value: "App Redesign and Optimization Package",
        label: "App Redesign and Optimization Package",
        color: color,
      },
    ],
  },
  {
    label: "Game Development",
    options: [
      {
        value: "Casual Game Development Package",
        label: "Casual Game Development Package",
        color: color,
      },
      {
        value: "Mid-Level Game Development Package",
        label: "Mid-Level Game Development Package",
        color: color,
      },
      {
        value: "Advanced Game Development Package",
        label: "Advanced Game Development Package",
        color: color,
      },
      {
        value: "Game Redesign and Optimization Package",
        label: "Game Redesign and Optimization Package",
        color: color,
      },
    ],
  },
  {
    label: "Digital Marketing",
    options: [
      {
        value: "Social Media Marketing Package - Starter Package",
        label: "Social Media Marketing Package - Starter Package",
        color: color,
      },
      {
        value: "Social Media Marketing Package - Standard Package",
        label: "Social Media Marketing Package - Standard Package",
        color: color,
      },
      {
        value: "Social Media Marketing Package - Premium Package",
        label: "Social Media Marketing Package - Premium Package",
        color: color,
      },
      {
        value: "SEO Package - Basic Package",
        label: "SEO Package - Basic Package",
        color: color,
      },
      {
        value: "SEO Package - Standard Package",
        label: "SEO Package - Standard Package",
        color: color,
      },
      {
        value: "SEO Package - Advanced Package",
        label: "SEO Package - Advanced Package",
        color: color,
      },
      {
        label: "Pay-Per-Click Advertising Package - Starter PPC Package",
        value: "Pay-Per-Click Advertising Package - Starter PPC Package",
        color: color,
      },
      {
        value: "Pay-Per-Click Advertising Package - Advanced PPC Package",
        label: "Pay-Per-Click Advertising Package - Advanced PPC Package",
        color: color,
      },
      {
        value: "Pay-Per-Click Advertising Package - Premium PPC Package",
        label: "Pay-Per-Click Advertising Package - Enterprise PPC Package",
        color: color,
      },
    ],
  },
  {
    label: "Human Resource Outsourcing",
    options: [
      {
        value: "Hourly Rate Model",
        label: "Hourly Rate Model",
        color: color,
      },
      {
        value: "Monthly Rate Model",
        label: "Monthly Rate Model",
        color: color,
      },
      {
        value: "Performance-Based Pricing",
        label: "Performance-Based Pricing",
        color: color,
      },
      {
        value: "Project-Based Pricing",
        label: "Project-Based Pricing",
        color: color,
      },
      {
        value: "24/7 Support Package",
        label: "24/7 Support Package",
        color: color,
      },
    ],
  },
  {
    label: "Business Dashboard",
    options: [
      {
        value: "Basic Business Dashboard Package",
        label: "Basic Business Dashboard Package",
        color: color,
      },
      {
        value: "Standard Business Dashboard Package",
        label: "Standard Business Dashboard Package",
        color: color,
      },
      {
        value: "Premium Business Dashboard Package",
        label: "Premium Business Dashboard Package",
        color: color,
      },
      {
        value: "Enterprise Business Dashboard Package",
        label: "Enterprise Business Dashboard Package",
        color: color,
      },
    ],
  },
];
