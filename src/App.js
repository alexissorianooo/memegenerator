import React from 'react'
import Navbar from './components/Navbar'
import Meme from './components/Meme'

function App() {
  
  const [fetchedMeme, setFetchedMeme] = React.useState(null) // to save all fetched meme

  const [meme, setMeme] = React.useState({
    memeUrl: '',
    memeName: '',
  })

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(fetchedData => setFetchedMeme(fetchedData))
  },[])


  function handleClick(){
    let index = Math.floor(Math.random() * 100)
    setMeme(prevState => {
      return {
        ...prevState,
        memeUrl: fetchedMeme.data.memes[index].url,
        memeName: fetchedMeme.data.memes[index].name
      }
    })
  }
  
  return (
    <div>
      <Navbar />
      <button onClick={handleClick}>Generate Meme</button>
      <Meme 
        memeSource={meme.memeUrl}
        memeName={meme.memeName}
      />
    </div>
  );
}

export default App;
