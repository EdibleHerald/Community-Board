import './App.css';
import { getImageUrl } from "./components/getImageUrl"
import banner from "./assets/banner.jpg"

function InsertLink({link,text}){
  return(
    <a className = "cardLink" href={link}>
      {text}
    </a>
  )
}

function CardImage({image,className}){
  return(
    
    <img 
    src = { getImageUrl(image.name,image.ext,image.fileType) }
    className = {className}
    alt = {image.alt}
    />
    
  )
}

function Card({cap,image,link}){
  return(
    <div className='card'>
      <CardImage image={image} className="cardImage"/>
      <h3 className = "cardSub">{cap.sub}</h3>
      <h4 className = "cardDesc">{cap.desc}</h4>
      <h4 className = "cardDesc"><InsertLink link = {link.url} text={link.text}  /></h4>
    </div>
  )
}

function App() {
  

  return (
    <>
      <div className="headerContainer">
        <img src={banner} alt="Community Board" /> 
        <h1>Learn Computer Science!</h1>
        <h3>Here are some resources to use to learn CS theory and practical skills</h3>
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
            sub: 'The Art of Computer Programming',
            desc: 'A \"For Life\" series of books. Explains, in depth, important concepts, algorithms, and theories in Computer Science over 5 books. Requires patience and a math background of Calc 3 and Linear Algebra if you plan to understand everything. '  
          }}
          link={{
            url:"https://github.com/manjunath5496/The-Art-of-Computer-Programming-Books?tab=readme-ov-file",
            text: "Here is Volume 1-4A as a PDF (Older edition)"
          }}
        />

        <Card
          image={{
            name: 'PragmaticProgrammer',
            alt: 'Book Cover',
            fileType: '.jpg',
            ext: 'y'
          }}
          cap={{ 
            sub: 'The Pragmatic Programmer',
            desc: 'This book is praised for the way its able to simply yet effectively explain good programming practices. It may not be as in-depth as these other books but acts as a good reference for good coding practices.'  
          }}
          link={{
            url:"https://github.com/lighthousand/books/blob/master/the-pragmatic-programmer.pdf",
            text: "First Edition PDF Here"
          }}
        />

        <Card
          image={{
            name: 'ConcreteMathematics',
            alt: 'Book Cover',
            fileType: '.png',
            ext: 'y'
          }}
          cap={{ 
            sub: 'Concrete Mathematics',
            desc: 'Knuth wrote this book as well as The Art of Computer Programming. Many concepts in TAOCP are not mathematically explored in those books. This book acts as the precursor for TAOCP or other in-depth computer science theory books.'  
          }}        
          link={{
            url:"https://seriouscomputerist.atariverse.com/media/pdf/book/Concrete%20Mathematics.pdf",
            text: "Here is a PDF of the book (2nd Edition)"
          }}  
        />

        <Card
          image={{
            name: 'ComputerOrgDesign',
            alt: 'Book Cover',
            fileType: '.jpg',
            ext: 'y'
          }}
          cap={{ 
            sub: 'Computer Organization and Design RISC-V Edition',
            desc: 'A more advanced book focused on teaching important concepts on hardware architecture and design. It uses RISC-V, an open-source instruction set architecture. Would recommend the RISC-V edition but other architectures such as ARM edition exist too '  
          }}    
          link={{
            url:"https://www.cs.sfu.ca/~ashriram/Courses/CS295/assets/books/HandP_RISCV.pdf",
            text: "First Edition PDF here"
          }}      
        />

        <Card
          image={{
            name: 'BroCode',
            alt: 'BroCode profile picture',
            fileType: '.jpg',
            ext: 'n'
          }}
          cap={{ 
            sub: 'BroCode Youtube Channel',
            desc: 'A youtuber who provides many hours long (often up to 12+ hours) worth of introductory content for programming languages, APIs, or even general CS concepts. Great introductory materials, including projects to practice skills'  
          }}   
          link={{
            url:"https://www.youtube.com/@BroCodez/featured",
            text: "Youtube Channel link here"
          }}       
        />

        <Card
          image={{
            name: 'Top',
            alt: 'The Odin Project Logo',
            fileType: '.png',
            ext: 'y'
          }}
          cap={{ 
            sub: 'The Odin Project (TOP)',
            desc: 'TOP is an open-source project aiming at providing a curriculum for users wanting to be full-stack Javascript/Ruby on Rails developers with NO previous knowledge. Curriculum starts at HTML and provides many projects to apply skills. Highly Recommended for new, aspiring web developers'  
          }}   
          link={{
            url:"https://www.theodinproject.com/",
            text: "Main webpage here"
          }}       
        />

        <Card
          image={{
            name: 'CODEPetzold',
            alt: 'Cover of the book\'s first edition',
            fileType: '.jpg',
            ext: 'y'
          }}
          cap={{ 
            sub: 'Code: The Hidden Language of Computer Hardware and Software',
            desc: 'Great beginner book for those interested in computer architecture. Author assumes you have no previous knowledge. I personally combined with \"NAND 2 Tetris\"'  
          }}   
          link={{
            url:"https://bobcarp.wordpress.com/wp-content/uploads/2014/07/code-charles-petzold.pdf",
            text: "1st Edition PDF here"
          }}       
        />

        <Card
          image={{
            name: 'ElementsComputingSystem',
            alt: 'Image of book cover',
            fileType: '.jpg',
            ext: 'y'
          }}
          cap={{ 
            sub: 'The Elements of Computing Systems: Building a Modern Computer from First Principles',
            desc: 'Also a great read for learning computer architecture. This book is often paired with the online course \"NAND 2 Tetris\" on Cousera. Would recommend doing both at the same time if you can.'  
          }}      
          link={{
            url:"https://www.nand2tetris.org",
            text: "Main website for both the book and the course"
          }}    
        />

        <Card
          image={{
            name: 'LeetCode',
            alt: 'Leetcode Logo',
            fileType: '.png',
            ext: 'y'
          }}
          cap={{ 
            sub: 'LeetCode',
            desc: 'Leading website for practice questions to learn important algorithms/concepts for technical interviews. Something worth doing in your free time even if you don\'t know much, just to get familiar.'  
          }}          
          link={{
            url:"https://leetcode.com/",
            text: "Main webpage here"
          }}
        />

        <Card
          image={{
            name: 'HackerRank',
            alt: 'HackerRank Logo',
            fileType: '.png',
            ext: 'y'
          }}
          cap={{ 
            sub: 'HackerRank',
            desc: 'Similar to leetcode but is more focused on broader skills, used by employers, and is beginner friendly. Would highly recommend using HackerRank for broadening skills alongside Leetcode.'  
          }}      
          link={{
            url:"https://www.hackerrank.com/",
            text: "Main webpage here"
          }}    
        />
      </div>
    </>
  )
}

export default App
