<script>
    import Logo from '../../assets/images/logo/logo.png'

    const exploreFooter = [

        {
            title: 'Home',
            link: ''
        },

        {
            title: 'About us',
            link: ''
        },

        {
            title: 'Blog & News',
            link: ''
        },

        {
            title: 'FAQ Question',
            link: ''
        },

        {
            title: 'Testimanial',
            link: ''
        },

        {
            title: 'Privacy Policy',
            link: ''
        },
    ];

    export default {
   data() {
        return {
            currentYear: new Date().getFullYear(),
            logo: Logo,
            exploreFooter: exploreFooter
        };
    },
};
</script>

<template>
    <footer class="flex w-full h-full items-center" style="background-color: #242F51 !important;">


        <div class="container flex flex-col space-y-4 items-center  md:mx-auto pt-[3rem] mr-[-15px] ml-[-15px] mb-[3rem]">

           <div class="grid md:grid-cols-2 lg:grid-cols-4 px-6 md:px-0">
             <!-- Logo with Text -->
               <div class="mb-[3rem] basis-[25%] max-w-[70%]">
                    <div class="container inline-flex items-center mb-[1.5rem] leading-[40px]">
                            <div class="w-20 md:w-12">
                                <img :src="logo" alt="Logo" class="w-full h-full object-cover">
                            </div>
                            <p class="uppercase text-white lg:text-xl text-xs">safi primary school</p>

                       
                    </div>

                    <!-- Text -->
                    <p class="text-white flex lg:text-justify">
                                    Safi School is an English Medium Pre and Primary School Located at Mbezi Msakuzi, Ubungo Municipal, Dar-es-Salaam
                    </p>
                    <!-- Social Media -->
                    <div class="flex self-start mt-[1.5rem]">
                          <!-- Facebook -->
                            <div class="mr-[0.5rem] bg-blue-200 hover:bg-blue-300 cursor-pointer lg:w-12 lg:h-12 md:w-10 md:h-8 items-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" class="mx-4 lg:my-2 my-2 md:mx-2 md:my-1 fill-current text-blue-600" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                            </div>

                            <!-- Instagram -->
                            <div class="relative lg:-top-1 md:-top-1 mr-[0.5rem] bg-red-200 hover:bg-red-300 cursor-pointer lg:w-12 lg:h-12 md:w-10 md:h-8  md:my-2 md:mx-2  items-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" class="mx-4 lg:my-2 my-2 md:mx-2 md:my-1 fill-current text-red-600" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                            </div>


                            <!-- LinkedIn -->
                            <div class="relative lg:-top-1 md:-top-1 mr-[0.5rem] bg-blue-200 hover:bg-blue-300 cursor-pointer lg:w-12 lg:h-12 md:w-10 md:h-8  md:my-2 md:mx-2  items-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" class="mx-4 lg:my-2 my-2 md:mx-2 md:my-1 fill-current text-blue-600" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                            </div>

                                    <!-- Twitter -->
                            <div class="relative lg:-top-1 md:-top-1 mr-[0.5rem] bg-gray-200 hover:bg-gray-300 cursor-pointer lg:w-12 lg:h-12 md:w-10 md:h-8 md:my-2  md:mx-2 items-center rounded-lg">
                               <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" class="mx-4 lg:my-2 my-2 md:mx-2 md:my-1 " viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                            </div>
                        </div>
                    </div>

                        <!-- Get In Touch -->
                        <div class="mb-[3rem] basis-[25%] max-w-[70%] text-white self-start">
                            <h3 class="mb-[1.5rem] text-2xl">Get In Touch</h3>

                              <!-- 1. Location Icon with Text -->
                            <div class="container flex flex-row  gap-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 stroke-amber-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                                <p class="text-white font-serif text-xl">MBEZI-MAKABE, <br/> Dar Es Salaam</p>
                            </div>

                                 <!-- 1. Phone Icon with Text -->
                            <div class="container inline-flex flex-row items-center gap-6 md:gap-3 lg:mt-4 lg:ml-0 ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-amber-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <p class="text-white font-serif text-xl lg:ml-4">+255 653 931 212</p>
                            </div>

                            <!-- 1. Email Icon with Text -->
                            <div class="container inline-flex flex-row items-center gap-6 md:gap-3 lg:mt-4 lg:ml-0 ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-amber-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <p class="text-white font-serif text-xlcursor-pointer lg:ml-4">safiprimary2017@gmail.com</p>
                            </div>
                        </div>

                    
                    <!-- Quick Links -->
                    <div class="mb-[3rem] basis-[25%] max-w-[70%] text-white self-start">
                        <h3 class="mb-[1.5rem] text-2xl">Quick Links</h3>

                        <div class="flex flex-col ml-6">
                            <p v-for="explore, exploreIndex in exploreFooter" :key="exploreIndex" class="cursor-pointer hover:underline decoration-amber-500 hover:text-amber-500 ease-in duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="relative top-6 right-8 stroke-amber-500 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                                    {{ explore.title }}
                            </p>
                        </div>

                    </div>

                    <div class="mb-[3rem] basis-[25%] max-w-[70%] text-white self-start">
                        <h3 class="mb-[1.5rem] text-2xl">Contact Us</h3>

                        <form action="" class="max-w-sm mx-auto px-2">
                            <input type="text" name="name" id="name" placeholder="Name" class="mb-4 block py-2 px-2 w-full text-black rounded-lg  border-amber-300 bg-gray-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">

                            <input type="text" name="email" id="email" placeholder="Email" class="mb-4 block py-2 px-2 w-full text-black rounded-lg  border-amber-300 bg-gray-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">  

                            <input type="number" name="number" id="number" placeholder="Phone Number" class="mb-4 block py-2 px-2 w-full text-black rounded-lg  border-amber-300 bg-gray-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">  

                                <div class="block flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ease-in duration-200">
                                        submit
                                     </a>
                                </div>

                        </form>
                    
                    </div>   
           </div>
                
            <div class="container w-[100%] px-[15px] mx-auto  border-t-2 pt-[3rem]">
                
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">© {{ currentYear }} <a href="" class="hover:underline decoration-amber-500 hover:text-amber-500">Safi Primary School</a>. All Rights Reserved.</span>
            </div>
        </div>

       
    </footer>
</template>