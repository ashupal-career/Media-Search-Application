import SearchBar from './components/SearchBar'
import './App.css'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

function App() {

  return (
    <div className='h-screen text-white w-full bg-gray-950'>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default App
