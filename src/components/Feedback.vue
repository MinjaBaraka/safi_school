<script setup>
    import FeedBack1 from '../assets/images/feedBack/feedback1.jpg'
    import FeedBack2 from '../assets/images/feedBack/feedback2.jpg'
    import FeedBack3 from '../assets/images/feedBack/feedback3.jpg'
    import Testimonial from '../assets/images/feedBack/testimonial.png'
</script>

<template>
    <div class="relative container flex flex-col mx-auto md:grid grid-cols-2 mb-24 ">
        
          <!-- FeedBack Message -->
            <div class="rounded-lg mb-8">
                <div class="mx-3 ">
                    <h4 class="uppercase text-gray-500 font-serif mt-2">Testimonial</h4>
                    <h1 class="text-4xl mt-2 font-semibold">Our Parents <span class="text-green-500 font-bold">Feedback.</span></h1>

                    <div class=" mt-10 ">
                        <svg
             xmlns="http://www.w3.org/2000/svg"
             
             class="inline-block h-10 w-10 pr-2 fill-current text-green-600"
             viewBox="0 0 24 24">
             <path
               d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
           </svg>
                        <p class="text-justify text-gray-400 lg:text-left">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Safi Schools we believe that total success of our pupils depends on close and effective
                            cooperation between the school, parent, the wider community and the various government eduction organs
                            responsible for regulating and advancement of education...
                        </p>

                    </div>

                    <div class="mt-10">
                         <div class="text-left items-center">
                                 <h1 class="lg:text-3xl text-2xl  font-semibold uppercase">Troy Hall</h1>

                                  <h3 class="text-xs mt-1 text-gray-400">Head Of School</h3>
                             </div>
                    </div>
                </div>

                <!-- List Of User Feedback -->

                <div class="container flex flex-row md:h-32 md:w-32 h-24 w-24 mx-2 md:mx-0 ring-4 ring-green-500 mt-10 md:space-x-10 space-x-8 items-center rounded-full cursor-pointer">
                    <img :src="FeedBack1" alt="FeedBack1" class="ml-2 rounded-full md:h-28 md:w-28 h-20 w-20">

                    
                    <img :src="FeedBack2" alt="FeedBack2" class="rounded-full ring-2 ring-green-400 md:h-24 md:w-24 h-20 w-20 ">

                    <img :src="FeedBack3" alt="FeedBack3" class="rounded-full ring-2 ring-green-400 md:h-24 md:w-24 h-20 w-20 ">
                    
                </div>
            </div>

            <!-- Picture User Feedback -->

              <img :src="Testimonial" alt="Testimonial" class="relative top-6 left-2 hidden md:flex rounded-lg lg:h-full lg:w-full  md:h-/6">
        </div>
</template>