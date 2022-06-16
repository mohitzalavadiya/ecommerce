import './App.css';
import Header from './component/Header';
import Home from './container/home/Home';
import Footer from './component/Footer';
import { Route, Switch } from 'react-router-dom';
import About from './container/department/About';
import Blog from './container/department/Blog';
import Contact from './container/department/Contact';
import Product from './container/department/Product';
import Testimonial from './container/department/Testimonial';
import Login from './container/department/Login';
import Data from './container/data/Data';

function App() {
  return (
    <div>

    <Header/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About} />
      <Route path="/blog" exact component={Blog}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/product" exact component={Product}/>
      <Route path="/testimonial" exact component={Testimonial}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/data" exact component={Data}/>

      </Switch>
    <Footer/>
    </div>
    
  );
}

export default App;
