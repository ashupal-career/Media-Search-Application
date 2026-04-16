import { fetchPhotos, fetchVideos } from './api/mediaApi'
import './App.css'

function App() {

  return (
    <div className='h-screen text-white w-full bg-gray-950'>
      <button onClick={async ()=> {
        const data = await fetchPhotos('panda')
        console.log(data.results);
        }}>Get Photos</button>

      <button onClick={async ()=> {
        const data = await fetchVideos('panda')
        console.log(data.videos);
        }}>Get Videos</button>
    </div>
  )
}

export default App
