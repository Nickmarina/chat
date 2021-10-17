<template>
  <div class="container">
    <Chat/>
    <UsersList/>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import{User} from '~/store'
    type UserName = {
      name: string
    }

   export default Vue.extend({
     

    async mounted(){
        await this.$store.dispatch('getUsers');
        const currentUser: string| null = localStorage.getItem('currentUser')
        if(!currentUser){
           const user: UserName = {name: `user ${Math.floor(Math.random() * 1000)}`};
           const newUser:User = await this.$axios.$post(`/api/users`, user);
           localStorage.setItem('currentUser', JSON.stringify(newUser));
        }
        const randomUser:User= this.$store.getters.users[Math.floor(Math.random() * this.$store.getters.users.length)];
         await this.$store.dispatch('getConnectedUser', randomUser);
         if(typeof currentUser === 'string'){
          await this.$store.dispatch('getMessages',JSON.parse(currentUser))
        }
    }
  })
</script>

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