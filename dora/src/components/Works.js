import { useState, useEffect } from "react";
import { getUserData } from 'pages/api/apiUtils';
import dynamic from "next/dynamic";
const PortfolioIsotope = dynamic(() => import("./PortfolioIsotope"), {
  ssr: false,
});
const Works = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = '65b3a22c01d900e96c4219ae';
        const userData = await getUserData(userId);
        console.log('User Data:', userData);
        if (userData && userData.user && userData.user.projects) {
          setPortfolio(userData.user.projects);
        } else {
          console.error('No projects found in user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="works-section" id="works">
      <div className="container">
        {/* Work Title */}
        <div className="section_title wow fadeInUp center">
          <p>Portfolio</p>
          <h2>My Amazing Works</h2>
        </div>
        {/* Work Isotope */}
        <PortfolioIsotope portfolio={portfolio} />
      </div>
    </section>
  );
};
export default Works;
