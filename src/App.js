import React from 'react'
// import Header from './components/Header'
// import Body from './components/Body'
import Profile from './components_ant/Profile'

import 'antd/dist/antd.css';


class App extends React.Component {

  constructor() {
      super();

      this.state = {
          // showForm: false
      };
  }
  render() {
    
    // const title = 'Activity 1';

    return (
      <div className="form-control">
        {/* <Header title={title} /> */}
        <Profile />
        {/* <Body /> */}
    </div>
      )
    }

}

export default App;
