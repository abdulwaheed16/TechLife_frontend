import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { NavBar } from "@/components/NavBar";
import NavbarTest from "@/mock/Navbar";
import { Footer } from "@/components/Footer";
import { Router } from "next/router";
import Loader from "@/components/Loader";
import { Toaster } from "react-hot-toast";
import BackToTopBtn from "@/components/ui/BackToTop-Btn";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  Router.events.on("routeChangeError", (url) => {
    setLoading(false);
  });
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <>
      {loading && <Loader />}
      <NavBar />
      {/* <NavbarTest /> */}
      <Component {...pageProps} />
      <Toaster />
      <Footer />
      {/* <BackToTopBtn /> */}
    </>
  );
}
