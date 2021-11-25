import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="section-center footer-center">
        <h5>
          Made with <span className="code">&lt;/&gt;</span> by Munish Thakur
        </h5>
        <div className="footer-icons">
          <a
            href="https://github.com/munish710"
            target="_blank"
            className="footer-icon"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/munish-thakur-a14078190/"
            target="_blank"
            className="footer-icon"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://twitter.com/munish710"
            target="_blank"
            className="footer-icon"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: #1d1e18;
  margin-top: 2rem;
  .code {
    color: var(--clr-red-dark);
  }

  .footer-center {
    padding: 1.5rem 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h5 {
      color: var(--clr-white);
      margin-bottom: 1rem;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  .footer-icon {
    color: var(--clr-primary-4);
    font-size: 1.5rem;
    margin-right: 2rem;
  }

  .footer-icon:hover {
    color: var(--clr-primary-5);
  }
`;

export default Footer;
