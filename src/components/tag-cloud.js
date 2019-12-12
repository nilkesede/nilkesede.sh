import React, {Component} from 'react';
import {array} from 'prop-types';

export default class TagCloud extends Component {
  static defaultProps = {
    tags: ''
  };

  static propTypes = {
    tags: array
  };

  render() {
    const {tags} = this.props;

    return (
      <div className="container">
        {tags.map(tag => {
          return <span key={tag.title} className={'weight-' + tag.weight}>{tag.title}</span>;
        })}

        <div className="clearfix"/>

        <style jsx>{`
        .container { margin: 0 -10px; }
        span { padding: 0 10px; float: left; line-height: 30px; }
        .weight-1 { font-size: .8em; }
        .weight-2 { font-size: 1em; }
        .weight-3 { font-size: 1.2em; }
        .weight-4 { font-size: 1.4em; }
        .weight-5 { font-size: 1.6em; }
        .clearfix:after {
          content: ".";
          display: block;
          height: 0;
          width: 0;
          clear: both;
          visibility: hidden;
        }
        `}
        </style>
      </div>
    );
  }
}
