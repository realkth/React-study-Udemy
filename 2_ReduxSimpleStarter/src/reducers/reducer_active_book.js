// 스테이트 요소는 어플리케이션 스테이트가 아니고 리듀서가 스테이트의 권한을 가지고 있다.
// state = undefined는 불가능
export default function (state = null, action) {
  // 액션에 신경 쓸 경우
  // 언제나 원본 오브젝트 반환
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // 액션에 신경 안써도 될 경우
  return state;
}