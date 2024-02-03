<script setup>
    import Mission from '../../assets/images/coreValue/mission.png'
    import Vision from '../../assets/images/coreValue/vision.png'

    // import Goal from '../assets/images/coreValue/goal.png'

    // Instructor picture
    import Director from '../../assets/images/director/director.jpg'
</script>

<template>
  <!-- bg-[#E0F4FF] -->
    <section class="mb-10 bg-[#E0F4FF] md:bg-white">

        <div class="max-w-[1200px] mx-auto">
            <div class="flex flex-col mx-auto items-center md:grid md:grid-cols-2 grid-cols-1">
                        <div class="flex mt-4">
                            <!-- Picture of Instructor -->
                            <div class=" md:w-6/6 md:h-5/6">
                                <img :src="Director" alt="Director" class="h-3/4 w-2/3 mx-auto rounded-lg ring-4 ring-green-500">
                          
                              <div class="text-center items-center mt-4">
                                  <h1 class="lg:text-4xl md:text-3xl text-2xl font-semibold uppercase">Dr. Amani Sokko</h1>
                                <h3 class="lg:text-xl md:text-xl text-xs mt-1 text-gray-400 mb-4">School Director</h3>
                              </div>
                            </div> 
                        </div>
                            <!-- Vsion and Mission -->
                         <div class="relative -top-2">


                            <!-- Mission -->
                            <div class="flex items-center justify-start">
                              <img :src="Mission" alt="Mission"  class="absolute mx-8 w-16 h-16">
                              <p class="lg:text-3xl md:text-2xl md:mt-8 font-semibold md:text-left mx-28 uppercase">Our Mission</p>
                            </div>

                              <p class="text-justify text-xs lg:text-xl mx-8 mt-2 mb-4">
                                To Continue Satisfying Parents And Other Education Stakeholders By Ensuring That Each Pupil Registered 
                                In Our Schools Gets Quality Education Founded On Good Ethics S That He/She Succeeds In His/Her Life As An 
                                Individual And As Citizen Of This Country And The World At Large.
                              </p>


                              <!-- Vision -->
                              <div class="flex items-center justify-start">
                                <img :src="Vision" alt="Vision"  class="absolute mx-8 w-16 h-16"> 
                                <p class="lg:text-3xl md:text-2xl md:mt-8 font-semibold md:text-left mx-28 uppercase">Our Vision</p>
                              </div>
                              <div class="relative -top-4 lg:top-2 md:top-2 ">
                                  <p class="text-justify text-xs lg:text-xl mx-8 mt-2 mb-4">
                                    To Be Among The Leading Private Schools In Tanzania That Upholds The Highest Standards Of Education And Ethics.
                                  </p>
                              </div>   

                           <div class="relative -top-4 lg:top-2 md:top-2 ">
                              <p class="lg:text-3xl md:text-2xl md:mt-8 font-semibold md:text-left mx-8 uppercase">Director's Message</p>

                              <p class="text-justify text-xs lg:text-xl mx-8 mt-2 mb-4">
                                At Safi Schools we believe that total success of our pupils depends on close and effective cooperation betweene the school,parents, 
                                the wider community and the various government education organs responsible for regulating and advancement of education. <br />

                                The concept of total success means that we strive to make a child succeed as a responsible person attaining. 
                                We believe that a pupil who scores A's in his academic subjects but who is not well mannered is useless to himself, 
                                parents and the society at large!
                              </p>
                            </div>
                         </div>
                  </div>
        </div>
      
    </section>
</template>