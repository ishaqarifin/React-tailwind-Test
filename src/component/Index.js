import React from 'react'

export default function Index() {
  return (
   <div>
     <button
      className="text-white w-24 m-16 bg-amber-900 active:bg-orange-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      // onClick={handleClose}
    >
      Submit
    </button>

    <form className="flex bg-slate-100 pt-6 pb-8 p-24 justify-between">
      <div className='flex-col'>
        <div className='mb-2'>Product Name</div>
        <input 
          value='Product 1'
          className="shadow bg-amber-100 border-2 border-orange-900 rounded py-2 px-1" 
          />
      </div>
      <div className='flex-col'>
        <div className='mb-2'>Product Price</div>
        <input 
          value='10000'
          className="shadow bg-amber-100 border-2 border-orange-900 rounded py-2 px-1" 
          />
      </div>
      <div className='flex-col'>
        <div className='mb-2'>Qty</div>
        <input 
          value='2'
          className="shadow bg-amber-100 border-2 border-orange-900 rounded py-2 px-1" 
          />
      </div>
      <div className='flex-col'>
        <div className='mb-2'>Total</div>
        <input 
          value='150000'
          className="shadow bg-amber-100 border-2 border-orange-900 rounded py-2 px-1" 
          />
      </div>
    </form>
    {/* <button
      className="text-white w-full bg-amber-900 active:bg-orange-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      // onClick={handleClose}
    >
      Submit
    </button> */}
   </div>
  )
}
