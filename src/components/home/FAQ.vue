<script setup>
    import Director from '../../assets/images/director.jpg'

    const faqMenu = [
      {
        title: 'Troy Hall',
        subTitle: 'Head Of School',
        imageUrl: Director
      },

      {
        title: 'Troy Hall',
        subTitle: 'Head Of School',
        imageUrl: Director
      },


      {
        title: 'Troy Hall',
        subTitle: 'Head Of School',
        imageUrl: Director
      },   


      {
        title: 'Troy Hall',
        subTitle: 'Head Of School',
        imageUrl: Director
      },   
    ]
</script>

<template>
    <section class="  container flex  flex-col md:mx-auto ">
        
    
              <!-- Why safi school -->
                <div class="flex justify-center items-center">
                <div class="relative md:mx-auto max-w-screen-md text-center p-6 ">
                <small class="text-gray-500 text-xs uppercase mx-auto">faq question</small>
                <p class="font-semibold text-xl md:text-2xl lg:text-3xl text-justify mb-4">Frequently asked questions

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="relative left-full -top-8 w-18 h-10 text-green-500">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>

                </p>
                
                <!-- <span class="font-semibold text-xl md:text-2xl">to get started</span>  -->
                </div>
                </div>


                
                  <!-- 4 grid -->
                  <div class=" mx-auto flex flex-col md:grid lg:grid-cols-4 md:grid-cols-2 lg:gap-20 md:gap-8 mb-10 space-y-4">

                      <!-- Grid 1 -->
                       <div class="relative md:w-64 md:h-80 cursor-pointer" v-for="object, objectIndex in faqMenu" :key="objectIndex">

                            <div class="relative h-44 w-44  items-center my-8 mx-8 rounded-t-full">
                       
                              <img :src="object.imageUrl" alt="Director"  class="absolute left-4 ring-4 ring-green-500 w-full h-full rounded-full">
                            </div>

                           <div class="text-center items-center">
                               <h1 class="text-xl font-semibold uppercase">{{object.title}}</h1>

                                <h3 class=" text-xs mt-1 text-gray-400">{{object.subTitle}}</h3>
                           </div>

                          </div>

                      

                  </div>        
        
            <!-- <StatsCards /> -->
    </section>
</template>