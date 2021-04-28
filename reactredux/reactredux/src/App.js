import './App.css';
import { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component{
  render() {
    return(
    <div className="App">
      <div>AGE: <span>{this.props.age}</span></div>
      <button onClick={this.props.ageUp}>Age UP</button>
      <button onClick={this.props.ageDown}>Age Down</button>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ageUp : () => dispatch({type: 'AgeUp'}),
    ageDown: () => dispatch({type: 'AgeDown'})
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
