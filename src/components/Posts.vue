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
                <a href="#" class="card-link" @click.prevent="getAllComments (post)" name="cmts">Comentarios</a>
                <div v-for="cmt in cpat" :key="cmt.id" class="alert alert-secondary">
                  <span><h5>{{ cmt.title}}</h5> </span>
                  <span><h6>{{ cmt.email   }}</h6></span>
                  
                  <p>{{cmt.body}}</p>

                </div> 
                <!-- <a href="/datails">Datalhes post</a> -->
                <!-- <div v-for="comment in comments" :key="comment.id">
                  {{ comment.email }}

                </div> -->
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

      getAllComments (post){
        
          axios.get(this.uriComments)
            .then(result =>{
                this.comments = result.data
            })
            //this.getCommentByIdPost(this.comments)
            // for(var i = 0; i < this.comments.length; i++) {
            //   if(this.comments[i].postId == 1){
            //     commentsP.push(this.comments[i]);
            //   }
            // }
            this.cpat = this.comments.filter(function(comment) {
              return comment.postId == post.id;
            });
            
      },

      // getCommentByIdPost(comments) {
      //   this.cpat = comments
        
      // }
  },

}
</script>


