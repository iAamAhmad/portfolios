import React from "react";

import "../../components/Components.css";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="text-uppercase fw-bold text-primary">Portfolio</h4>
            <hr className="w-25 mx-auto" />
            <h2 className="mb-4">Check Out My Work</h2>
            <p className="lead">Here is a small sample of my projects.</p>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="project shadow-lg rounded-5">
                <a
                  href="images/project1.jpg"
                  data-lightbox="images"
                  data-title="Cliboard Landing Page"
                >
                  <img
                    src="../../../src/assets/project1.jpg"
                    alt=""
                    className="img-fluid rounded-3"
                  />
                </a>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="project shadow-lg rounded-5">
                <a
                  href="images/project2.jpg"
                  data-lightbox="images"
                  data-title="Loop Studios Website"
                >
                  <img
                    src="../../../src/assets/project2.jpg"
                    alt=""
                    className="img-fluid rounded-3"
                  />
                </a>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="project shadow-lg rounded-5">
                <a
                  href="images/project3.jpg"
                  data-lightbox="images"
                  data-title="Shortly Website"
                >
                  <img
                    src="../../../src/assets/project3.jpg"
                    alt=""
                    className="img-fluid rounded-3"
                  />
                </a>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="project shadow-lg rounded-5">
                <a
                  href="images/project4.jpg"
                  data-lightbox="images"
                  data-title="Flyo Website"
                >
                  <img
                    src="../../../src/assets/project5.jpg"
                    alt=""
                    className="img-fluid rounded-3"
                  />
                </a>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="project shadow-lg rounded-5">
                <a
                  href="images/project5.jpg"
                  data-lightbox="images"
                  data-title="Bookmark Website"
                >
                  <img
                    src="../../../src/assets/project5.jpg"
                    alt=""
                    className="img-fluid rounded-3"
                  />
                </a>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="project shadow-lg rounded-5">
                <a
                  href="images/project6.jpg"
                  data-lightbox="images"
                  data-title="Grid Layout"
                >
                  <img
                    src="../../../src/assets/project6.jpg"
                    alt=""
                    className="img-fluid rounded-3"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
