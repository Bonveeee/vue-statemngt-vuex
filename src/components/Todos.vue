<template>
  <h3>Work Flow</h3>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
          {{ todo.title }}
          <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
        </div>
    </div>
</template>

<script>
// connects getter from vuex to this component
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Todos",
    methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
     //define getters, on which we wanna use
     computed: mapGetters(['allTodos']),
     created() {
    this.fetchTodos();
  }
}
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

</style>