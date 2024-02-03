<script >
    import testimonial from '../../assets/images/feedBack/testimonial.png'

    import { ref } from 'vue';


    // import Swiper core and required modules
        import { Autoplay, Pagination  } from 'swiper/modules';

    // Import Swiper Vue.js components
        import { Swiper, SwiperSlide } from 'swiper/vue';

        // Import Swiper styles
        import 'swiper/css';
        import 'swiper/css/navigation';
        import 'swiper/css/pagination';
        import 'swiper/css/scrollbar';


    export default {

        components: {
            Swiper,
            SwiperSlide,
        },

        setup() {
            testimonial:testimonial;

            const testimonialList = ref([

                {
                    name: 'shilolesamike',
                    whoIs: 'Parent',
                    subtitle: 'One among the giant in municipality...',
                },

                {
                    name: 'Iyimo2095',
                    whoIs: 'Parent',
                    subtitle: '👏👏Tunaimani na nyie Mungu aendelee kuwasimama muwe imara kuwaelimisha watoto wetu❤️🔥...',
                },

                {
                    name: 'Jerome_ismail_sylivery',
                    whoIs: 'Parent',
                    subtitle: 'Hongereni Safi schools, naomba mawasiliano yenu newalete wanangu wawili...',
                },

                {
                    name: 'dogo1694',
                    whoIs: 'Parent',
                    subtitle: 'Safi school ni mahali pekee naweza sema elimu bora na kw gharama...',
                },
            ])

                 const onSwiper = (swiper) => {
                    console.log(swiper);
                };
                const onSlideChange = () => {
                    console.log('slide change');
                };

            return{
                testimonial,
                testimonialList, 
                onSwiper,
                onSlideChange,
                modules: [Autoplay, Pagination],
            }
        }

        
    }
</script>

<template>
    <div class="relative container flex flex-col mx-auto md:grid grid-cols-2 mb-24 ">
        
          <!-- FeedBack Message -->
            <div class="rounded-lg mb-8">
                <div class="mx-3 ">
                    <h4 class="uppercase text-gray-500 font-serif mt-2">Testimonial</h4>
                    <h1 class="text-4xl mt-2 font-semibold">Our Parents <span class="text-green-500 font-bold">Feedback.</span></h1>

                    <!-- swiper -->
                    <swiper  class="mt-10"
                        :modules="modules"
                        :slides-per-view="1"
                        :autoplay="{
                                delay: 7000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false
                            }"
                        :thumbs="{ swiper: thumbsSwiper }"
                        :mousewheel="true"
                        :pagination="{ clickable: true }"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                    >
                          <SwiperSlide v-for="object, objectIndex in testimonialList" :key="objectIndex" class="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-10 w-10 pr-2 fill-current text-green-600" viewBox="0 0 24 24"><path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg>

                                    <p class="text-justify text-gray-400 lg:text-left">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{object.subtitle}}
                                    </p>


                             <div class="mt-20">
                                <div class="text-left items-center">
                                        <h1 class="lg:text-3xl text-3xl  font-semibold capitalize">{{ object.name }}</h1>

                                        <h3 class="text-2xs mt-1 text-gray-400 mb-10">{{ object.whoIs }}</h3>
                                    </div>
                            </div>
                                
                          </SwiperSlide>
                          
                    </swiper>

                       
                </div>

            </div>

            <!-- Picture User Feedback -->

              <img :src="testimonial" alt="Testimonial" class="relative top-6 left-2 hidden md:flex rounded-lg lg:h-full lg:w-full  md:h-/6">
        </div>
</template>