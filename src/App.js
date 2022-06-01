import React from 'react'
import Navbar from './components/Navbar'
import Meme from './components/Meme'

function App() {
  
  const [fetchedMeme, setFetchedMeme] = React.useState(null) // to save all fetched meme

  const [meme, setMeme] = React.useState({
    memeUrl: '',
    memeName: '',
    topText: '',
    bottomText: ''
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
  
  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (

    <>
    <Navbar />
      <div className='flex flex-col justify-center items-center w-screen' > 
        <div className="flex md:flex-row flex-col justify-center items-center my-2 md:my-9 w-full">
          <div className="flex flex-col m-2">
            <label htmlFor="topText" className='lbl'>Top Text</label>
            <input 
              className='border-2 md:text-xl'
              type="text" 
              name="topText"
              onChange={handleChange}
              value={meme.topText}
            />
          </div>
          <div className="flex flex-col m-2 md:mr-10 mb-4 md:mb-2">
            <label htmlFor="bottomText" className='lbl'>Bottom Text</label>
            <input 
              className='border-2 md:text-xl'
              type="text" 
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </div> 
          {/* text-transparent bg-clip-text (IF I WANT TO CHANGE THIS TO COLORED TEXT)*/}
          <button onClick={handleClick} className='btn bg-gradient-to-r from-purple-400 to-pink-600 hover:btn-bg transition-all ease-linear'>Generate Meme</button>
        </div>

        <div className='w-full'>
          <Meme 
            memeSource={meme.memeUrl}
            memeName={meme.memeName}
            memetop={meme.topText}
            memebottom={meme.bottomText}
          />
        </div>

      </div>
    </>
  );
}

export default App;
