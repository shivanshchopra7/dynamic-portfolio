const Support = () => {
  return (
    <section className="support-section wow fadeInUp">
      <div className="container">
        <div className="support-items">
          <div className="row">
            {/* 01 support item start */}
            <div className="support-item">
              <div className="support-icon">
                <img
                  className="svg"
                  src="images/icons/exp.svg"
                  alt="dora_img"
                />
              </div>
              <div className="support-text">
                <h3>8 years job</h3>
                <p>Experience</p>
              </div>
            </div>
            {/* 01 support item end */}
            {/* 02 support item start */}
            <div className="support-item">
              <div className="support-icon">
                <img
                  className="svg"
                  src="images/icons/projectIcon.svg"
                  alt="dora_img"
                />
              </div>
              <div className="support-text">
                <h3>500+ Projects</h3>
                <p>Completed</p>
              </div>
            </div>
            {/* 02 support item end */}
            {/* 03 support item start */}
            <div className="support-item">
              <div className="support-icon">
                <img
                  className="svg"
                  src="images/icons/support.svg"
                  alt="dora_img"
                />
              </div>
              <div className="support-text">
                <h3>Support</h3>
                <p>Online 24/7</p>
              </div>
            </div>
            {/* 03 support item end */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
