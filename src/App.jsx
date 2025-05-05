// Pages
import Home from './components/pages/Home'
import Quiz from './components/pages/Quiz'
import Score from './components/pages/Score'
// Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/score' element={<Score />} />
      </Routes>
    </Router>
  )
}

export default App
