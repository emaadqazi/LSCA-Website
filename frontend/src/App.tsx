import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Title3Page from './pages/Title3Page'
import Title4Page from './pages/Title4Page'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/title3" element={<Title3Page />} />
            <Route path="/title4" element={<Title4Page />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
