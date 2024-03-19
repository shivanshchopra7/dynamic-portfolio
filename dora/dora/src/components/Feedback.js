import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";
import { getUserData } from 'pages/api/apiUtils';

const Feedback = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const userId = '65b3a22c01d900e96c4219ae';
        const userData = await getUserData(userId);
        console.log('User Data:', userData); // Log the entire userData object
        if (userData && userData.user && userData.user.testimonials) {
          setTestimonials(userData.user.testimonials);
        } else {
          console.error('No testimonials found in user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchTestimonials();
  }, []);

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
          {...doraSlider.feedbackSlider}
          className="swiper feedback-items-cont"
          navigation={{ prevEl: '.feedback-left', nextEl: '.feedback-right' }} // Add navigation controls
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
