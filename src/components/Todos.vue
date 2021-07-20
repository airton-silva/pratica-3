<template>
  <div class="row">
    <div class="col-md-12">
            <h1>{{ msg }}</h1>

        <button class="btn btn-success" @click="getAll()">get Todos</button><br><br>
                    <!-- {{ todos }} -->
        <div class="card col-md-8 offset-2" v-for="todo in todos" :key="todo.id">
            <div class="card-body">
              {{ users }}
                <div v-for="user in users" :key="user.id">
                  <div  v-if="user.id ==todo.userId" class="alert alert-info" >                      
                       <span class="col-md-4"><strong>User/Autor: </strong>{{user.name}}</span>
                       
                  </div>
                  
                
                </div>
               
                <h5 class="card-title">Titulo : {{todo.title}}</h5>

            </div>
        </div>
        
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Todos',
  props: {
    msg: String,
  },
  data () {
    return {
      uriBase : 'https://jsonplaceholder.typicode.com/todos',
      uriUser :'https://jsonplaceholder.typicode.com/users',
      todos: [],
      users:[],
  
    } 

  },

  methods: {
      getAll() {
          axios.get(this.uriBase)
            .then(result =>{
                this.todos = result.data
                this.getUserByTodosId (this.todos)
               
            })
            // console.log(this.todos)
            
            
      },

      getUserByTodosId (todos) {        
          axios.get(this.uriUser)
            .then(result =>{
                this.users = result.data
                this.users = this.users.filter(function(user) {
                  return user.id == todos.userId;
                 
                });
                //console.log(this.users)
            })


      
      },

  },

}
</script>


