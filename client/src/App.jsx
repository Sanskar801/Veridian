import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import AdminPanel from './pages/AdminPanel'

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  )
}

export default App