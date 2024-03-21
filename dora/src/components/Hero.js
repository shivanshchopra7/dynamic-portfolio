import React, { useContext } from 'react';
import { UserContext } from 'pages/api/UserContext'; 

const Hero = () => {
  const userData = useContext(UserContext); 

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi, I'm</span>
            <h1>{userData && userData.user.about.name}</h1>
            <h3>{userData && userData.user.about.title}</h3>

            <p>
              {userData && userData.user.about.subTitle}
            </p>

            <p>
              {userData &&
                userData.user.social_handles.map((socialHandle) => (
                  <a
                    key={socialHandle._id}
                    href={socialHandle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={socialHandle.image.url}
                      alt={socialHandle.platform}
                      style={{ width: '20px', height: '20px', margin: '0 8px' }}
                    />
                  </a>
                ))}
            </p>
            <div className="hero-btn-container">
              <a href="#contact" className="btn primary-btn">
                Download CV
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
            <img
              src={userData && userData.user.about.avatar.url}
              alt={userData && userData.user.about.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
