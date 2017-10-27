// state => 자바스크립트 객체 : 유저 이벤트를 저장하고 반응하는데 이용
// 컴포넌트들은 그 자체의 스테이트 객체를 가짐
// 스테이트에 변화가 생기면 리렌더, 자식 요소들에게도 렌더링 강제함
// 스테이트를 사용하기 전에 초기화 필요(constructor : 모든 클래스가 생성 될 때마다 실행)
// 클래스 기반 컴포넌트만 스테이트 가능

import React, { Component } from 'react';

// 함수형 컴포넌트
// const SearchBar = () => {
//   return <input />
// }

// 클래스 기반 컴포넌트
// SearchBar라는 이름의 클래스를 만들고 React.Component의 모든 기능을 받아라
class SearchBar extends Component {
  // 스테이트 초기화
  constructor(props) {
    // 부모 메소드 호출
    super(props);
    // constructor 안에서만 this.state
    // 다른 컴포넌트 안에서는 this.setState
    this.state = { term: '' };
  }
  // 그 자체로 렌더 될 수 있도록 render 메소드 사용
  render() {
    // 이렇게는 사용하지 마..
    // this.state.term = event.target.vaule 
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder=" 찾고 싶은 동영상을 검색해보세요!" />
      </div>);
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
  // render() {
  //   return <input onChange={this.onInputChange} />;
  // }

  // onInputChange(event) {
  //   console.log(event.target.value)
  // }
// new SearchBar


// 어느 컴포넌트에서나 이제 SearchBar라는 이름으로 이 컴포넌트를 불러 올 수 있다.
export default SearchBar;