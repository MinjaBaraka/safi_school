<template>
    <!-- This is my Presentation Components 
     <span class="font-bold">(this is a reusable components)</span> -->
     
    <div class=" relative container flex  flex-col md:mx-auto mt-5 bg-gradient-to-tr">

        <!-- What we offer -->
            <div class="flex justify-center items-center">
        <div class="relative md:mx-auto max-w-screen-md text-center p-6 ">
        <small class="text-gray-500 text-xs uppercase mx-auto">What we offer</small>
        <p class="font-semibold text-xl md:text-2xl text-justify mb-4">Learn New Skills When And <br/>
        </p>
        <span class="font-semibold text-xl md:text-2xl">Where you like</span> 
        </div>
        </div>


        <!-- 4 grid -->
        <div class=" mx-auto flex flex-col md:grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-10 space-y-2">

            <!-- Grid 1 -->
             <div class=" shadow-md w-auto h-auto  rounded-md cursor-pointer">

                  <div class="relative bg-blue-400 h-24 w-24  items-center my-8 mx-8 rounded-t-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="absolute left-4 top-4 w-16 h-16 stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                      
                  </div>

                  <p class="text-xl font-semibold md:text-left mx-8">Expert Instruction</p>

                  <p class="text-justify text-xs mx-8 mt-2 mb-4">
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                  </p>

                  <div class="container flex gap-4 mx-8 mb-6 items-center hover:text-blue-400 cursor-pointer lg:w-auto w-32">
                    <p class="text-xs font-semibold">Learn More</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                  </div>
                   
                </div>

            <!-- Grid 2 -->
             <div class=" shadow-md w-auto h-auto rounded-md cursor-pointer">

              <div class="relative bg-amber-100 h-24 w-24  items-center my-8 mx-8 rounded-t-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="absolute left-4 top-4 w-16 h-16 stroke-amber-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    
              </div>

              <p class="text-xl font-semibold md:text-left mx-8">Video Tutorial</p>

              <p class="text-justify text-xs mx-8 mt-2 mb-4">
                Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
              </p>

              <div class="container flex gap-4 mx-8 mb-6 items-center hover:text-amber-400 cursor-pointer md:w-auto w-32">
                <p class="text-xs font-semibold">Learn More</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

              </div>
                   
            </div>


                <!-- Grid 3 -->            
                 <div class=" shadow-md w-auto h-auto rounded-md cursor-pointer">

                  <div class="relative bg-blue-200 h-24 w-24  items-center my-8 mx-8 rounded-t-full">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="absolute left-4 top-4 w-16 h-16 stroke-blue-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>

                  <p class="text-xl font-semibold md:text-left mx-8">Lifetime Access</p>

                  <p class="text-justify text-xs mx-8 mt-2 mb-4">
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                  </p>

                  <div class="container flex gap-4 mx-8 mb-6 items-center hover:text-blue-300 cursor-pointer md:w-auto w-32">
                    <p class="text-xs font-semibold">Learn More</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                  </div>
                   
                </div>

                 <!-- Grid 4 -->
                 <div class=" shadow-md w-auto h-auto rounded-md cursor-pointer">

                  <div class="relative bg-red-100 h-24 w-24  items-center my-8 mx-8 rounded-t-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="absolute left-4 top-4 w-16 h-16 stroke-red-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                  </div>

                  <p class="text-xl font-semibold md:text-left mx-8">Learn From Anywhere</p>

                  <p class="text-justify text-xs mx-8 mt-2 mb-4">
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                    Vision Statement: "Empowering the Next Generation through Technology, Innovation, and Capital at Safi Primary School. 
                  </p>

                  <div class="container flex gap-4 mx-8 mb-6 items-center hover:text-red-400 cursor-pointer md:w-auto w-32">
                    <p class="text-xs font-semibold">Learn More</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                  </div>
                   
                </div>

        </div>
        
        
    </div>
    
</template>