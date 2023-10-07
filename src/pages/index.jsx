import Head from "next/head";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contact";
import { Services } from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
// import ProfileBlob from "@/assets/img/Profile-Blob";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Techlife</title>
        <meta name="description" content="Coming Soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`App`}>
        <Banner />
        <Services />
        <Portfolio />
        {/* <ProfileBlob /> */}
        <Blog />
        <div id="about">
          <AboutUs />
        </div>
        <Clients />
        <div id="connect">
          <Contact />
        </div>
      </main>
    </>
  );
}
