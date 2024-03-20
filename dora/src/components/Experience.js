import { useState, useEffect } from 'react';
import { getUserData } from 'pages/api/apiUtils';

const Experience = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = '65b3a22c01d900e96c4219ae';
        const userData = await getUserData(userId);
        console.log('User Data:', userData);
        if (userData && userData.user && userData.user.skills && userData.user.skills.length > 0) {
          setSkills(userData.user.skills);
        } else {
          console.error('No skills found in user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchData();
  }, []);



  return (
    <section className="experience-section" id="about">
      <div className="container">
        {/* Experience Title */}
        <div className="section_title wow fadeInUp center">
          <p>Why Choose Me</p>
          <h2>My Experience Area</h2>
        </div>
        <div className="experience-items wow fadeInUp">
          {skills.map((skill, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-info">
                <p>{skill.name}</p>
                <p>{skill.percentage}%</p>
              </div>
              <div className="progress-line" data-percent={`${skill.percentage}%`}>
                <span />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
