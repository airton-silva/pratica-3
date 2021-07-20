<template>
  <div class="row">
    <div class="col-md-12">
            <h1>{{ msg }}</h1>

        <button class="btn btn-success" @click="getAllPosts">get Posts</button><br><br>

        <div class="card col-md-8 offset-2" v-for="post in posts" :key="post.id">
            <div class="card-body">
              
                <div v-for="user in users" :key="user.id">
                  <div  v-if="user.id ==post.userId" class="alert alert-info" >                      
                       <span class="col-md-4"><strong>User/Autor: </strong>{{user.name}}</span>
                       <span class="col-md-4 offset-2"><strong>Email/Autor: </strong>{{user.email}}</span>
                  </div>
                  
                
                </div>
               
                <h5 class="card-title">Titulo : {{post.title}}</h5>
                <p>{{post.body}}</p>
                <!-- <a :href="'/datails/'+ post.id" class="card-link" name="cmts">Comentarios</a> -->
                <a href="#" class="card-link" @click.prevent="getAllCommentsByPostId (post)">Comentarios</a>
                    <div v-for="comment in comments" :key="comment.id" >
                      <div v-if="post.id == comment.postId" class="alert alert-secondary">
                        <span><h5>{{ comment.title}}</h5> </span>
                        <span><h6>{{ comment.email   }}</h6></span>
                        
                        <p>{{comment.body}}</p>
                      </div>
                      <div v-else></div>

                    </div> 

            </div>
        </div>



    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Post',
  props: {
    msg: String,
  },
  data () {
    return {
      uriBase : 'https://jsonplaceholder.typicode.com/posts',
      uriComments :'https://jsonplaceholder.typicode.com/comments',
      uriUser :'https://jsonplaceholder.typicode.com/users',
      posts: [],
      incPosts: [],
      comments: [],
      users:[]
    } 

  },

  methods: {
      getAllPosts: function () {
          axios.get(this.uriBase)
            .then(result =>{
                this.posts = result.data
                this.getUserByPostId (this.posts)
            })
            
            
            
      },

      getAllCommentsByPostId (post){
        
          axios.get(this.uriComments)
            .then(result =>{
                this.comments = result.data
                this.comments = this.comments.filter(function(comment) {
                  return comment.postId == post.id;
                });
                
            })
      
      },

      getUserByPostId (post){
        
          axios.get(this.uriUser)
            .then(result =>{
                this.users = result.data
                this.users = this.users.filter(function(user) {
                  return user.postId == post.id;
                 
                });
                //console.log(this.users)
            })


      
      },

  },

}
</script>


