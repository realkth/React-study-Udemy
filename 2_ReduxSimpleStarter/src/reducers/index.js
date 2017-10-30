import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
// 어플리케이션 스테이트를 반환하는 함수
// 리듀서는 스테이트의 값을 만든다.
const rootReducer = combineReducers({
  // 리듀서에 키 추가 : 전역 어플리케이션 스테이트 books
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
