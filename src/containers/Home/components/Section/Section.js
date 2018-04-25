import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

import Card from '../Card';
import './Section.less';

export default class Seection extends Component {

  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    dataList: PropTypes.array,
    goDetail: PropTypes.func,
    desc: PropTypes.string,
    reverse: PropTypes.bool,
  }

  render() {
    const {
      title, id, dataList, goDetail, desc, reverse
    } = this.props;
    return (
      <div className={`section ${reverse && 'reverse'}`} id={id}>
        <div className="sectionTitle" >
          <div className="blur" />
          <Parallax className="shadow" offsetYMax={50} offsetYMin={-50}>
            <div>{title}</div>
          </Parallax>
          <div className="titleText">
            <h2>{title}</h2>
            <p>{desc}</p>
            <button className="more" onClick={() => goDetail(id)}> more </button>
          </div>
        </div>
        <div className="content">
          {
            dataList.map(data => <ScrollAnimation animateIn="fadeIn"><Card {...data} /></ScrollAnimation>)
          }
        </div>
      </div>
    );
  }
}
