const memeReducer = (state = {memes: []}, action) => {
    switch (action.type) {
     case 'FETCH_MEMES':
         //console.log(state.memes)
      return {
            ...state,
            memes: action.memes
      }
     default:
      return state
    }
   }

export default memeReducer