<template>
  <div class="home">
    <Posts msg="Bem vindo a pagina de Posts"/><br>

  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'
import Albuns from '@/components/Albuns.vue'


export default {
  name: 'Home',
  components: {
    Posts,
    Albuns,

  }
}

</script>
