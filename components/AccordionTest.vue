<template>
    <div>
<div class="row">
  <div class="col">
    <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck1" class="input_accordion ">
        <label class="tab-label" for="chck1"> <span class="flex flex-row"><Icon name="carbon:home" size="25" class="mr-2" color="black"/><h3 class="menutext">Moje konto</h3></span></label>
        <div class="tab-content">
          <div class="flex flex-col culumns-5">
   		    <NuxtLink to="/panel"><button class="flex flex-row cursor-pointer"><Icon name="carbon:home" size="25" class="menutexticon"/><h3 class="menutext">Znajomi</h3></button></NuxtLink>
       
      </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script lang="ts">


</script>

<style scoped>
.input_accordion{
  position: absolute;
  opacity: 0;
  z-index: -1;
}
</style>