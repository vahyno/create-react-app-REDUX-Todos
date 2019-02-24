import React from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared'
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';

class App extends React.Component {
  componentDidMount(){
      const {dispatch} = this.props;
      
      dispatch(handleInitialData());
  }
  
  render() {
      const {loading} = this.props;

      if (loading) {
          return (
              <h3>Loading...</h3>
          )
      }

      return (
          <div>
              <h3>React Todos & Goals</h3>
              <ConnectedTodos />
              <ConnectedGoals />
          </div>
      )
  }
}


export default connect((state)=>({
  loading: state.loading
}))(App);

