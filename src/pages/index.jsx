import Head from "next/head";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contact";
import Blog from "@/components/Blog";
import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
// import ProfileBlob from "@/assets/img/Profile-Blob";
// const inter = Inter({ subsets: ["latin"] });
import logo from "../../public/TechLife_logo-preview.png";
import Refer from "@/components/Refer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Techlife</title>
        <meta name="description" content="Coming Soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TechLife_logo.svg" />
      </Head>
      <main className={`App`}>
        <Banner />
        {/* <Services /> */}
        {/* <Portfolio /> */}
        <OurServices />
        <Testimonials />
        {/* <ProfileBlob /> */}
        {/* <Blog /> */}
        <Refer />
        <div id="about">
          <AboutUs />
        </div>
        {/* <Clients /> */}
        <div id="connect">
          <Contact />
        </div>
      </main>
    </>
  );
}
