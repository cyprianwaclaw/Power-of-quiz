<template>
  <div class="nav">
    <div
      class="bg-black fixed min-h-screen w-screen flex overflow-hidden"
      ref="m_screen_menu"
    >
      <div class="md:hidden flex absolute right-5 top-4">
        <button @click="close" class="active:bg-gray-800 click" ref="m_menu_button_close">
          <p class="text-white border border-white rounded-full px-4 py-1">Zamkij</p>
        </button>
      </div>
      <div
        class="md:hidden flex absolute left-5 top-4"
        ref="m_menu_button_close"
        @click="close"
      >
        <p class="text-white text-2xl font-mediu">LOGO</p>
      </div>
      <div class="absolute flex flex-col mb-24 gap-4 inset-10 justify-end">
        <NuxtLink to=""
          ><h3 class="text-white" ref="m_page1" @click="close">Page1</h3></NuxtLink
        >
        <NuxtLink to=""
          ><h3 class="text-white" ref="m_page2" @click="close">Page2</h3></NuxtLink
        >
        <NuxtLink to=""
          ><h3 class="text-white" ref="m_page3" @click="close">Page3</h3></NuxtLink
        >
        <NuxtLink to=""
          ><h3 class="text-white" ref="m_page4" @click="close">Page4</h3></NuxtLink
        >
      </div>
    </div>
    <div class="columns-2 w-full mx-auto flex">
      <div
        v-if="show"
        class="min-h-screen sidebarmenu px-8 py-4 relative"
        ref="SidebarMenu"
      >
        <!--//TODO Menu sidebar desktop -->
        <div class="columns-2 w-64 flex place-items-center justify-between fixed">
          <NuxtLink to="/panel"
            ><img class="logo-panel" src="@/assets/file/logo.png"
          /></NuxtLink>
          <!--//TODO Zamykanie menu sidebar -->
        </div>
        <div class="mt-28 fixed w-64 click">
          <NuxtLink to="/panel"
            ><button class="flex flex-row cursor-pointer">
              <Icon name="carbon:home" size="24" class="menutexticon" />
              <h3 class="menutext">Strona główna</h3>
            </button></NuxtLink
          >
          <NuxtLink to="/panel/quizy"
            ><button class="flex flex-row cursor-pointer">
              <Icon name="carbon:gamification" size="24" class="menutexticon" />
              <h3 class="menutext">Quizy</h3>
            </button></NuxtLink
          >
          <NuxtLink to="/panel/zaproszone-osoby"
            ><button class="flex flex-row cursor-pointer">
              <Icon name="carbon:events" size="24" class="menutexticon" />
              <h3 class="menutext">Zaproszone osoby</h3>
            </button></NuxtLink
          >
          <AccordionMenu />
          <NuxtLink to="/panel/ustawienia"
            ><button class="flex flex-row cursor-pointer">
              <Icon name="carbon:settings" size="24" class="menutexticon" />
              <h3 class="menutext">Ustawienia</h3>
            </button></NuxtLink
          >
        </div>
        <div class="">
          <div class="fixed bottom-0 mb-5">
            <button @click="44" class="flex flex-row cursor-pointer">
              <Icon
                name="carbon:logout"
                size="20"
                class="menutexticonlog text-gray-400"
              />
              <h3 class="text-sm text-gray-400">Wyloguj się</h3>
            </button>
          </div>
        </div>
      </div>
      <!--//TODO Widok strony w slote -->
      <div class="mt-32 contentpage mb-20" ref="SidebarMenu1">
        <slot />
      </div>
      <div class="fixed w-full family">
        <div
          class="columns-2 absolute w-full md:flex place-items-center h-20 px-10 bac-white"
        >
          <div class="columns-2 flex flex-row w-full place-items-center mr-5">
            <!--//TODO Wgrywanie avatara do profilu plus if gdy jest null -->
            <div class="flex gap-4 place-items-center justify-end w-full">
              <div v-if="user.user.avatar_path == null">
                <Icon
                  name="carbon:user-avatar-filled"
                  size="50"
                  color="#BFCBEE"
                  class=""
                />
              </div>
              <div v-else>
                <img class="rounded-full w-10 h-10" :src="user.user.avatar_path" />
              </div>
              <div class="flex flex-col">
                <h2 class="text-base font-medium -mb-1">
                  {{ user.user.name }} {{ user.user.surname }}
                </h2>
                <!--//TODO Sprawdzić na końcu czy zgadzają się wszystkie plany -->
                <div
                  v-if="(user.plan.data == false)"
                  class="columns-2 flex w-full place-items-center"
                >
                  <p class="text-base text-gray-400 font-semibold">Standard</p>
                  <NuxtLink to="/panel/plan-premium"
                    ><button class="przejdz-premium">przejdź na PREMIUM</button></NuxtLink
                  >
                </div>
                <div
                  v-if="(user.plan.data == true)"
                >
                <button class="pakiet-premium-header columns-2 flex place-items-center">
                  <Icon name="fa:diamond" size="16" class="chevron-hero" />
                <p class=" ml-2">PREMIUM</p>                </button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { useUser } from "@/store/useUser";

