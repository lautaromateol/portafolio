import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <Header />
    <App />
    <Footer/>
  </React.StrictMode>,
)
