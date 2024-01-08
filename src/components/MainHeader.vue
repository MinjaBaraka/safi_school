<script setup>
    import MainImage from '../assets/images/first.jpg'
</script>

<template>
    <div class="  relative bg-center bg-no-repeat bg-cover md:w-auto lg:w-full lg:h-screen" :style="{ backgroundImage: `url(${MainImage})` }">
       
            <!-- <div class="absolute inset-0 bg-gray-800 bg-opacity-45"></div>     -->
        
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 class="mb-4 text-4xl lg:text-8xl font-bold uppercase text-white text-center bg-clip-text text-transparent bg-gradient-to-br from-amber-400 to-orange-300">Safi School</h1>
                <p class="mb- text-lg font-normal text-white text-center lg:text-xl sm:px-16 lg:px-48">
                        Where Success Starts and Nurtured
                </p>
              </div>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 mb-40 text-base font-medium text-center text-white rounded-lg bg-amber-400 hover:bg-amber-500 focus:ring-4">
                        Get started
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
          
    </div>
</template>