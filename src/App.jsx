import './App.css';
import { getImageUrl } from "./components/getImageUrl"
import banner from "./assets/banner.jpg"


function CardImage({image,className}){
  return(
    
    <img 
    src = { getImageUrl(image.name,image.ext,image.fileType) }
    className = {className}
    alt = "mytext"
    />
    
  )
}

function Card({cap,image}){
  return(
    <div className='card'>
      <CardImage image={image} className="cardImage"/>
      <h3 className = "cardSub">{cap.sub}</h3>
      <h4 className = "cardDesc">{cap.desc}</h4>
    </div>
  )
}

function App() {
  

  return (
    <>
      <div className="headerContainer">
        <img src={banner} alt="Community Board" /> 
        <h1>Community Board</h1>
      </div>

      <div className="boardContainer">
        <Card
          image={{
            name: 'ArtOfComputerProgramming',
            alt: 'photo of a code editor open on a device',
            fileType: '.svg',
            ext: 'n'
          }}
          cap={{ 
            sub: 'Hello world',
            desc: 'Also hello world'  
          }}
        />

        <Card
          image={{
            name: 'ArtOfComputerProgramming',
            alt: 'photo of a code editor open on a device',
            fileType: '.svg',
            ext: 'n'
          }}
          cap={{ 
            sub: 'Hello world',
            desc: 'Also hello world'  
          }}
        />

        <Card
          image={{
            name: 'ArtOfComputerProgramming',
            alt: 'photo of a code editor open on a device',
            fileType: '.svg',
            ext: 'n'
          }}
          cap={{ 
            sub: 'Hello world',
            desc: 'Also hello world'  
          }}
        />
      </div>
    </>
  )
}

export default App
