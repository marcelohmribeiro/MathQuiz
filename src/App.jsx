// Pages
import Home from './components/Home'
import Quiz from './components/Quiz'
// Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App
