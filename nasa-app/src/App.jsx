import { useEffect, useState } from 'react'
import Main from './components/Main';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
function App() {
  const [showModal, setShowModal] = useState(false)


  function handleTouggleModel() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      console.log(NASA_KEY)
      const url = `https://api.nasa.gov/planetary/apod?api_key=?${NASA_KEY}`
      try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
      } catch (err) {
        console.log(err.message)
      }

    }
    fetchAPIData();
  }, [])
  return (
    <>
      <Main />
      {(showModal && <SideBar handleTouggleModel={handleTouggleModel} />)}
      <Footer handleTouggleModel={handleTouggleModel} />
    </>
  )
}

export default App;
