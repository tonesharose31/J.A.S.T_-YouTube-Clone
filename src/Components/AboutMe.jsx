import React from 'react';

const AboutMe = () => {
    return (
        <ul>
        <li className="contributers">
          <img src='src/assets/JASTjoseph.png' alt={`Joseph Carter`} />
          <div className="contributer-details-container">
            <h5>{`Joseph Carter`}</h5>
            <p>Things about me</p>
            <a href='https://www.linkedin.com/in/josephaecarter/'>Linkedin</a><br /><a href='https://github.com/Joseph-Carter'>Github</a>
          </div>
        </li>
        <li className="contributers">
          <img src='src/assets/JASTshanice.jpeg' alt={`Shanice Griffin`} />
          <div className="contributer-details-container">
            <h5>{`Shanice Griffin`}</h5>
            <p>Things about me</p>
            <a href='https://www.linkedin.com/in/shanicegriffin/'>Linkedin</a><br /><a href='https://github.com/shanicegrif'>Github</a>
          </div>
        </li>
        <li className="contributers">
          <img src='src/assets/JASTtonesha.jpeg' alt={`Tonesha Rose`} />
          <div className="contributer-details-container">
            <h5>{`Tonesha Rose`}</h5>
            <p>Things about me</p>
            <a href='https://www.linkedin.com/in/tonesha-rose-53321a273/'>Linkedin</a><br /><a href='https://github.com/tonesharose31'>Github</a>
          </div>
        </li>
        <li className="contributers">
          <img src='src/assets/JASTanile.jpeg' alt={`Anile Choice`} />
          <div className="contributer-details-container">
            <h5>{`Anile Choice`}</h5>
            <p>Things about me</p>
            <a href='https://www.linkedin.com/in/anile-choice/'>Linkedin</a><br /><a href='https://github.com/anilechoice'>Github</a>
          </div>
        </li>
        </ul>
      );
    }

export default AboutMe;
