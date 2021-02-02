import Header from './components/Header'
import Body from './components/Body'

function App() {
  const title = 'Activity 1';
  return (
    <div className="form-control">
      <Header title={title} />
      <Body />
    </div>
  );
}

export default App;
