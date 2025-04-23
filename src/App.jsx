// Pages
import Home from './components/Home'
import Quiz from './components/Quiz'
import Score from './components/Score'
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
