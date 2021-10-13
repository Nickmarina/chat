<template>
  <div class="container">
    <Chat/>
    <UsersList/>
  </div>
</template>

<script>

export default ({

    async mounted(){
    if(!localStorage.getItem('currentUser')){
          const user = {name: `user ${Math.floor(Math.random() * 1000)}`};
          const currentUser = await this.$axios.$post(`/api/users`, user);
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
      await this.$store.dispatch('getUsers');
      const randomUser =  this.$store.getters.users[Math.floor(Math.random() * this.$store.getters.users.length)];
      await this.$store.dispatch('getConnectedUser', randomUser);
      await this.$store.dispatch('getMessages',JSON.parse(localStorage.getItem('currentUser')))
    }
})
</script>


<style>
html{
  background-color:#586670 ;
  box-sizing: border-box;
}

.container{
  display:flex;
  margin: auto;
  width: 1200px;
  height: 570px;
  background-color: #d7dfe7;
 
}
</style>