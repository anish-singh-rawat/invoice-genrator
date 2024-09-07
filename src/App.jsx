import { useState } from 'react'
import './App.css'
import Home from './pages/home'


const App = () => {
  const [showPreview, setShowPreview] = useState(false)


  return (
    <div>
      <div className="buttonGroup">
        <div className='prevEditBtn'>
          <button className='Btn' onClick={() => setShowPreview(true)}>Preview</button>
          <button className='Btn' onClick={() => setShowPreview(false)}>Edit</button>
        </div>
      </div>
      <Home showPreview={showPreview} />
    </div>
  )
}

export default App
