import { useCallback, useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

const PortfolioIsotope = ({ portfolio }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-row", {
        itemSelector: ".works-col",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <div className="work-isotope-filter">
      <ul className="works-list-ul wow fadeInUp">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          All
        </li>
        {/* Iterate over unique techStack values in portfolio */}
        {[...new Set(portfolio.flatMap(item => item.techStack))].map((tech) => (
          <li
            key={tech}
            className={`c-pointer ${activeBtn(tech.toLowerCase())}`}
            onClick={handleFilterKeyChange(tech.toLowerCase())}
            data-filter={`.${tech.toLowerCase()}`}
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="works-row wow fadeInUp">

        {portfolio.map((project) => (
          <div key={project._id} className={`works-col ${project.techStack.map(tech => tech.toLowerCase()).join(" ")}`}>
            <a href={project.liveurl || project.githuburl}>
              <img src={project.image.url} alt={project.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioIsotope;
