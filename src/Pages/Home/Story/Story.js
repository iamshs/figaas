import React from 'react';
import burger from '../../../assets/burger.jpg'

const Story = () => {
    return (
        <div class="hero  lg:my-24 my-20">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={burger} class="max-w-sm  mb-16 lg:mb-0 shadow-2xl" alt='' />
    <div className='max-w-xl'>
      <h1 class="text-5xl font-bold">About Our Story</h1>
      <p class="py-6">Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <button class="btn btn-primary mb-16 mt-6 btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-zinc-900 border-0 text-white ">
            VIEW FULL MENU
        </button>
    </div>
  </div>
</div>
    );
};

export default Story;