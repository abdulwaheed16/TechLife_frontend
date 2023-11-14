//
// This file contains services details information. ( for services page)
//

import projecImage from "../../assets/img/project-img1.png";
import projecImage2 from "../../assets/img/project-img2.png";
import projecImage3 from "../../assets/img/project-img3.png";
import robotImage from "../../assets/img/header-img.svg";
import web_dev_img from "/public/images/Web Development.jpg";
import app_dev_img from "/public/images/App Development.jpg";
import game_dev_img from "/public/images/Game Development.jpg";
import digital_marketing_img from "/public/images/Digital Marketing.jpg";
import human_resource_img from "/public/images/Customer Support.jpg";

import business_dashboard_img from "/public/images/Business Intelligence Dashboard.jpg";

import {
  Business_Dashboard_approaches,
  Human_Resource_outsourcing,
  app_dev_approaches,
  digital_marketing_approaches,
  game_dev_approaches,
  web_dev_approaches,
} from "./approches";
import {
  app_dev_benifits,
  business_dashboard_benifits,
  digital_marketing_benifits,
  game_dev_benifits,
  human_resource_benifits,
  web_dev_benifits,
} from "./banifits";
import {
  additional_services_web_dev,
  web_dev_packages,
} from "./packages/web-dev-pacakges";
import {
  additional_services_app_dev,
  app_dev_packages,
} from "./packages/app_dev_packages";
import {
  additional_services_game_dev,
  game_dev_packages,
} from "./packages/game_dev_packages";
import { digital_marketing_packages } from "./packages/digital_marketing_packages";
import { hr_packages } from "./packages/hr_packages";
import { business_dashboard_packages } from "./packages/business_dashboard_packages";

// Our Services ( Home Page only)

// Services Details
export const services = [
  {
    id: 1,
    title: "Web development",
    slug: "web-development",
    welcome_msg: "Welcome to The Tech Life – Where Ideas Come to Life Online!",
    desc: "At The Tech Life, we specialize in crafting exceptional web development and design solutions tailored to meet your unique needs. In today's digital age, your online presence is often the first interaction potential clients have with your business. We understand the importance of making that first impression count. With our expert web development and design services, we transform your vision into a captivating, user-friendly, and responsive website that not only showcases your brand but also engages your audience effectively.",
    price: "16",
    image: web_dev_img,
    ourApproaches: web_dev_approaches,
    benifits: web_dev_benifits,
    packages: web_dev_packages,
    add_ons: additional_services_web_dev,
  },
  {
    id: 2,
    title: "App development",
    slug: "app-development",
    welcome_msg:
      "Welcome to the TechLife – Your Partner in Transformative App Development!",
    desc: "At The Tech Life, we take immense pride in our cutting-edge app development services tailored to meet the dynamic needs of businesses in the digital age. Mobile applications have become the lifeblood of modern enterprises, connecting businesses with their customers on a personal level. With our expertise, creativity, and technical prowess, we bring your app ideas to life, creating immersive, intuitive, and high-performance mobile experiences.",
    price: "150",
    image: app_dev_img,
    ourApproaches: app_dev_approaches,
    benifits: app_dev_benifits,
    packages: app_dev_packages,
    add_ons: additional_services_app_dev,
  },
  {
    id: 3,
    title: "Game development",
    slug: "game-development",
    welcome_msg:
      "Welcome to The TechLife – Where Imagination Transforms into Gaming Reality!",
    desc: "At The Tech Life, we are passionate about game development that goes beyond entertainment—it's about creating experiences, crafting narratives, and building worlds that captivate players and leave a lasting impact. With our dedicated team of skilled developers, designers, and storytellers, we bring your gaming dreams to life, offering a diverse range of gaming solutions that span genres and platforms.",
    price: "130",
    image: game_dev_img,
    ourApproaches: game_dev_approaches,
    benifits: game_dev_benifits,
    packages: game_dev_packages,
    add_ons: additional_services_game_dev,
  },
  {
    id: 4,
    title: "Digital Marketing",
    slug: "digital-marketing",
    welcome_msg:
      "Welcome to The TechLife – Mastering the Art of Digital Marketing!",
    desc: "At the TechLife, we are more than just marketers; we are storytellers, strategists, and digital enthusiasts who thrive on helping businesses succeed in the vast online landscape. With the ever-changing digital world, your brand's visibility and engagement are pivotal to your success. That's where we come in. Our comprehensive digital marketing services are designed to elevate your brand, increase your online presence, and drive meaningful interactions with your audience.",
    price: "120",
    image: digital_marketing_img,
    ourApproaches: digital_marketing_approaches,
    benifits: digital_marketing_benifits,
    packages: digital_marketing_packages,
  },
  {
    id: 5,
    title: "Human Resource Outsourcing",
    slug: "human-resource-outsourcing",
    welcome_msg:
      "Welcome to the TechLife – Your Trusted Partner in Outsourced Customer Support and Sales Solutions!",
    desc: "At The TechLife, we understand the vital role customer support and sales play in shaping the success of businesses. That's why we offer specialized outsourced services, designed to seamlessly integrate with your operations while providing top-notch customer support and sales solutions.",
    price: "210",
    image: human_resource_img,
    outsourcing: Human_Resource_outsourcing,
    benifits: human_resource_benifits,
    packages: hr_packages,
  },
  {
    id: 6,
    title: "Business Dashboard",
    slug: "business-dashboard",
    welcome_msg: "Welcome to the TechLife – Where data drives Decisions",
    desc: "At The TechLife, we specialize in crafting cutting-edge business dashboard and interface solutions that revolutionize the way businesses interpret and utilize data. In today's fast-paced digital landscape, staying ahead requires not just data, but actionable insights. Our services go beyond aesthetics – we transform complex data into intuitive, user-friendly interfaces that provide deep analytical capabilities, enabling businesses to make informed decisions and strategize for success.",
    price: "190",
    image: business_dashboard_img,
    ourApproaches: Business_Dashboard_approaches,
    benifits: business_dashboard_benifits,
    packages: business_dashboard_packages,
  },
];
