<template>
    <!-- This is my Presentation Components 
     <span class="font-bold">(this is a reusable components)</span> -->
     
    <div class=" relative container flex  flex-col md:mx-auto mb-5">

        <!-- What we offer -->
            <div class="flex justify-center items-center">
        <div class="relative md:mx-auto max-w-screen-md text-center p-6 ">
        <small class="text-gray-500 text-xs uppercase mx-auto">Why we choose us</small>
        <p class="font-semibold text-xl md:text-2xl text-justify mb-4">Learn New Skills When And <br/>
        </p>
        <span class="font-semibold text-xl md:text-2xl">Where you like</span> 
        </div>
        </div>


        <!-- 4 grid -->
        <div class=" mx-auto flex flex-col md:grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-10 space-y-2">

            <!-- Grid 1 -->
             <div class=" shadow-md w-auto h-auto  rounded-md cursor-pointer">

                  <div class="relative bg-blue-500 h-24 w-24  items-center my-8 mx-8 rounded-t-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute left-4 top-4 w-16 h-16 stroke-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                      
                  </div>

                  <p class="text-xl font-semibold md:text-left mx-8">Expert Leader</p>

                  <p class="text-justify text-xs mx-8 mt-2 mb-4">
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                  </p>

                  <div class="container flex gap-4 mx-8 mb-6 items-center hover:text-blue-500 cursor-pointer lg:w-auto w-32">
                    <p class="text-xs font-semibold">Learn More</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                  </div>
                   
                </div>

            <!-- Grid 2 -->
             <div class=" shadow-md w-auto h-auto rounded-md cursor-pointer">

              <div class="relative bg-amber-500 h-24 w-24  items-center my-8 mx-8 rounded-t-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  class="absolute left-4 top-4 w-16 h-16 stroke-white"><path d="M17 15.2454V22.1169C17 22.393 16.7761 22.617 16.5 22.617C16.4094 22.617 16.3205 22.5923 16.2428 22.5457L12 20L7.75725 22.5457C7.52046 22.6877 7.21333 22.6109 7.07125 22.3742C7.02463 22.2964 7 22.2075 7 22.1169V15.2454C5.17107 13.7793 4 11.5264 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5264 18.8289 13.7793 17 15.2454ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15ZM12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13Z"></path></svg>                    
              </div>

              <p class="text-xl font-semibold md:text-left mx-8">Award Certificate</p>

              <p class="text-justify text-xs mx-8 mt-2 mb-4">
                Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
              </p>

              <div class="container flex gap-4 mx-8 mb-6 items-center hover:text-amber-500 cursor-pointer md:w-auto w-32">
                <p class="text-xs font-semibold">Learn More</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                

              </div>
                   
            </div>


                <!-- Grid 3 -->            
                 <div class=" shadow-md w-auto h-auto rounded-md cursor-pointer">

                  <div class="relative bg-stone-500 h-24 w-24  items-center my-8 mx-8 rounded-t-full">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute left-4 top-4 w-16 h-16 stroke-white"><path d="M5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434ZM3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 13.5L9.06107 15.0451L9.62236 11.7725L7.24472 9.45492L10.5305 8.97746L12 6L13.4695 8.97746L16.7553 9.45492L14.3776 11.7725L14.9389 15.0451L12 13.5Z"></path></svg>
                  </div>

                  <p class="text-xl font-semibold md:text-left mx-8">Safety</p>

                  <p class="text-justify text-xs mx-8 mt-2 mb-4">
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                  </p>

                  <div class="container flex gap-4 mx-8 mb-6 items-center hover:text-stone-500 cursor-pointer md:w-auto w-32">
                    <p class="text-xs font-semibold">Learn More</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                  </div>
                   
                </div>

                 <!-- Grid 4 -->
                 <div class=" shadow-md w-auto h-auto rounded-md cursor-pointer">

                  <div class="relative bg-red-500 h-24 w-24  items-center my-8 mx-8 rounded-t-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute left-4 top-4 w-16 h-16 stroke-white">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                        </svg>
                  </div>

                  <p class="text-xl font-semibold md:text-left mx-8">Fun Activity</p>

                  <p class="text-justify text-xs mx-8 mt-2 mb-4">
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                  </p>

                  <div class="container flex gap-4 mx-8 mb-6 items-center hover:text-red-500 cursor-pointer md:w-auto w-32">
                    <p class="text-xs font-semibold">Learn More</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                  </div>
                   
                </div>

        </div>
        
        
    </div>
    
</template>