import { fetchGIF, fetchPhotos, fetchVideos } from './api/mediaApi'
import './App.css'

function App() {

  return (
    <div className='h-screen text-white w-full bg-gray-950'>
      <button className='bg-green-400 px-4 py-2 m-5' onClick={async ()=> {
        const data = await fetchPhotos('panda')
        console.log(data.results);
        }}>Get Photos</button>

      <button className='bg-green-400 px-4 py-2 m-5' onClick={async ()=> {
        const data = await fetchVideos('panda')
        console.log(data.videos);
        }}>Get Videos</button>

      <button className='bg-green-400 px-4 py-2 m-5' onClick={async ()=> {
        const data = await fetchGIF('panda')
        console.log(data);
        }}>Get GIF</button>
    </div>
  )
}

export default App
