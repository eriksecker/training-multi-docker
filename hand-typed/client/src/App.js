import { BrowsewrRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
		<Router>
	    <div className="App">
	      <header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />
					<div>
						<Link to="/">Home</Link>
						&nbsp;
						<Link to="/otherpage">Other Page</Link>
					</div>
	      </header>
				<div>
					<Route exact path="/" component={ Fib } />
					<Route path="/otherpage" component={ OtherPage } />
				</div>
	    </div>
		</Router>
  );
}

export default App;
