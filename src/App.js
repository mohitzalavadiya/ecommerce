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
import PublicRoute from './container/public-route/Public';
import PrivateRoute from './container/private-route/Private';

function App() {
  return (
    <div>

    <Header/>
      <Switch>
      <PublicRoute path="/" exact component={Home}/>
      <PublicRoute path="/about" exact component={About} />
      <PublicRoute path="/blog" exact component={Blog}/>
      <PublicRoute path="/contact" exact component={Contact}/>
      <PublicRoute path="/product" exact component={Product}/>
      <PublicRoute path="/testimonial" exact component={Testimonial}/>
      <PublicRoute path="/login" restricted exact component={Login}/>
      <PrivateRoute path="/data" exact component={Data}/>

      </Switch>
    <Footer/>
    </div>
    
  );
}

export default App;
