<script>
import PostService from '../PostService';
export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.post = await PostService.getPosts();
    }
    catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
}
</script>

<template>
<div class="container">
    <label class="default-margins" 
    for="create-post">What Do You Have To Say???</label>
    <input class="default-margins extra-padding" type="text" id="create-post" 
    v-model="text" placeholder="Make it good!">
    <button class="default-margins extra-padding post-button" 
    v-on:click="createPost">Post!</button>
    <h1>Latest Posts:</h1>
    <hr>
  <div class="extra-space"></div>
  <p class="error" v-if="error">{{ error }}</p>
  <div class="container">
    <div class="post" v-for="(post, index) in posts"
     v-bind:item="post"
     v-bind:index="index"
     v-bind:key="post._id"
     v-on:dblclick="deletePost(post._id)">
     {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()+1}/${post.createdAt.getFullYear()}` }}
    <p class="text">{{ post.text }}</p>
    </div>
  </div>
</div>
</template>

<style scoped>

.post-button {
  background-color: rgb(140, 206, 140)
}

.extra-space {
  margin: 2px;
  padding: 2px;
}

.default-margins{
  margin-right: 10px;
}

.extra-padding {
  padding: 5px;
}
div.container {
  max-width: 800px;
  margin: 5px auto;
}

p.error {
  border: 1px solid red;
  background-color: maroon;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 3px solid dodgerblue;
  border-radius: 2px;
  background-color: rgb(32, 31, 30);
  color: greenyellow;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: black;
  font-size: 13px;
}

p.text {
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 0;
  color: whitesmoke;
}
</style>
