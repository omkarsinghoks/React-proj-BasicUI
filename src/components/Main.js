import React from 'react'
import shop from '../Images/shops.png';
import shoes from '../Images/shoe_image.png'

const Main = () => {
  return (
    <main className='main-section'>

    <div className='text-section' >

     <div className='bigger-text'>
      YOUR FEET 
       DESERVE
       THE BEST
     </div>

     <div className='text-lower'>

     <div className='text-dushra'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</div>


     <div className='dushra-btn'>
      <button className='btn'>SHOP NOW</button>
      <button>CATEGORY</button>
     </div>

     <div className='small-para'>
      Also Available on
     </div>

     <div>
       <img src={shop}>

       </img>
     </div>

     </div>

     
    </div>

    {/*  dushra waala box yha se shuri hai jisme kewal images hai  */}

    <div className='shoes-img'>
       <img src={shoes}></img>
    </div>
    </main>
  )
}

export default Main