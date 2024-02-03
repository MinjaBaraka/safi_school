<script setup>
    import Manager from '../../assets/images/management/manager.png'
    import AcademicTeacher from '../../assets/images/management/academic_teacher.png'
    import HeadTeacher from '../../assets/images/management/head_teacher.jpg'

    const faqMenu = [
      {
        title: 'Mr. Paul Eugene Assey',
        subTitle: 'School Manager',
        imageUrl: Manager
      },

      {
        title: 'Mr. Joseph Myegeta',
        subTitle: 'Head Teacher',
        imageUrl: AcademicTeacher
      },


      {
        title: 'Zakhia George',
        subTitle: 'Academic Teacher',
        imageUrl: HeadTeacher
      },

    ]
</script>

<template>
    <section class="  container flex  flex-col md:mx-auto ">
        
    
              <!-- Why safi school -->
                <div class="flex justify-center items-center">
                <div class="relative md:mx-auto max-w-screen-md text-center p-6 ">
                    <small class="text-gray-500 text-xs uppercase mx-auto">Instructor</small>
                    <p class="font-semibold text-xl md:text-2xl lg:text-3xl text-justify">Management Team</p>
                </div>
                </div>

                  <!-- 4 grid -->
                  <div class=" mx-auto flex flex-col md:grid md:grid-cols-3 lg:gap-20 md:gap-8 mb-10 space-y-4">

                      <!-- Grid 1 -->
                  <div class="relative md:w-64 md:h-80 cursor-pointer" v-for="object, objectIndex in faqMenu" :key="objectIndex">

                      <div class=" h-48 w-48  items-center my-8 mx-8 rounded-t-full">                       
                          <img :src="object.imageUrl" alt="Director"  class=" ring-4 ring-green-500 w-full h-full rounded-full object-cover">
                      </div>

                      <div class="text-center items-center">
                          <h1 class="text-xl font-semibold capitalize">{{object.title}}</h1>

                          <h3 class=" text-xs mt-1 text-gray-400">{{object.subTitle}}</h3>
                      </div>

                  </div>

                      

                  </div>        
        
            <!-- <StatsCards /> -->
    </section>
</template>