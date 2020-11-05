export function fetchMemesAction() {
    return (dispatch) => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => dispatch({
                type: 'FETCH_MEMES',
                memes: data.data.memes
            }))

    }
   }