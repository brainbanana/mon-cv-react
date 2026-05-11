import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Mentions from './pages/Mentions'
import Blog from './pages/Blog'
import Realisations from './pages/Realisations'
import Services from './pages/Services'
import './styles/global.css'

function App() {
  const author = "Sacristain David";

  return (
    <BrowserRouter>

      <Header />   
      <Navbar />

      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home auteur={author} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mentions />} />
        </Routes>
      </main>
     
      <Footer />

    </BrowserRouter>
  )
}

export default App
