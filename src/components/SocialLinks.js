// React
import React from "react";

// Images
import githubImg from "../assets/images/github.svg";
import linkedinImg from "../assets/images/linkedin.svg";

const SocialLinks = (githubLink, linkedinLink) => (
  <div>
    <a href={githubLink} target="_blank" rel="noreferrer">
      <img className="linkImg" alt="github logo" src={githubImg} />
    </a>
    <a href={linkedinLink} target="_blank" rel="noreferrer">
      <img className="linkImg" alt="github logo" src={linkedinImg} />
    </a>
  </div>
);

SocialLinks.defualtProps = {
  githubLink: "",
  linkedinLink: "",
};

export default SocialLinks;
