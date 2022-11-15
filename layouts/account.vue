<template>
    <div class="nav">
        <div class="bg-black fixed min-h-screen w-screen flex overflow-hidden" ref="m_screen_menu">
            <div class="md:hidden flex absolute  right-5 top-4"><button @click="close" class="active:bg-gray-800 click" ref="m_menu_button_close" ><p class="text-white border border-white  rounded-full px-4 py-1">Zamkij</p></button></div>
            <div class="md:hidden flex absolute left-5 top-4" ref="m_menu_button_close" @click="close"><p class="text-white text-2xl font-mediu">LOGO</p></div>
                <div class="absolute flex flex-col mb-24 gap-4 inset-10 justify-end">
                        <NuxtLink to=""><h3 class="text-white" ref="m_page1" @click="close">Page1</h3></NuxtLink>
                        <NuxtLink to=""><h3 class="text-white" ref="m_page2" @click="close">Page2</h3></NuxtLink>
                        <NuxtLink to=""><h3 class="text-white" ref="m_page3" @click="close">Page3</h3></NuxtLink>
                        <NuxtLink to=""><h3 class="text-white" ref="m_page4" @click="close">Page4</h3></NuxtLink>
        </div>
        </div>
        <div class="columns-2 w-full mx-auto flex ">
            <div class="columns-2 min-h-screen sidebarmenu" ref="SidebarMenu">   
             <!--//TODO tutaj jest menu sidebar desktop -->
                <div class="mt-52 fixed">
                    <h1>sssssss</h1>
                </div>        
            </div>
            <div class="mt-2 contentpage" ref="SidebarMenu1">
                <div class="w-full h-24 bg-black">

                </div>
            <slot/>
        </div>
        <div class="fixed w-full">
            <div class="columns-2 absolute w-full md:flex place-items-center h-16 px-12 bac-white">
                <div class="place-items-cente flex flex-row justify-between">
                    <NuxtLink to="/panel"><img class="logo-panel pt-0.5" src="@/assets/file/logo.png" /></NuxtLink>
                    <button class="w-full" @click="CloseMenu"><Icon name="carbon:arrow-left" size="24" color="black" class="icon-header"/></button>
                </div>
                <div class="flex gap-3 flex-row justify-end w-full place-items-center">
                    <div class="flex gap-3 flex-row justify-end w-full  place-items-center">

                        <form>
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(897px, 5637px, 0px);">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required>
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
                        <NuxtLink to="/panel/ustawienia"><Icon name="carbon:settings" class="icon-header cursor-pointer mr-3" size="28" ref="setupicon"/></NuxtLink>
                        <img class="rounded-full w-10 h-10" src="@/assets/file/profil.jpg"/>
                            <div class="flex flex-col">
                                <h2 class="name-header mt-0.5">Cyprian Wacław</h2>
                                <p class="des-header -mt-1">Standard</p>
                            </div>
                  </div>
                </div>
        </div>
        </div>
    </div>
    </div>
    </template>
    
    <script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import gsap from 'gsap';

    gsap.config({
        nullTargetWarn: false,
    })

    const m_screen_menu = ref();
    const SidebarMenu = ref()
    const SidebarMenu1 = ref()
    const m_menu_button_close = ref();
    const m_menu_button_open = ref();
    const m_page1 = ref();
    const m_page2 = ref();
    const m_page3 = ref();
    const m_page4 = ref();
    const m_logo = ref();
    const logo = ref();
    if (process.client) {
      var m_header_open_animation = gsap.timeline({paused: true, reversed:false})
    }
    if (process.client) {
      var m_header_start_animation = gsap.timeline({onComplete: changeposition})
    }

    if (process.client) {
      var sidebar = gsap.timeline({paused: true, reversed:false})
    }

        onMounted(()=>{
                m_header_open_animation.to(m_logo.value,{
                                 display: "none",
                             
                                },"<")
                                
                                .from(m_screen_menu.value,{
                                duration: 1,
                                opacity: 0,
                                display: "none",
                                },"<+=0.12")
                                .from(m_menu_button_open.value,{
                                duration: 0.6,                          
                                },"<+=0.12")
                                .from(m_page1.value,{
                                duration: 0.6,
                                opacity: 0,
                                },"<+=0.12")
                                .from(m_page2.value,{
                                duration: 0.6,
                                opacity: 0,
                                },"<+=0.12")
                                .from(m_page3.value,{
                                duration: 0.6,
                                opacity: 0,
                                },"<+=0.12")
                                .from(m_page4.value,{
                                duration: 0.6,
                                opacity: 0,
                                },"<+=0.12");
                m_header_start_animation.from(m_logo.value,{
                                y: -50,
                                opacity: 0,
                                duration: 0.4,
                                 })
                                 .from(m_menu_button_open.value,{
                                y: -50,
                                opacity: 0,
                                duration: 0.4,
                                 })

                 sidebar.to(SidebarMenu.value,{
                    x:-200,
                 })
                .to(SidebarMenu1.value,{
                    x:-98,
                 })   

                
    })
    function changeposition (){
    gsap.to(m_logo.value,{
    })
    }
    const open = () => { m_header_open_animation.play();
                    gsap.to(m_menu_button_open.value,{
                        x: 200,
                    })
        document.body.style.overflow = "hidden";
        document.body.style.userSelect = "none";
      }
    const close = () => { m_header_open_animation.reverse();
        document.body.style.overflow = "auto";
        document.body.style.userSelect = "auto"; 
     }

     const CloseMenu = () => {sidebar.play();
     }

    </script>
    
    <style scoped>
    </style>