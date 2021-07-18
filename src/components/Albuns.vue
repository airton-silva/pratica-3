<template>
  <div class="row">
    <div class="col-md-12">
            <h1>{{ msg }}</h1>

        <button class="btn btn-success" @click="getAllPosts">get Posts</button><br><br>

        <div class="card col-md-8 offset-2" v-for="post in posts" :key="post.id">
            <div class="card-body">
                <h5 class="card-title">Titulo : {{post.title}}</h5>
                <p>{{post.body}}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>



    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Albuns',
//   props: {
//     msg: String,
//   },
  data () {
    return {
      uriBase : 'https://jsonplaceholder.typicode.com/posts',
      albuns: []
    } 

  },

  methods: {
      getAllAlbuns: function () {
          axios.get(this.uriBase)
            .then(result =>{
                this.albuns = result.data
            })     
      },
    //   getByIdPosts: function () {
    //       axios.get(this.uriBase/'')
    //         .then(result =>{
    //             this.posts = result.data
    //         })     
    //   }
  }
}
</script>


