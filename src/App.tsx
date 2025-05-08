
import './App.css'
import earth from "./assets/back.webp"
import hotAir from "./assets/hovver.webp"

function App() {


  return (
    <div className='h-[100vh] bg-gray-200'>
    <div className="bg-gradient-to-t h-[78%] to-blue-400 flex flex-col from-gray-200">
      <div className=' items-center relative flex  flex-col justify-center'>
        <img src={earth} alt="" className='relative -top-[40rem] ' />
        <div className='relative left-100 bottom-220 '>
          <img src={hotAir} alt="" height={100} width={200}  />
        </div>
      
      </div>
    </div>

    <div className='pl-10 h-50  font-mono bg-gray-200  '>
      <p className='font-[500] pb-4 text-[4rem]'>Good morning, developer </p>
      <p className='text-xl font-[500] text-gray-800'>My name is Ranjit das, <span className="font-medium text-blue-500">
      I am a Full stack developer</span>,, primarily focused on building user-friendly ui and scalable systems. </p>
    </div>



        
    </div>
  )
}

export default App
