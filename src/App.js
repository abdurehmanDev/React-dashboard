import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import {ErrorBoundary} from 'react-error-boundary';
//import Home from './pages/Home';
//import UserAccount from './pages/UserAccount';


function ErrorHandler({error}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Router>
          <UserLogin/>
        </Router>
    </ErrorBoundary>
  );
}

export default App;