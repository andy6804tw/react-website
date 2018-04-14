import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import './Section.less';

export default class Seection extends Component {

  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    dataList: PropTypes.array,
    goDetail: PropTypes.func,
  }

  render() {
    const {
      title, id, dataList, goDetail
    } = this.props;
    return (
      <div className="section" id={id}>
        <h2>{title}</h2>
        <div className="content">
          {
            dataList.map(data => <Card {...data} />)
          }
        </div>
        <button className="more" onClick={goDetail}> more </button>
      </div>
    );
  }
}
