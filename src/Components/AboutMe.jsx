import React from "react";

const AboutMe = () => {

  return (
    <div className="col">
      <ul className="contributor-list">
        <div className="card">
          <li className="contributers">
            <img
              src="src/assets/JASTjoseph.png"
              alt={`Joseph Carter`}
              className="card-img-top"
            />
            <div className="contributer-details-container">
              <div className="card-body d-block">
                <h5 className="card-title">{`Joseph Carter`}</h5>
                <p className="card-text">Things about me.</p>
                <a
                  href="https://www.linkedin.com/in/josephaecarter/"
                  className="card-link"
                >
                  Linkedin
                </a>
                <br />
                <a
                  href="https://github.com/Joseph-Carter"
                  className="card-link"
                >
                  Github
                </a>
              </div>
            </div>
          </li>
        </div>
        <div className="card">
          <li className="contributers">
            <img
              src="src/assets/JASTshanice.jpeg"
              alt={`Shanice Griffin`}
              className="card-img-top"
            />
            <div className="contributer-details-container">
              <div className="card-body d-block">
                <h5 className="card-title">{`Shanice Griffin`}</h5>
                <p className="card-text">Things about me</p>
                <a
                  href="https://www.linkedin.com/in/shanicegriffin/"
                  className="card-link"
                >
                  Linkedin
                </a>
                <br />
                <a href="https://github.com/shanicegrif" className="card-link">
                  Github
                </a>
              </div>
            </div>
          </li>
        </div>
        <div className="card">
          <li className="contributers">
            <img
              src="src/assets/JASTtonesha.jpeg"
              alt={`Tonesha Rose`}
              className="card-img-top"
            />
            <div className="contributer-details-container">
              <div className="card-body d-block">
                <h5 className="card-title">{`Tonesha Rose`}</h5>
                <p className="card-text">Things about me</p>
                <a
                  href="https://www.linkedin.com/in/tonesha-rose-53321a273/"
                  className="card-link"
                >
                  Linkedin
                </a>
                <br />
                <a
                  href="https://github.com/tonesharose31"
                  className="card-link"
                >
                  Github
                </a>
              </div>
            </div>
          </li>
        </div>
        <div className="card">
          <li className="contributers">
            <img
              src="src/assets/JASTanile.jpeg"
              alt={`Anile Choice`}
              className="card-img-top"
            />
            <div className="contributer-details-container">
              <div className="card-body d-block">
                <h5 className="card-title">{`Anile Choice`}</h5>
                <p className="card-text">Things about me</p>
                <a
                  href="https://www.linkedin.com/in/anile-choice/"
                  className="card-link"
                >
                  Linkedin
                </a>
                <br />
                <a href="https://github.com/anilechoice" className="card-link">
                  Github
                </a>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default AboutMe;
