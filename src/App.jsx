import './App.css'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import Boot from './components/2-boot/Boot'

import { useEffect, useState } from 'react'

function App() {
      window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                  setscrollBtn(true)

            } else {
                  setscrollBtn(false)

            };
      }, []);
      const [scrollBtn, setscrollBtn] = useState(false)
      
      return (
            <div className='container' id='up'>
                  <Header />
                  <Hero />
                  <div className='border' />
                  <Boot className="" />
                  <Main />
                  <Contact />
                  <div className='border' />
                  <Footer />
                  <a style={{ opacity: scrollBtn ? 1 : 0, transition: "2s" }} href="#up">
                        <button className='icon-keyboard_arrow_up scrool'>
                        </button>
                  </a>
            </div>
      )
}

export default App;

