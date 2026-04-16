import { fetchPhotos } from './api/mediaApi'
import './App.css'

function App() {

  return (
    <div className='h-screen text-white w-full bg-gray-950'>
      <button onClick={()=> {fetchPhotos('cat')}}>Get Photos</button>
    </div>
  )
}

export default App
