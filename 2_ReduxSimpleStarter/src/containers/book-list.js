import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
// 컨테이너 : 리액트 컴포넌트, 리덕스 스테이트에 직접적인 연결 가능

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
         key={book.title}
         onClick={()=>this.props.selectBook(book)}
         className="list-group-item">{book.title}
         </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}
// 이 함수로 반환 받은 것은 book-list 컨테이너의 props로 연결됨 
function mapDispatchToProps(dispatch) {
  // selectBook이 호출되면, 결과는 모든 리듀서로 전달 되어야함
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}
// 어플리케이션 스테이트가 바뀔 때마다 스테이트 함수 안의 객체가 컴포넌트의 props로 할당
// BookList 컴포넌트에서 컨테이너로 변경 후 모든 새 dispatch 메소드, selectBook, 을 알아야 하고 prop으로 사용가능 해야함
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
