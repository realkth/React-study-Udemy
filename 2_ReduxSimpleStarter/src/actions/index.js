// 액션 생성자 : 액션을 반환하는 함수
// 액션 : 모든 리듀서로 흐르는 오브젝트
// 리듀서는 액션을 이용, 그 자체의 특정한 스테이트를 위한 값 생성
export function selectBook(book) {
  console.log('a book has been selected:', book.title);
}