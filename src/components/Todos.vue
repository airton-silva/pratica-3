<template>
  <div class="row">
    <div class="col-md-12">
            <h1>{{ msg }}</h1>

        <button class="btn btn-success" @click="getAll()">get Todos</button><br><br>
                    
        <div class="card col-md-8 offset-2" v-for="todo in todos" :key="todo.id">
            <div class="card-body" v-if="todo.completed === true">
                    <!-- {{ todo.id }} -->
                <h3 class="card-title">Titulo : {{todo.title}}</h3>
                <div v-for="user in users" :key="user.id">
                  <div  v-if="user.id ==todo.userId" class="alert alert-info" >                      
                       <span class="col-md-4"><strong>User/Autor: </strong>{{user.name}}</span>
                       <span class="col-md-4"><strong>Nome de Usuario: </strong>{{user.username}}</span>
                       <span class="col-md-4"><strong>Email: </strong>{{user.email}}</span>
                       <span class="col-md-4"><strong>Telefone: </strong>{{user.phone}}</span>
                       <span class="col-md-4"><strong>Site: </strong>{{user.website}}</span>
                       <h5>Endereço:</h5>
                       <span class="col-md-4"><strong>Rua: </strong>{{user.address.street}}</span>
                       <span class="col-md-4"><strong>Nº: </strong>{{user.address.suite}}</span>
                       <span class="col-md-4"><strong>Nº: </strong>{{user.address.suite}}</span>
                       <span class="col-md-4"><strong>Cidade: </strong>{{user.address.city}}</span>
                       <span class="col-md-4"><strong>Cep: </strong>{{user.address.zipcode}}</span>
                       <h5>Empresa:</h5>
                       <span class="col-md-4"><strong>Nome: </strong>{{user.company.name}}</span>
                       <span class="col-md-4"><strong>Slogan: </strong>{{user.company.catchPhrase}}</span>
                       <span class="col-md-4"><strong>Ramo: </strong>{{user.company.bs}}</span>
                  </div>                 
                
                </div>

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

          axios.all([
            axios.get(this.uriBase),
            axios.get(this.uriUser)
          ]).then(axios.spread(( ResTodos, ResUser)=> {
            this.todos = ResTodos.data
            this.users = ResUser.data
          }))
          // axios.get(this.uriBase)
          //   .then(result =>{
          //       this.todos = result.data
          //       this.getUserByTodosId (this.todos)
               
          //   })
            // console.log(this.todos)
            
            
      },

      // getUserByTodosId (todos) {   
          
      //     axios.get(this.uriUser)
      //       .then(result =>{
      //           this.users = result.data
      //           this.users = this.users.filter(function(user) {
      //             return user.id == todos.userId;
                 
      //           });
      //           console.log(this.users)
      //       })
      
      // },

  },

}
</script>


