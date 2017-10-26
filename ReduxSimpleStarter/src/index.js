import _ from 'lodash';
// 리액트 : 컴포넌트를 생성, 관리
import React, { Component } from 'react';
// 리액트돔 : 컴포넌트를 DOM에 렌더링 (실제 DOM과 상호작용)
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA-WRTSvsD9wxZgohR5N-e18D0EG6hEyR0';


// 1. 컴포넌트를 만들고, 이 컴포넌트는 HTML을 만들 것이다.
// JSX => (바닐라 자바스크립트로 변환됨)실제 HTML로 변환되어 제공 => DOM에 삽입 
// React.createElement("div", null, "hi!")과 같이 변횐됨
// 컴포넌트를 깔끔하고 보기 좋게 만들기 위해 JSX 사용한다.


// const App = () => {
//   return (
//     <div>
//       <br />
//       안녕! React!!! <hr />
//       <SearchBar />
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('프론트엔드 김태훈');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      // 키와 변수 이름이 같을 때 아래처럼 사용가능
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // this.setState({ videos: videos });
      // console.log(this.state);
    });
  }

  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 500);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}

// 2. 이 컴포넌트가 만든 HTML을 가져가서 페이지에 반영한다. (in the DOM) => Render
// 컴포넌트를 인스턴스화 해야한다
ReactDOM.render(<App />, document.querySelector('.container'));

// 새로운 컴포넌트를 만들기 전 - 이 컴포넌트가 어떤 스테이트든 유지 할 필요가 있나?