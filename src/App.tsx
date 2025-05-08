
import './App.css'
import earth from "./assets/back.webp"
import hotAir from "./assets/hovver.webp"

function App() {


  return (
    <div className='h-[100vh] font-poppins  bg-[#f6f6f8]'>
    <div className="bg-gradient-to-t h-[78%] to-blue-400 flex flex-col from-[#f6f6f8]">
      <div className=' items-center relative flex  flex-col justify-center'>
        <img src={earth} alt="" className='relative -top-[40rem] ' />
        <div className='relative left-100 bottom-220 '>
          <img src={hotAir} alt="" height={100} width={200}  />
        </div>
      
      </div>
    </div>

    <div className='pl-10 h-50  font-poppins bg-[#f6f6f8] '>
      <p className='font-[600] font-mono pb-4 text-[4rem]'>Good morning, developer </p>
      <p className='text-xl font-[500] text-gray-800'>My name is Ranjit das, <span className="font-medium text-blue-500">
      I am a Full stack developer</span>, primarily focused on building <span className='text-blue-800'>user-friendly</span> ui and scalable systems. </p>
    </div>


    <div className='relative pl-3 pt-10 bg-[#f6f6f8] flex items-center text-center'>
    <div className="  left-0 h-12 w-12 border-blue-600 border-l-2 border-t-2  rounded-tl-[80%]" style={{
      
    }}></div>

    <div className="  w-10 h-10 border-2 border-blue-500  rounded-full -top-5 relative bg-white flex items-center justify-center shadow-xl shadow-blue-200">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-7">
  <path fill-rule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
</svg>

        {/* <   className="h-4 w-4 text-blue-600" /> */}
      </div>

      <div className='-top-5 ml-3 relative font-poppins '>
      <p className='font-[600] text-[2.1rem] text-blue-500'><span className="text-gray-900">Language</span> & FramerWork</p>
      </div>


      </div>
      <div className='bg-[#f6f6f8] px-20 py-10'>
        <div className='bg-gray-50 border-1 border-gray-200 p-10 rounded-md shadow-sm'></div>
      </div>

   
    
    </div>
    
  )
}

export default App
