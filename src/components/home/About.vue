<script setup>
</script>

<template>
    <section class="relative container flex flex-col mx-auto md:grid grid-cols-2 mb-20 gap-8">
           
        <!-- video from youtube -->
        <div class="aspect-w-16 aspect-h-9">
        <iframe src="https://www.youtube.com/embed/RrOUpBMqrhM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="rounded-lg mb-8">
            <div class="mx-3 ">
                <h4 class="uppercase text-gray-500 font-serif mt-2">About us</h4>
                <h1 class="lg:text-6xl md:text-4xl text-3xl mt-2 font-bold">History.</h1>

                <div>
                    <p class="hidden md:flex mt-6 md:text-justify text-gray-400">
                        At Safi Schools we believe that total success of our pupils depends on close and effective
                        cooperation between the school, parent, the wider community and the various government eduction organs
                        responsible for regulating and advancement of education.
                    </p>

                    <p class="hidden md:flex mt-2 md:text-justify text-gray-400">
                        The concept of total success means that we strive to make a child succeed as a responsible person attaining 
                        high ranking both academically and morally. We believe that a pupil who score A's in his academic subjects but who 
                        is not well mannered is useless to himself, parents and the society at large.
                    </p>

                </div>

                <div class="mx-auto text-justify">
                    <p class="flex md:hidden mt-6  text-gray-400">
                        At Safi Schools we believe that total success of our pupils depends on close and effective
                        cooperation between the school, parent, the wider community and the various government eduction organs
                        responsible for regulating and advancement of education.
                    </p>

                     <p class="flex md:hidden mt-6  text-gray-400">
                            The concept of total success means that we strive to make a child succeed as a responsible person attaining 
                            high ranking both academically and morally. We believe that a pupil who score A's in his academic subjects but who 
                            is not well mannered is useless to himself, parents and the society at large.
                    </p>

                </div>


                <h4 class="text-xl font-bold mt-10">Organization Structure.</h4>

                    <!-- Showing the percentage with Explanation -->
                <div class="mt-5 flex flex-col md:grid grid-cols-2 space-y-4 md:space-y-0 md:space-x-2">
                    
                    <div class="shadow-sm rounded-md">
                        <h4 class=" text-2xl md:text-3xl text-amber-400 font-bold mb-2">90%</h4>
                        <p><span class="text-xl md:text-2xl text-red-300 font-bold md:text-left text-justify">90%,</span> Here at Safi School we focus on markets where technology, innovation,and 
                        capital can unlock long-term value and drive economic growth</p>
                    </div>
                    <div class="shadow-sm rounded-md">
                        <p class=" text-2xl md:text-3xl text-amber-400 font-bold mb-2">9/10</p>
                            <p><span class="text-xl md:text-2xl text-red-300 font-bold md:text-left text-justify">9/10,</span> Here at Safi School we focus on markets where technology, innovation,and 
                            capital can unlock long-term value and drive economic growth</p>
                    </div>
                </div>

                <!-- Button -->
                <div class="flex bg-blue-500 md:bg-blue-400 h-12 w-40 mt-8 items-center cursor-pointer text-white rounded-md hover:bg-blue-500">
                     <p class="text-xs font-semibold mx-auto">Learn More</p>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                </div>
            </div>
        </div>
    </section>
</template>