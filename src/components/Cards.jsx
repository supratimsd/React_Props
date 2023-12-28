import React from 'react'

const Cards=({name,btnText="click me"})=>{
  console.log(name)
  return (
    
    <div class="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://images.pexels.com/photos/18506230/pexels-photo-18506230/free-photo-of-a-hummingbird-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left">
      <h1 class="text-lg font-semibold text-white">Delba</h1>
      <p class="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
        {btnText} →
      </button>
    </div>
  </div>
    
  )
}

export default Cards
