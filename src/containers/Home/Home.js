import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnimatedRoute } from 'react-router-transition';
import { Link } from 'react-router-dom';

import HomeTitle from './components/HomeTitle';
import Section from './components/Section';
import webJson from './webData.json';
import detailPage from './components/DetailPage';

import './Home.less';

export default class Home extends Component {
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
  }

  goDetail = (type) => {
    this.props.history.push(`/detail/${type}`);
  }

  render() {
    const { isExact } = this.props.match;

    // 移除背景滑動事件
    document.getElementsByTagName('html')[0].style.overflow = isExact ? 'auto' : 'hidden';


    return (
      <div id="pageHome">
        <HomeTitle />
        {
          webJson.map(sectionData =>
            (
              <Section
                key={sectionData.key}
                title={sectionData.title}
                dataList={sectionData.dataList.slice(-4).reverse()}
                id={sectionData.key}
                goDetail={this.goDetail}
              />
            ))
        }
        {/* isExact 判斷是否在首頁Router */}
        {/* menu */}
        <div className={`menu ${!isExact && 'slideIn'}`} >
          {
            webJson.map(sectionData => (
              <Link className="link" to={`/detail/${sectionData.key}`}>{sectionData.title}</Link>
            ))
          }
        </div>
        {/* 側邊條 */}
        <div className={`goHome ${!isExact && 'slideIn'}`}>
          <Link to="/">{'<-'}</Link>
        </div>
        {/* 進入  detailPage */}
        <AnimatedRoute
          className="animateRoute"
          path="/detail/:type"
          component={detailPage}
          atEnter={{ offset: 100 }}
          atLeave={{ offset: 100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`,
          })}
        />
      </div>
    );
  }
}
