import React, {Component} from 'react';
import {arrayOf, shape, string, number} from 'prop-types';

export default class TagCloud extends Component {
  static propTypes = {
    tags: arrayOf(shape({
      title: string.isRequired,
      weight: number.isRequired
    })).isRequired
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
        span { padding: 0 10px; float: left; line-height: 45px; }
        .weight-1 { font-size: .8em; }
        .weight-2 { font-size: 1.1em; }
        .weight-3 { font-size: 1.4em; }
        .weight-4 { font-size: 1.7em; }
        .weight-5 { font-size: 2em; }
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
