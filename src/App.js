import Navigasi from './components/Navigasi'
import Suko from './components/Suko'
import Tempat from './components/Tempat'
import Kenalan from './components/Kenalan'
import './style/landingpage.css'
import Kotak from './components/Kotak'
import Blok from './components/Blok'
import Halaman4 from './components/Halaman4'
import Bar from './components/Bar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div className='myBG'>
        <Navigasi />
        <Suko />
      </div>
      <div className='Tempat'>
        <Tempat />
        <Kenalan />
      </div>
      <div className='Square'>
        <Kotak />
        <Blok />
      </div>
    <div className='Halaman4'>
       <Halaman4 />
       <Bar />
       <Footer />
    </div>
      </div>
      )
  }
export default App;
