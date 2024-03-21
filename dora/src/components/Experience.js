import { useContext, useState, useEffect } from 'react';
import { UserContext } from 'pages/api/UserContext'; 
import { getUserData } from 'pages/api/apiUtils';

const Experience = () => {
  const userData = useContext(UserContext); 
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userData) return;
        const userId = userData.user._id; 
        const userDataResponse = await getUserData(userId);
        console.log('User Data:', userDataResponse);
        if (userDataResponse && userDataResponse.user && userDataResponse.user.skills && userDataResponse.user.skills.length > 0) {
          setSkills(userDataResponse.user.skills);
        } else {
          console.error('No skills found in user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchData();
  }, [userData]); 

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
