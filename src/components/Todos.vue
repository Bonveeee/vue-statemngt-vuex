<template>
  <h3>Make it or leave it</h3>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
          {{ todo.title }}
        </div>
    </div>
</template>

<script>
// connects getter from vuex to this component
import { mapGetters } from 'vuex';
export default {
    name: "Todos",
     //define getters, on which we wanna use
     computed: mapGetters(['allTodos'])
}
</script>

<style scoped>

</style>