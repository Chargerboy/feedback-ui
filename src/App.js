import Header from './components/Header';
import FeedBackForm from './components/FeedBackForm';
import FeedBackStats from './components/FeedBackStats';
import FeedBackList from './components/FeedBackList';
import AboutIcon from './components/AboutIcon';
import About from './components/pages/About';
import { FeedBackProvider } from './components/context/FeedBackContext';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <FeedBackProvider>
      <Router>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            ></Route>

            <Route element={<About />} path="/about" />
          </Routes>
        </div>
        <AboutIcon />
      </Router>
    </FeedBackProvider>
  );
}

export default App;
