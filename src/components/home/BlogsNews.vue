<script setup>
    import BlogsNews1 from '../../assets/images/weten/DSC_0249.jpg'
    import BlogsNews2 from '../../assets/images/weten/wet1.jpg'
    import BlogsNews3 from '../../assets/images/weten/DSC_0238.jpg'


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
    ]


</script>

<template>
    <div class=" mt-20 mb-20 lg:p-24">

        <!-- Div holding Text and Text with Button -->
        <div class="container md:flex md:justify-between items-center lg:mx-auto grid grid-cols-2 gap-10 ">

            <!-- Blogs and News -->
            <div class="relative md:left-10 left-4 flex flex-col text-left space-y-2">
                <h3 class="text-blue-400 font-semibold md:text-xl text-xs uppercase">Blogs & News</h3>
                <h2 class="font-bold md:text-3xl text-2xl">Our Latest News Feed</h2>
            </div>

             <!-- Button -->
                    <div class="md:relative right-36 flex bg-blue-500 md:bg-blue-400 md:h-12 md:w-44 h-12 w-40 mt-8 items-center cursor-pointer text-white rounded-md hover:bg-blue-500">
                         <p class="text-xs font-semibold mx-auto">Read More Blogs</p>
                         <!-- SVG arrow -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                    </div>
        </div>


        <!-- Grids with Blogs & News -->
        <div class="container flex flex-col md:grid lg:grid-cols-3 gap-4 grid-cols-2 md:mx-auto mt-8">
              <div class=" shadow-md md:w-96 md:h-96 rounded-md cursor-pointer bg-gray-100 mb-4" v-for="object, objectIndex in blogsNews" :key="objectIndex">

                <!-- Picture BlogsNews -->
                <div class="h-48 w-80  items-center my-4 mx-8">
                    <img :src="object.pictureEvent" alt="BlogsNews1"  class="rounded-md w-full h-full">
                <div class="relative -top-10 left-56 bg-blue-500 h-20 w-20 justify-center rounded-full">
                    <p class="absolute top-3 font-bold text-white  text-center">{{object.titleDate}}</p>
                </div>
              </div>
                 <p class="text-xl font-semibold md:text-left mx-8 uppercase">{{object.title}}</p>
                  <p class="text-justify text-xs mx-8 mt-2 mb-4">{{object.subTitle}}</p>
            </div>
        </div>
    </div>
</template>