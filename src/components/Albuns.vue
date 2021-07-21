<template>
  <div class="row">
    <div class="col-md-12">
            <h1>{{ msg }}</h1>

        <button class="btn btn-success" @click="getAllAlbum()">get Albuns</button><br><br>
                    <!-- {{ fotos }} -->
        <div class="card-columns offset-2 col-md-8">
          <div class="card"  v-for="album in albuns" :key="album.id">
            <!-- <img class="card-img-top" :src="foto.url" alt="Card image cap"> -->
              <div class="card-body" style="height:300px">
                 <div v-for="user in users" :key="user.id">
                    <div v-if="user.id ==album.userId" >
                       <p><strong>User/Autor: </strong>{{user.name}}</p>
                       <span class="col-md-4"><strong>Email: </strong>{{user.email}}</span>
                    </div>
                 </div>
                 
                <h3 class="card-title">{{album.title}}</h3><br>
               
                <a href="#" class="btn btn-primary" @click.prevent="getAllFotos()">Abrir Fotos</a>
              </div>

            <div class="card  col-md-4" style="width: 18rem;"  v-for="foto in fotos" :key="foto.id">
              <div v-if="album.id == foto.albumId">
                 <img class="card-img-top" :src="foto.url" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

            </div>
          </div>
          <br>

            
        </div>
        
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Albuns',
  props: {
    msg: String,
  },
  data () {
    return {
      uriBase : 'https://jsonplaceholder.typicode.com/albums',
      uriFotos: 'https://jsonplaceholder.typicode.com/photos',
      uriUser :'https://jsonplaceholder.typicode.com/users',
      albuns: [],
      fotos:[],
      users:[],
  
    } 

  },

  methods: {
      getAllAlbum() {

          axios.all([
            axios.get(this.uriBase),
            axios.get(this.uriUser),
          ]).then(axios.spread(( ResAlbuns, ResUser)=> {
            this.albuns = ResAlbuns.data
            this.users = ResUser.data
          }))            
            
      },

      getAllFotos (){
        
          axios.get(this.uriFotos)
            .then(result =>{
                this.fotos = result.data
                // this.users = this.users.filter(function(user) {
                //   return user.postId == post.id;
                 
                // });
                //console.log(this.users)
            })


      
      },


  },

}
</script>


