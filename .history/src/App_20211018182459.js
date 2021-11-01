import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' exact components={Home} />
        <R
      </Switch>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
