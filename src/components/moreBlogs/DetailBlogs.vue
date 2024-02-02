<script setup>

import BlogsNews1 from '../../assets/images/weten/DSC_0079.jpg'
import BlogsNews2 from '../../assets/images/weten/DSC_0085.jpg'
import BlogsNews3 from '../../assets/images/weten/DSC_0096.jpg'

import BlogsNews4 from '../../assets/images/weten/DSC_0096.jpg'
import BlogsNews5 from '../../assets/images/weten/DSC_0113.jpg'
import BlogsNews6 from '../../assets/images/weten/DSC_0117.jpg'

// import BlogsNews7 from '../../assets/images/weten/DSC_0121.jpg'
// import BlogsNews8 from '../../assets/images/weten/DSC_0129.jpg'
// import BlogsNews9 from '../../assets/images/weten/DSC_0143.jpg'

// import BlogsNews10 from '../../assets/images/weten/DSC_0145.jpg'
// import BlogsNews11 from '../../assets/images/weten/DSC_0151.jpg'
// import BlogsNews12 from '../../assets/images/weten/DSC_0161.jpg'



const blogsNews = [
    {

        title: 'Wet N Wild Picnic',
        subTitle: 'After The Long Jorney Of Academic Year 2023, Baby Class To Grade Two Decided To Go At Wet N Wild Picnic For Refreshment. Click View More For More Information And Pictures ',
        pictureEvent: BlogsNews1,
        titleDate: '04 Dec 2024',

    },

    {

        title: 'Saadani Tour',
        subTitle: 'After The Long Jorney Of Academic Year 2023, Grade Three To Grade Six Took A Tour Of Two Days At Saadani For Refreshment.Click View More For More Information And Pictures. ',
        pictureEvent: BlogsNews2,
        titleDate: '04 - 05 Dec 2023 ',

    },


    {

        title: 'School Exhibition',
        subTitle: 'It Held At Safina Hall At Safi Schools Where All Classes Participate On Showing Diferrent Activities That They Have Been Learn In The Whole Year 2023. Click View More For More Information, Short Video And Pictures',
        pictureEvent: BlogsNews3,
        titleDate: '24 Nov 2023',

    },

    {

        title: 'Wet N Wild Picnic',
        subTitle: 'After The Long Jorney Of Academic Year 2023, Baby Class To Grade Two Decided To Go At Wet N Wild Picnic For Refreshment. Click View More For More Information And Pictures ',
        pictureEvent: BlogsNews4,
        titleDate: '04 Dec 2024',

    },

    {

        title: 'Saadani Tour',
        subTitle: 'After The Long Jorney Of Academic Year 2023, Grade Three To Grade Six Took A Tour Of Two Days At Saadani For Refreshment.Click View More For More Information And Pictures. ',
        pictureEvent: BlogsNews5,
        titleDate: '04 - 05 Dec 2023 ',

    },


    {

        title: 'School Exhibition',
        subTitle: 'It Held At Safina Hall At Safi Schools Where All Classes Participate On Showing Diferrent Activities That They Have Been Learn In The Whole Year 2023. Click View More For More Information, Short Video And Pictures',
        pictureEvent: BlogsNews6,
        titleDate: '24 Nov 2023',

    },
]

</script>

<template>
    <section class="pt-[3rem]">
        <div class="container flex max-w-[1140px] mx-auto">
            <div class=" items-center justify-center mx-auto mb-10">
                <p class="relative mx-[36%] text-2xl inline-block tracking-[1px] uppercase text-[#17a2b8] border-b-4 border-[#526D82] mb-2">latest blog</p>
                <h1 class="text-6xl font-bold">Latest Articles From Blog</h1>
            </div>
        </div>


            <!-- Grids with Blogs & News -->
            <div class="xl:container flex flex-col md:grid lg:grid-cols-3 xl:gap-4 grid-cols-2 md:mx-auto mt-8 mb-10">
                  <div class=" shadow-md md:w-96 md:h-96 rounded-md cursor-pointer bg-gray-100 mb-4" v-for="object, objectIndex in blogsNews" :key="objectIndex">

                    <div class="h-48 w-80  items-center my-4 mx-8">
                        <img :src="object.pictureEvent" alt="BlogsNews1"  class="rounded-md w-full h-full object-cover">
                      <div class="relative -top-10 left-56 bg-blue-500 h-20 w-20 justify-center rounded-full">
                        <p class="absolute top-3 font-bold text-white  text-center">{{ object.titleDate }}</p>
                    </div>
                  </div>
                     <p class="text-xl font-semibold md:text-left mx-8 uppercase">{{ object.title }}</p>
                      <p class="text-justify text-xs mx-8 mt-2 mb-4">{{ object.subTitle }}</p>
                </div>
            </div>

            <!-- Pagination -->
        <nav aria-label="Page navigation example" class="">
      <ul class="container inline-flex  -space-x-px text-base h-10 mb-10 lg:px-[40%] md:px-[30%]">
        <li>
          <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
        <li>
            <a href="#" aria-current="page" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
          
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
      </ul>
    </nav>
    </section>
</template>