import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import webJson from '../../webData.json';


import './DetailPage.less';

export default class DetailPage extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  render() {
    // 傳送是哪個key
    const { type } = this.props.match.params;
    // 點開page快速顯示所有內容
    const matchObject = webJson.find(item => item.key === type);

    return (
      <div className="detailPage">
        <p>數量: {matchObject.dataList.length}</p>
        <div className="detailContainer">
          {
            matchObject &&
            matchObject.dataList.map(data => <Card {...data} />)
          }
        </div>
      </div>
    );
  }
}
