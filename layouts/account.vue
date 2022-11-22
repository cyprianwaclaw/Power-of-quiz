<template>
    <div class="nav ">
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
            <div v-if="show" class="min-h-screen sidebarmenu px-4 pt-5" ref="SidebarMenu">   
             <!--//TODO tutaj jest menu sidebar desktop -->
                <div class="columns-2 fixed place-items-center">
                   <div><NuxtLink to="/panel"><img class="logo-panel" src="@/assets/file/logo.png" /></NuxtLink></div>
                   <button class="justify-end w-full click" @click="show = !show" ref="openicon"><Icon name="carbon:chevron-left" size="24" color="gray-500" class="icon-header justify-end w-full"/></button>
                </div>
                <div class="mt-28 fixed w-64 px-4 click">
                    <NuxtLink to="/panel"><button class="flex flex-row cursor-pointer"><Icon name="carbon:home" size="25" class="menutexticon"/><h3 class="menutext">Strona główna</h3></button></NuxtLink>
                    <NuxtLink to="/panel"><button class="flex flex-row cursor-pointer"><Icon name="carbon:gamification" size="25" class="menutexticon"/><h3 class="menutext">Quizy</h3></button></NuxtLink>
                    <NuxtLink to="/panel"><button class="flex flex-row cursor-pointer"><Icon name="carbon:events" size="25" class="menutexticon"/><h3 class="menutext">Znajomi</h3></button></NuxtLink>
                    <AccordionTest />
                    <div class=" ">
                         <NuxtLink to="/panel/ustawienia"><button class="flex flex-row cursor-pointer"><Icon name="carbon:settings" size="25" class="menutexticon"/><h3 class="menutext">Ustawienia</h3></button></NuxtLink>
                         <NuxtLink to="/panel"><button class="flex flex-row cursor-pointer"><Icon name="carbon:logout" size="25" class="menutexticon"/><h3 class="menutext">Wyloguj się</h3></button></NuxtLink>
                    </div>
                </div>         
            </div>
            <!--//TODO Widok strony w slote -->
            <div class="mt-32 contentpage" ref="SidebarMenu1">
                
                <div @click="show = !show">
 <div>
    <button class="cursor-pointer ">
      <span class="flex flex-row"><Icon name="carbon:home" size="25" class="mr-2" color="gray-100"/><h3 class="menutext">Moje konto</h3>  <Icon name="carbon:chevron-down" size="24" class="openmenu"/></span>
    </button>
 </div>
  <Transition name="smooth">
    <div v-if="show" class="placeholder:">
      <div class="flex flex-col culumns-5">
   		<div><p>hello</p></div>
       <div><p>hello</p></div>
       <div><p>hello</p>
       </div><div><p>hello</p>
       </div><div><p>hello</p></div>
      </div>
    </div>
  </Transition>

</div>
<h1>{{show}}</h1>
<div>
    <p>{{useUser.name}}</p>
</div>
            <slot/>
        </div>
        <div class="fixed w-full">
            <div class="columns-2 absolute w-full md:flex place-items-center h-20 px-10 bac-white">

                <div class="flex gap-3 flex-row justify-end w-full place-items-center">
                    <div class="flex gap-3 flex-row justify-end w-full  place-items-center">


                        <input class="rounded-xl border-gray-300 border-2 h-10 width1 mr-10 px-3 py-5" placeholder="Znajdź quiz"/>
                        <img class="rounded-full w-10 h-10" src="@/assets/file/profil.jpg"/>
                            <div class="flex flex-col">
                                <h2 class="name-header mt-0.5">{{useUser.user}} {{useUser.user}}</h2>
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
    import {userObject} from '@/store/userObject'


    const useUser = userObject()
    useUser.getUser()


    gsap.config({
        nullTargetWarn: false,
    })


    const show = ref(true)

    const m_screen_menu = ref();
    const SidebarMenu = ref()
    const SidebarMenu1 = ref()
    const openicon = ref()
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
                    x:-220,
                 })
                 .to(openicon.value,{
                    rotate: 180,
                    duration: 0.5,
                 })
                .to(SidebarMenu1.value,{
                    x:-120,
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
    
    <style scoped lang="scss">
.width1{
    width: 400px !important;
    height: 20px !important;
}



.smooth-enter-active, .smooth-leave-active {
  transition: max-height .6s;
}
.smooth-enter, .smooth-leave-to {
  max-height: 0;
}
.smooth-enter-active, .smooth-leave-active {
  transition: opacity .6s;
}
.smooth-enter, .smooth-leave-to {
  opacity: 0
}
    </style>