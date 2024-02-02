<script setup>
 
 import Logo from '../../assets/images/logo/logo.png'
 

 const menu = [
    { title: 'Home', link: '/'  },

    { title: 'About us',  link: '/aboutUs'  },

    { title: 'Academic', link: '/academic' },

    { title: 'Calendar', link: '/calendary' },

    { title: 'Gallery', link: '/gallery' },    

    { title: 'News', link: '/blogsNews' },
    
    { title: 'Contact', link: '/contact' },
    
    //   {
    //     title: 'Search',
    //     link: ''
    // },
 ]

//   const  openLink  = (link) => {
//     window.open(link)
//   }
</script>

<template>
    <header class="sticky top-0 z-50 text-white bg-[#242F51]">
        <nav class=" container mx-auto flex items-center justify-between h-full">
            <!-- School Logo -->
            <img :src="Logo" alt="School Logo" class="md:w-32 w-24 mt-2">

            <!-- Menu -->
            <div class="hidden xl:flex space-x-8">
                <!-- <p v-for="option, optionIndex in menu" :key="optionIndex" @click="openLink(option.link)" class="cursor-pointer hover:text-amber-500 hover:underline hover:decoration-amber-500">
                    {{ option.title }}
                </p> -->

                <router-link v-for="option, optionIndex in menu" :key="optionIndex"  :to="option.link"  class="cursor-pointer hover:text-amber-500 hover:underline hover:decoration-amber-500 ease-in duration-200">
                    {{ option.title }}
                </router-link>
            </div>

            <!-- Apply Now Button -->
           <div class=" hidden xl:block flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ease-in duration-200">
                        Enroll Now
                    </a>
            </div>

            <!-- HeroIcon Menu -->
            <div class="block xl:hidden focus:outline-none  right-8">
                <a href="" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-12 h-12 stroke-amber-500 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                </a>
            </div>

                <!-- Mobile Menu -->
                <!-- <div class="md:hidden">
                <div class="absolute flex flex-col items-center self-end py-8 mt-10 
                        space-y-8 font-bold bg-white sm:w-auto sm:self-center 
                        left-6 right-6 top-8 drop-shadow-sm">

                    <p v-for="option, optionIndex in menu" :key="optionIndex" @click="openLink(option.link)" class="cursor-pointer hover:text-amber-500">
                                {{ option.title }}
                            </p>
                </div>
            </div> -->
        </nav>


    </header>
</template>