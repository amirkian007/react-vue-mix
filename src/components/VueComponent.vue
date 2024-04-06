<script setup lang="ts">
import { onMounted } from 'vue'
import { ReactConnector } from './Connector';

onMounted(()=>{
 const reactComponent = new ReactConnector(document.getElementById('reactContainer')!)
 reactComponent.render()
 
})

</script>

<template>

  <div id="reactContainer">
      <!-- render react component in here -->
  </div>
  <div class="card">
    <button type="button">vue button</button>
  </div>
 
</template>
 
