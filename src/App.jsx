import './App.css';
import { getImageUrl } from "./components/getImageUrl"


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
    <>
      <CardImage image={image} className="classImage"/>
      <h3 className = "cardSub">{cap.sub}</h3>
      <h4 className = "cardDesc">{cap.desc}</h4>
    </>
  )
}

function App() {
  

  return (
    <>
      <div>
        {/* <img src={BannerTest} alt="Community Board" /> */}
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
          className='hello'
        />
      </div>
    </>
  )
}

export default App
