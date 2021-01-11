// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero/index';
import AboutMe from './containers/AboutMe';
import programming_portfolio from './containers/ProgrammingPortfolio';
import Blogdisplay from './containers/Blogdisplay/Index';
import Blog from './components/blogs/Blog';
import Navbar from './components/Navbar/index';
import Work from './containers/Work';


// import Card from './components/UI/Card'; 

const App = () => (
 
<>
<Navbar />
    <Switch>
  
  

      <Route exact path="/" exact component={Home}/>
      <Route exact path="/AboutMe" component={AboutMe}/>
      <Route exact path="/programmingportfolio" component={programming_portfolio}/>
      <Route exact path="/Blogdisplay" component={Blogdisplay}/>
      <Route exact path ='/blog/:id' component={Blog} />
      <Route exact path ="/Work"  component={Work} />
    

    </Switch>
    </>
    
  )

export default App;