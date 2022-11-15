<template>
    <div class="z-20 w-full">
            <div class=" md:mx-auto 2xl:px-14 lg:px-10 md:px-4 md:pt-3 md:pb- hidden md:block bac-white">
                <div class="columns-2">
                 <div class=" flex w-full">
                      <NuxtLink to="/panel" scrollToTop: true><img class="logo-panel pt-0.5" src="@/assets/file/logo.png"/> </NuxtLink>
                </div>
                <div class="flex mt-7 justify-end gap-7 place-items-center">
                    <NuxtLink to="/panel/ustawienia"><Icon name="carbon:settings" class="icon-header cursor-pointer" size="28" ref="setupicon"/></NuxtLink>
                   <div class="flex gap-4 flex-row">
                    <img class="rounded-full w-10 h-10" src="@/assets/file/profil.jpg"/>
                        <div class=" flex flex-col">
                            <h2 class="name-header mt-0.5">Cyprian Wacław</h2>
                            <p class="des-header -mt-1">Standard</p>
                        </div>
                   </div>
                </div>
            </div>
            </div>
    </div>        
    </template>
    