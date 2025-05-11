import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Header } from './components/Header.jsx'
import { Body } from './components/Body.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div 
      className='container m-auto max-h-full h-screen max-w-full w-screen bg-gradient-to-t from-05% from-gray-800 to-indigo-900 font-mono'>
      <Header />
      <Body />
    </div>
  </StrictMode>,
)
