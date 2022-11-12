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
            <div class="columns-2 min-h-screen bg-red-200 w-72" ref="SidebarMenu">   
             <!--//TODO tutaj jest menu sidebar desktop -->
                <div class="mt-52 fixed">
                    <h1>sssssss</h1>
                </div>        
            </div>
            <div class="mt-52 own-container" ref="SidebarMenu1">
            <slot/>
        </div>
        <div class="fixed w-full">
            <div class="columns-2 absolute w-full md:flex place-items-center h-16 px-12 bac-white">
                <div class="place-items-cente flex flex-row justify-between">
                    <NuxtLink to="/panel"><img class="logo-panel pt-0.5" src="@/assets/file/logo.png" /></NuxtLink>
                    <button class="w-full" @click="CloseMenu"><Icon name="carbon:arrow-left" size="24" color="black" class="icon-header"/></button>
                </div>
                <div class="flex gap-3 flex-row justify-end w-full  place-items-center">
                    <div class="">
                        <input />
                    </div>
                    <div class="flex gap-3 flex-row justify-end w-full  place-items-center">
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
                    x:-200,
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