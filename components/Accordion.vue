<template>
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
</template>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>

<style scoped>
p{
  max-height: 20px;
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