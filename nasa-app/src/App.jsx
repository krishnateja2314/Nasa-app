import { useEffect, useState } from 'react'
import Main from './components/Main';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
function App() {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)

  function handleTouggleModel() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localkey = `NASA-${today}`
      if (localStorage.getItem(localkey)) {
        const apiData = JSON.parse(localStorage.getItem(localkey))
        setData(apiData)
        console.log('fetched from cache today')
        return
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apidata = await res.json()
        localStorage.setItem(localkey, JSON.stringify(apidata))
        console.log('fetched from api today')
        setData(apidata)
      } catch (err) {
        console.log(err.message)
      }

    }
    fetchAPIData();
  }, [])
  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className='loadingState'>
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {(showModal && <SideBar data={data} handleTouggleModel={handleTouggleModel} />)}
      {data && <Footer showModal={showModal} data={data} handleTouggleModel={handleTouggleModel} />}
    </>
  )
}

export default App;
