<template>
  <div class="home">
    <Todos msg="Bem vindo a pagina de Todos"/><br>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'


export default {
  name: 'todos',
  components: {
    Todos,

  }
}

</script>
