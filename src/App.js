import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import { ErrorBoundary } from 'react-error-boundary';
import UserAccount from './pages/UserAccount';
import Calendar from './pages/Calender';
import Documents from './pages/Documents';
import Files from './pages/Files';
import Messages from './pages/Messages';
import NotFound from './pages/NotFound';

function ErrorHandler({ error }) {
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
        <Routes>
          <Route path="/" exact element={<UserLogin />} />
          <Route path="userAccount" element={<UserAccount />} />
          <Route path="calender" element={<Calendar />} />
          <Route path="documents" element={<Documents />} />
          <Route path="files" element={<Files />} />
          <Route path="message" element={<Messages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;