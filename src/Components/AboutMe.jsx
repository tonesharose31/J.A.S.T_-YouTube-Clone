import React from "react";

const AboutMe = () => {
  return (
    <div className="col-sm-12 col-md-4">
      <div className="col">
        <ul className="contributor-list">
          <div className="card">
            <li className="contributers">
              <img
                src="src/assets/JASTjoseph.png"
                alt={`Joseph Carter`}
                class="card-img-top"
              />
              <div className="contributer-details-container">
                <div class="card-body d-block">
                  <h5 className="card-title">{`Joseph Carter`}</h5>
                  <p className="card-text">Things about me.</p>
                  <a href="https://www.linkedin.com/in/josephaecarter/">
                    Linkedin
                  </a>
                  <br />
                  <a href="https://github.com/Joseph-Carter">Github</a>
                </div>
              </div>
            </li>
          </div>
          <div className="card">
            <li className="contributers">
              <img
                src="src/assets/JASTshanice.jpeg"
                alt={`Shanice Griffin`}
                class="card-img-top"
              />
              <div className="contributer-details-container">
                <div class="card-body d-block">
                  <h5 className="card-title">{`Shanice Griffin`}</h5>
                  <p className="card-text">Things about me</p>
                  <a href="https://www.linkedin.com/in/shanicegriffin/">
                    Linkedin
                  </a>
                  <br />
                  <a href="https://github.com/shanicegrif">Github</a>
                </div>
              </div>
            </li>
          </div>
          <div className="card">
            <li className="contributers">
              <img
                src="src/assets/JASTtonesha.jpeg"
                alt={`Tonesha Rose`}
                class="card-img-top"
              />
              <div className="contributer-details-container">
                <div class="card-body d-block">
                  <h5 className="card-title">{`Tonesha Rose`}</h5>
                  <p className="card-text">Things about me</p>
                  <a href="https://www.linkedin.com/in/tonesha-rose-53321a273/">
                    Linkedin
                  </a>
                  <br />
                  <a href="https://github.com/tonesharose31">Github</a>
                </div>
              </div>
            </li>
          </div>
          <div className="card">
            <li className="contributers">
              <img
                src="src/assets/JASTanile.jpeg"
                alt={`Anile Choice`}
                class="card-img-top"
              />
              <div className="contributer-details-container">
                <div class="card-body d-block">
                  <h5 className="card-title">{`Anile Choice`}</h5>
                  <p className="card-text">Things about me</p>
                  <a href="https://www.linkedin.com/in/anile-choice/">
                    Linkedin
                  </a>
                  <br />
                  <a href="https://github.com/anilechoice">Github</a>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
