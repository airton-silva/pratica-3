<template>
  <div class="row">
    <div class="col-md-12">
            <h1>{{ msg }}</h1>

        <button class="btn btn-success" @click="getAllPosts">get Posts</button><br><br>

        <div class="card col-md-8 offset-2" v-for="post in posts" :key="post.id">
            <div class="card-body">
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
      posts: [],
      comments: [],
      cpat:[]
    } 

  },

  methods: {
      getAllPosts: function () {
          axios.get(this.uriBase)
            .then(result =>{
                this.posts = result.data
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

  },

}
</script>


