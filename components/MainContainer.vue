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

    // async fetch ({ store }){
    //       const localStorageUser: string|null = localStorage.getItem('currentUser');
    //   if(typeof localStorageUser === null){
    //       const user:NewUserName = {name: `user ${Math.floor(Math.random() * 1000)}`};
    //       await store.dispatch.getCurrentUser('user');
    //       const currentUser:User = store.getters.currentUser;
    //       localStorage.setItem('currentUser', JSON.stringify(currentUser));
    //   }
    //   await store.dispatch('getUsers');
    //   const randomUser:User =  store.getters.users[Math.floor(Math.random() * store.getters.users.length)];
    //   await store.dispatch('getConnectedUser', randomUser);  
    //   if(typeof localStorageUser === 'string'){
    //       const currentUser:User = JSON.parse(localStorageUser)
    //     await store.dispatch('getMessages',currentUser)
    //   }
    //  }


<style lang='scss'>
html{
  background-color:#586670 ;
  box-sizing: border-box;
}

.container{
   margin: auto;
   background-color: #d7dfe7;
   @media screen and (max-width: 1199px){
      max-width:800px;
   }
    @media screen and (min-width: 1200px){
      display:flex;
      width: 1200px;
      height: 570px;
  }
  
}
</style>