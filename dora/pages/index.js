
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Copyright from "@/src/components/Copyright";
import Experience from "@/src/components/Experience";
import Feedback from "@/src/components/Feedback";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import BlogPopup from "@/src/components/popup/BlogPopup";
import ImageView from "@/src/components/popup/ImageView";
import PortfolioPopup from "@/src/components/popup/PortfolioPopup";
import VideoPopup from "@/src/components/popup/VideoPopup";
import Service from "@/src/components/Service";
import Support from "@/src/components/Support";
import Works from "@/src/components/Works";
import { DoraContext } from "@/src/Context";
import Cursor from "@/src/layout/Cursor";
import PreLoader from "@/src/layout/PreLoader";
import { dora } from "@/src/utils";
import { useState, Fragment, useContext, useEffect } from "react";
import { getUserData } from './api/apiUtils';
import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from 'pages/api/UserContext';
const Index = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData('65b3a22c01d900e96c4219ae');
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    dora.imgToSvg();
    dora.customMouse();
    dora.smoothScrolling();
    dora.stickyNav();
    dora.activeSkillProgressBar();
    const a = document.querySelectorAll("a");
    for (let i = 0; i < a.length; i++) {
      const element = a[i];
      if (element.getAttribute("href") === "#") {
        element.addEventListener("click", (e) => e.preventDefault());
      }
    }
  }, []);
  const { blog, portfolio_modal } = useContext(DoraContext);
  return (
    <React.StrictMode>
    <UserProvider>
    <Fragment>
      {blog && <BlogPopup />}
      {portfolio_modal && <PortfolioPopup />}
      <ImageView />
      <VideoPopup />
      <PreLoader />
      {/* Preloader End */}
      {/* Header start */}
      <Header />
      {/* Header End */}
      {/* Home Section Start */}
      <Hero userData={userData} />
      {/* Home Section End */}
      {/* Support Section Start */}
      <Support />
      {/* Support Section End */}
      {/* Service Section Start */}
      <Service />
      {/* Service Section End */}
      {/* Experience Section Start */}
      <Experience />
      {/* Experience Section End */}
      {/* Works Section Start */}
      <Works />
      {/* Works Section End */}
      {/* Feedback Section Start */}
      <Feedback />
      {/* Feedback Section End */}
      {/* Blog Section Start */}
      <Blog />
      {/* Blog Section End */}
      {/* Contact Section Start */}
      <Contact />
      {/* Contact Section End */}
      {/* Copyright */}
      <Copyright />
      {/* Cursor */}
      <Cursor />
    </Fragment>
    </UserProvider>
  </React.StrictMode>
  );
};
export default Index;
