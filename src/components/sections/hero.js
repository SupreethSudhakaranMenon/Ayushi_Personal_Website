import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .objective {
    margin-top: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    strong {
      color: var(--lightest-slate);
      display: block;
      margin-bottom: 15px;
      font-size: var(--fz-xl);
    }

    .objective-text {
      margin-top: 20px;
      font-style: italic;
      color: var(--light-slate);
      font-family: var(--font-sans);
      font-weight: 500;
      line-height: 1.5;
      max-width: 800px;
      text-align: justify;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Ayushi Agrawal.</h2>;
  const three = <h3 className="big-heading">I decode the social brain.</h3>;
  const four = (
    <>
      <p>
      I'm a social neuroscience researcher exploring the brain and behavior to understand human connection. Currently, I focus on studying the neural foundations of social interactions.
       {' '}
        <a href="https://sites.google.com/view/perception-engineering-group" target="_blank" rel="noreferrer">
          PEG, IIIT-H
        </a>
        .
      </p>
    </>
  );
  const five = (
    <div className="objective">
      {/* <strong>Objective:</strong> */}
      {/* <span className="objective-text">"Passionate Social Neuroscience researcher dedicated to unraveling empathy networks shaped by societal biases and stereotypes. Leveraging interdisciplinary skills in neuroimaging, cognitive neuroscience, and social sciences to uncover new insights into social behavior’s neural mechanisms. Collaborative research enthusiast committed to continual learning and skill development to drive positive societal change and organizational success through innovative research endeavors."</span> */}
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
