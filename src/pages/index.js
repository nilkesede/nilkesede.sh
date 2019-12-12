import React, {Component} from 'react';
import Head from '../components/head';

export default class Index extends Component {
  render() {
    const title = 'Nil Késede';
    const description = 'The Nil Késede\'s website!';

    return (
      <div className="container">
        <Head title={title} description={description}/>

        <h1 className="text-hide">nil késede</h1>

        <div className="centralize">
          <a href="mailto:nil@ksde.pw?subject=Hi" target="_blank" rel="noopener noreferrer" title="email">email</a>
          <a href="https://github.com/nilkesede" target="_blank" rel="noopener noreferrer" title="github">github</a>
          <a href="https://twitter.com/nilkesede" target="_blank" rel="noopener noreferrer" title="twitter">twitter</a>
          <a href="https://instagram.com/nilkesede" target="_blank" rel="noopener noreferrer" title="instagram">instagram</a>
          <a href="https://strava.com/athletes/nilkesede" target="_blank" rel="noopener noreferrer" title="strava">strava</a>
        </div>

        <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          border: 0;
          box-sizing: border-box;
        }
        html, body, #__next, .container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        body {
          color: #eee;
          background-color: #222;
          font: 400 1.3rem/1.5 'Roboto Mono', 'Lucida Console', Monaco, monospace;
        }
        `}
        </style>
        <style jsx>{`
        a {
          display: inline-block;
          width: 100%;
          color: #ccc;
          text-decoration: none;
          letter-spacing: 3px;
          line-height: 2.5;
        }
        .centralize {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .text-hide {
          font: 0/0 a;
          color: transparent;
          text-shadow: none;
          background-color: transparent;
        }
        @media (min-width: 650px) {
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
