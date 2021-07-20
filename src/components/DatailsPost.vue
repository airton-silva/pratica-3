<template>
  <div class="row">
        <!-- <div class="card col-md-8 offset-2" v-for="comment in commentsPost" :key="comment.id">
            {{ comment.postId }}<br>
            {{ comment.id }}<br>
            {{ comment.email }}<br>
        </div> -->
       <h1>olá</h1>
       {{ id }}

  </div>
</template>

<script>
//import axios from 'axios'

export default {
  name: 'DatailsPost',
  props:['id'],
  data () {
    return {
      uriComments :'https://jsonplaceholder.typicode.com/comments',
      comments: [],
      commentsPost:[]
    } 

  },

//   methods: {

//     //   getAllComments (){
        
//     //       axios.get(this.uriComments)
//     //         .then(result =>{
//     //             this.comments = result.data
//     //             this.commentsPost = this.comments.filter(function(comment) {
//     //               return comment.postId == this.id;
//     //             });
//     //         })


            
//     //   },


//   },

}
</script>


