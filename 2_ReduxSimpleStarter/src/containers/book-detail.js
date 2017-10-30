import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div> 정보를 보기 위해 책을 선택해주세요.</div>
    }
    return (
      <div>
        <h3> Details for:</h3>
        <div> 제목 : {this.props.book.title}</div>
        <div> 총 페이지 : {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);