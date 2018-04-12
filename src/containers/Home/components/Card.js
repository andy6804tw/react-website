import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  static propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    demoUrl: PropTypes.string,
    repoUrl: PropTypes.string,
  }
  render() {
    const {
      name, desc, img, demoUrl, repoUrl
    } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{desc}</div>
        <img src={img} alt={name} />
        <a href={demoUrl}>demourl</a>
        <a href={repoUrl}>repoUrl</a>
      </div>
    );
  }
}
