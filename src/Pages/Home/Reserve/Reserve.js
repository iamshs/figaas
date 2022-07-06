import React from "react";
import './Reserve.css'

const Reserve = () => {
  return (
    <div class="hero min-h-screen bg-reserve">
  <div class="hero-content flex-col lg:flex-row-reverse">
    
    <div class=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-zinc-100">
      <div class="card-body py-20 ">
        <div class="form-control">
          
          <input type="text" placeholder="Your Name" class="input input-bordered rounded-none" />
        </div>
        <div class="form-control">
          
          <input type="text" placeholder="Your Email" class="input input-bordered rounded-none" />
        </div>
        <div class="form-control">
          
          <input type="text" placeholder="Phone Number" class="input input-bordered rounded-none" />
        </div>
        <div class="form-control">
          
          <input type="text" placeholder="Select Date and Time" class="input input-bordered rounded-none" />
        </div>
        <div class="form-control">
          
          <input type="text" placeholder="Select Event" class="input input-bordered rounded-none" />
         
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary rounded-none text-base-100">Make Reservation</button>
        </div>
      </div>
    </div>
    <div class="text-center text-zinc-50 max-w-xl lg:text-left">
      <h1 class="text-4xl  font-bold">Reserve Your Seats to Confirm if You Come with Your Family</h1>
      <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
    </div>
  </div>
</div>
  );
};

export default Reserve;
