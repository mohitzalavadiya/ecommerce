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

      </Switch>
    <Footer/>
    </div>
    
  );
}

export default App;
