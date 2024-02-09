import { useState } from 'react'
import './App.css'
import { Section } from './components/Section'
import { Newreleases } from './components/Newreleases';
import { Footer } from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <head>
          <title>getaBit.co</title>
          <link rel="stylesheet" href="styles/genral.css" />
          <link rel="stylesheet" href="styles/header.css" />
          <link rel="stylesheet" href="styles/cover-img.css" />
          <link rel="stylesheet" href="styles/new-releases.css" />
          <link rel="stylesheet" href="styles/footer.css" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Inter:wght@100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <Section />
      <Newreleases />
      <Footer />
    </>
  )
}

export default App