const user = useUser();
user.getUser();
user.getUserPlan();

gsap.config({
  nullTargetWarn: false,
});

const show = ref(true);

const m_screen_menu = ref();
const SidebarMenu = ref();
const SidebarMenu1 = ref();
const openicon = ref();
const m_menu_button_close = ref();
const m_menu_button_open = ref();
const m_page1 = ref();
const m_page2 = ref();
const m_page3 = ref();
const m_page4 = ref();
const m_logo = ref();
const logo = ref();
if (process.client) {
  var m_header_open_animation = gsap.timeline({ paused: true, reversed: false });
}
if (process.client) {
  var m_header_start_animation = gsap.timeline({ onComplete: changeposition });
}

if (process.client) {
  var sidebar = gsap.timeline({ paused: true, reversed: false });
}

onMounted(() => {
  m_header_open_animation
    .to(
      m_logo.value,
      {
        display: "none",
      },
      "<"
    )

    .from(
      m_screen_menu.value,
      {
        duration: 1,
        opacity: 0,
        display: "none",
      },
      "<+=0.12"
    )
    .from(
      m_menu_button_open.value,
      {
        duration: 0.6,
      },
      "<+=0.12"
    )
    .from(
      m_page1.value,
      {
        duration: 0.6,
        opacity: 0,
      },
      "<+=0.12"
    )
    .from(
      m_page2.value,
      {
        duration: 0.6,
        opacity: 0,
      },
      "<+=0.12"
    )
    .from(
      m_page3.value,
      {
        duration: 0.6,
        opacity: 0,
      },
      "<+=0.12"
    )
    .from(
      m_page4.value,
      {
        duration: 0.6,
        opacity: 0,
      },
      "<+=0.12"
    );
  m_header_start_animation
    .from(m_logo.value, {
      y: -50,
      opacity: 0,
      duration: 0.4,
    })
    .from(m_menu_button_open.value, {
      y: -50,
      opacity: 0,
      duration: 0.4,
    });

  sidebar
    .to(SidebarMenu.value, {
      x: -220,
    })
    .to(openicon.value, {
      rotate: 180,
      duration: 0.5,
    })
    .to(SidebarMenu1.value, {
      x: -120,
    });
});
function changeposition() {
  gsap.to(m_logo.value, {});
}

function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1,
  });
}

function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: "elastic.inOut(2.5, 1)",
    onComplete: done,
  });
}

function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: -200,
    ease: "elastic.inOut(2.5, 1)",
  });
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done,
  });
}

const open = () => {
  m_header_open_animation.play();
  gsap.to(m_menu_button_open.value, {
    x: 200,
  });
  document.body.style.overflow = "hidden";
  document.body.style.userSelect = "none";
};
const close = () => {
  m_header_open_animation.reverse();
  document.body.style.overflow = "auto";
  document.body.style.userSelect = "auto";
};

const CloseMenu = () => {
  sidebar.play();
};
</script>

<style scoped lang="scss"></style>
