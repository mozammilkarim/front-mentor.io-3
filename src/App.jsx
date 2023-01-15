
import { useState } from 'react'
import Footer from './Components/Footer'
import GalleryComponent from './Components/GalleryComponent'
import Location from './Components/Location'
import PrimaryButton from './Components/PrimaryButton'
import SecondaryButton from './Components/SecondaryButton'
import TopSection from './Components/TopSection'

function App() {
  const [url, setUrl] = useState(window.location.pathname)
  console.log("url", url)
  if (url.split("/")[1] === 'location') {
    return <Location />
  }


  return (
    <>

      <TopSection />
      <Footer />

    </>
  )


}

export default App
