import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeView } from './views';

export const routePaths = {
  home: { root: '/' },
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePaths.home.root} element={<HomeView />} />
      </Routes>
    </Router>
  );
}

export default App;
