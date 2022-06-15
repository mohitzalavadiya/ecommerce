import './App.css';
import Header from './container/Header';
import Home from './component/home/Home';
import Footer from './container/Footer';
import { Route, Switch } from 'react-router-dom';
import About from './component/department/About';
import Blog from './component/department/Blog';
import Contact from './component/department/Contact';
import Product from './component/department/Product';
import Testimonial from './component/department/Testimonial';

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
