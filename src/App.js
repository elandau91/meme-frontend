import './App.css';
import MemeContainer from './containers/memeContainer'
import {connect} from 'react-redux'
import {fetchMemesAction} from './actions/memeActions'


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <p>Hiya</p>
      <button onClick={() => props.fetchMemesAction()}>Generate Memes</button>
      <MemeContainer memes={props.memes}/>
    </div>
  );
}

function msp(state){
  return {memes: state.memes}
}

export default connect(msp, {fetchMemesAction})(App);
