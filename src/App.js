import './App.css';
import Header from './container/Header';
import Home from './component/home/Home';
// import About from '.component/departments/About'
import Footer from './container/Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>

    <Header/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About} />

      </Switch>
    <Footer/>
    </div>
    
  );
}

export default App;
