import './App.css';
import MemeContainer from './containers/memeContainer'
import {connect} from 'react-redux'
import {fetchMemesAction} from './actions/memeActions'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <p>Hiya</p>
      <Button variant="outline-secondary" onClick={() => props.fetchMemesAction()}>Generate Memes</Button>
      <br></br>
      <MemeContainer memes={props.memes}/>
    </div>
  );
}

function msp(state){
  return {memes: state.memes}
}

export default connect(msp, {fetchMemesAction})(App);
