import React, {Component} from 'react';
import Head from '../components/head';

export default class Index extends Component {
  render() {
    const title = 'Home | Nil Késede';
    const description = 'Software engineer since 2011 with experience in both back-end and front-end web development.';

    return (
      <div className="container">
        <Head title={title} description={description}/>

        <h1 className="text-hide">nil késede</h1>

        <div className="centralize">
          <a href="mailto:nil@ksde.pw?subject=Hi" target="_blank" rel="noopener noreferrer" title="email">email</a>
          <a href="https://github.com/nilkesede" target="_blank" rel="noopener noreferrer" title="github">github</a>
          <a href="https://linkedin.com/in/nilkesede" target="_blank" rel="noopener noreferrer" title="linkedin">linkedin</a>
          <a href="https://twitter.com/nilkesede" target="_blank" rel="noopener noreferrer" title="twitter">twitter</a>
          <a href="https://instagram.com/nilkesede" target="_blank" rel="noopener noreferrer" title="instagram">instagram</a>
          <a href="https://strava.com/athletes/nilkesede" target="_blank" rel="noopener noreferrer" title="strava">strava</a>
        </div>

        <style jsx global>{`
        html, body, #__next, .container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          background-color: #222;
        }
        `}
        </style>
        <style jsx>{`
        a {
          width: 100%;
          color: #ccc;
          text-decoration: none;
          letter-spacing: 3px;
          line-height: 2.5;
          font-size: 1.25rem;
          display: inline-block;
        }
        .centralize {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        @media (min-width: 750px) {
          a {
            width: auto;
            padding: 0 10px;
          }
        }
        `}
        </style>
      </div>
    );
  }
}
