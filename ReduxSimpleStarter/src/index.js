// 리액트 : 컴포넌트를 생성, 관리
import React from 'react';
// 리액트돔 : 컴포넌트를 DOM에 렌더링 (실제 DOM과 상호작용)
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA-WRTSvsD9wxZgohR5N-e18D0EG6hEyR0';

// 1. 컴포넌트를 만들고, 이 컴포넌트는 HTML을 만들 것이다.

// JSX => (바닐라 자바스크립트로 변환됨)실제 HTML로 변환되어 제공 => DOM에 삽입 
// React.createElement("div", null, "hi!")과 같이 변횐됨
// 컴포넌트를 깔끔하고 보기 좋게 만들기 위해 JSX 사용한다.
const App = () => {
  return (
    <div>
      <br />
      안녕! React!!! <hr />
      <SearchBar />
    </div>
  );
}

// 2. 이 컴포넌트가 만든 HTML을 가져가서 페이지에 반영한다. (in the DOM) => Render
// 컴포넌트를 인스턴스화 해야한다
ReactDOM.render(<App />, document.querySelector('.container'));
