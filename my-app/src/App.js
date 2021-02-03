import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NextPage from './components/NextPage'
import Form from './components/Form'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/NextPage" component={NextPage}/>
        <Route path="/" component={Form}/>
      </Switch>
    </Router>
  );
}

export default App;
