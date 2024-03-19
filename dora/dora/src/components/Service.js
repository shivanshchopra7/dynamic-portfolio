import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { doraSlider } from "../sliderProps";
import { useState, useEffect, useRef } from 'react';
import { getUserData } from 'pages/api/apiUtils';

SwiperCore.use([Navigation]);

const Service = () => {
  const [userData, setUserData] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await getUserData('65b3a22c01d900e96c4219ae');
        console.log("userData:", userDataResponse);
        setUserData(userDataResponse);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const renderServices = () => {
    if (!userData || !userData.user.services) return null;

    return userData.user.services.map((service, i) => (
      <SwiperSlide key={i} className="swiper-slide">
        <div className="service-item">

          <h4>{service.name}</h4>
          <p>{service.desc}</p>
          {service.charge && <p>Price: {service.charge}</p>}
        </div>
      </SwiperSlide>
    ));
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="service-section" id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="service-title-container">
            <div className="section_title wow fadeInUp">
              <p>Services</p>
              <h2>I Provide Wide Range Of Digital Services</h2>
            </div>
            <div className="service-btn-container wow fadeInUp">
              <button onClick={slidePrev} className="slider-arrow service-swiper-button-left">
                <img className="svg" src="images/icons/arrow-left.svg" alt="service left btn" />
              </button>
              <button onClick={slideNext} className="slider-arrow active service-swiper-button-right">
                <img className="svg" src="images/icons/arrow-right.svg" alt="service left btn" />
              </button>
            </div>
          </div>
          <Swiper {...doraSlider.serviceSlider} className="swiper services-cont" ref={swiperRef}>
            {renderServices()}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Service;
