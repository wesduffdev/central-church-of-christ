import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/central-church-of-christ" element={<HomePage />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
}

export default App
