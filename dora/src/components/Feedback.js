import { useContext, useEffect, useState } from 'react';
import { UserContext } from 'pages/api/UserContext';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { getUserData } from 'pages/api/apiUtils';

SwiperCore.use([Navigation]);

const Feedback = () => {
  const userData = useContext(UserContext); 
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        if (!userData) return; 
        const userId = userData.user._id; 
        const userDataResponse = await getUserData(userId);
        console.log('User Data:', userDataResponse);
        if (userDataResponse && userDataResponse.user && userDataResponse.user.testimonials) {
          setTestimonials(userDataResponse.user.testimonials);
        } else {
          console.error('No testimonials found in user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchTestimonials();
  }, [userData]); 

  return (
    <section className="feedback-section">
      <div className="container">
        <div className="feedback-section-title-cont">
          <div className="section_title wow fadeInUp">
            <h2>
              Clients are satisfied for <br />
              our work, view feedback
            </h2>
          </div>
          <div className="feedback-btn-cont wow fadeInUp">
            <a href="#" className="slider-arrow feedback-left">
              <img
                className="svg"
                src="images/icons/arrow-left.svg"
                alt="dora_img"
              />
            </a>
            <a href="#" className="slider-arrow active feedback-right">
              <img
                className="svg"
                src="images/icons/arrow-right.svg"
                alt="dora_img"
              />
            </a>
          </div>
        </div>
        <Swiper
          className="swiper feedback-items-cont"
          navigation={{ prevEl: '.feedback-left', nextEl: '.feedback-right' }} 
        >
          <div className="swiper-wrapper feedback-items wow fadeInUp">
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="swiper-slide feedback-item">
                <div className="feedback-active-img">
                  <img src={testimonial.image.url} alt="testimonial_img" />
                </div>
                <div className="feedback-info-cont">
                  <div className="feedback-title-cont">
                    <h3>{testimonial.name}</h3>
                    <div className="feedback-title-element">
                      <img
                        src="./images/bg_elements/feedback-element.svg"
                        alt="dora_img"
                      />
                    </div>
                  </div>
                  <p className="feedback-txt">{testimonial.review}</p>
                  <div className="feedback-person-info">
                    <div className="feedback-person-img">
                      <img src={testimonial.image.url} alt="testimonial_img" />
                    </div>
                    <div className="feedback-person-name">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

      </div>
    </section>
  );
};

export default Feedback;
