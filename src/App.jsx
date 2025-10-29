import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Work from './pages/Work'
import Blogs from './pages/Blogs'
import ContactPage from './pages/ContactPage'
import Layout from './components/layout/Layout'

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App