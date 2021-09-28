import './App.css';
import Header from './Header';
import Footer from './Footer';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostDetail from './components/PostDetail';
function App() {
  return (
    <section>
      <Router>
        <Header/>
          <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/PostDetail" component={PostDetail}></Route>
          </Switch>
        <Footer/>
      </Router>
    </section>
    
  );
}

export default App;
