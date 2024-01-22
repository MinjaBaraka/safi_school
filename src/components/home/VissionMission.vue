<script setup>
    import Mission from '../../assets/images/coreValue/mission.png'
    import Vision from '../../assets/images/coreValue/vision.png'

    // import Goal from '../assets/images/coreValue/goal.png'

    // Instructor picture
    import Director from '../../assets/images/director.jpg'
</script>

<template>
    <section class="bg-[#E0F4FF]">

        <div class="max-w-[1200px] mx-auto">
            <div class="flex flex-col mx-auto items-center md:grid md:grid-cols-2 grid-cols-1">
              <div class="flex mt-4">
                  <!-- Picture of Instructor -->
                  <div class=" md:w-6/6 md:h-5/6">
                      <img :src="Director" alt="Director" class="h-3/4 w-2/3 mx-auto rounded-lg ring-4 ring-green-500">
                
                    <div class="text-center items-center mt-4">
                        <h1 class="lg:text-4xl md:text-3xl text-2xl font-semibold uppercase">Troy Hall</h1>
                       <h3 class="lg:text-xl md:text-xl text-xs mt-1 text-gray-400 mb-4">Head Of School</h3>
                    </div>
                  </div> 
              </div>
               <!-- Vsion and Mission -->
                       <div class="relative md:-top-12 lg:-top-36 md:w-auto md:h-full lg:w-full lg:h-4/6">


                          <!-- Mission -->
                            <div class="relative h-24 w-24 md:h-14 md:w-16  items-center lg:my-8 md:my-6 mx-8">
                       
                              <img :src="Mission" alt="Mission"  class="absolute left-4 top-4 w-16 h-16">
                            </div>

                            <p class="lg:text-3xl md:text-2xl md:mt-8 font-semibold md:text-left mx-8 uppercase">Our Mission</p>

                            <p class="text-justify text-xs lg:text-xl mx-8 mt-2 mb-4">
                              To Continue Satisfying Parents And Other Education Stakeholders By Ensuring That Each Pupil Registered 
                              In Our Schools Gets Quality Education Founded On Good Ethics S That He/She Succeeds In His/Her Life As An 
                              Individual And As Citizen Of This Country And The World At Large.                        
                        
                            </p>


                            <!-- Vision -->
                          <div class="relative h-24 w-24 md:h-14 md:w-16 items-center my-4 md:my-4 mx-8">
                              <img :src="Vision" alt="Vision"  class="absolute left-4 top-4 w-16 h-16">                    
                        </div>

                       <div class="relative -top-4 lg:top-2 md:top-2 ">
                         <p class="lg:text-3xl md:text-2xl md:mt-8 font-semibold md:text-left mx-8 uppercase">Our Vision</p>

                          <p class="text-justify text-xs lg:text-xl mx-8 mt-2 mb-4">
                             To Be Among The Leading Private Schools In Tanzania That Upholds The Highest Standards Of Education And Ethics.
                          </p>
                       </div>                  

                  </div>
                </div>
        </div>
      
    </section>
</template>