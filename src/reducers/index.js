// 初期ステート設定
const initialState = {
  count: 0
}

// actionに応じてステートを変更
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + 1 }
    }
    case 'DECREMENT': {
      return { count: state.count - 1 }
    }
    default:
      return state
  }
}
