import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  .skills-category {
    h3 {
      color: var(--lightest-slate);
      font-size: var(--fz-lg);
      font-weight: 500;
      margin-bottom: 20px;
      font-family: var(--font-mono);
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-top: 30px;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            &quot;Hello! My name is Ayushi, and I&apos;m fascinated by the science of human connection. 
            My interest in neuroscience began back in 2012 when I first explored how the brain 
            shapes behavior—turns out, understanding neural circuits taught me a lot about cognition and emotion!&quot;
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at{' '}
              <a href="https://www.sgsits.ac.in/">SGSITS</a> as an Assistant Professor,{' '}
              <a href="https://www.iiit.ac.in/">IIIT Hyderabad</a> as a Teaching Assistant, and currently pursuing my doctoral research at the{' '}
              <a href="https://csl.iiit.ac.in/">Cognitive Science Lab</a>. My
              main focus these days is understanding empathy networks and their interaction with societal biases through neuroimaging research.
            </p>

            <p>
              I'm currently focused on understanding how social biases influence neural responses in empathy networks, using advanced neuroimaging techniques and data analysis methods.
            </p>

            <p>Here are the technologies and methods I've been working with recently:</p>
          </div>

          <div className="skills-grid">
            <div className="skills-category">
              <h3>Neuroimaging Tools</h3>
              <ul className="skills-list">
                {['fMRI', 'EEG', 'SPM', 'FSL', 'AFNI', 'FreeSurfer'].map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="skills-category">
              <h3>Programming & Analysis</h3>
              <ul className="skills-list">
                {[
                  'Python',
                  'MATLAB',
                  'R Programming',
                  'Statistical Analysis',
                  'Machine Learning',
                  'Neural Networks'
                ].map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="skills-category">
              <h3>Cognitive Science</h3>
              <ul className="skills-list">
                {[
                  'ACT-R',
                  'SOAR',
                  'Cognitive Modeling',
                  'Behavioral Analysis'
                ].map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="skills-category">
              <h3>Research Tools</h3>
              <ul className="skills-list">
                {[
                  'PsychoPy',
                  'E-Prime',
                  'Experimental Design',
                  'Research Methods'
                ].map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/ayushi_me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
