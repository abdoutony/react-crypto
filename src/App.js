import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './FlexBox.css';

import {BrowserRouter as Router,Route} from 'react-router-dom';
import Main from './routes/Main';
import Currency from './routes/Currency';
function App() {
  return (
    <div className="App">
        <Router basename={'/react-crypto/'}>
           <Route path='/' exact render={(props)=><Main />} />
           <Route path='/currency/:id' render= {(props)=> <Currency />} />
        </Router>
    </div>
  );
}

export default App;
