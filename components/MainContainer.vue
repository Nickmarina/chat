<template>
  <div class="container">
    <Chat/>
    <UsersList/>
  </div>
</template>


// <script>
//   export default({
//    data:()=>({
//       users:[],
//       connectedUser:{},
//       // currentUser: {},
//    }),
//     mounted(){
//             const users =  this.$axios.$get(`/api/users`); 
//              if (localStorage.getItem('currentUser')){
//                this.currentUser = JSON.parse(localStorage.getItem('currentUser')) 
//             } else{
//                 const newUser = {name: `user ${Math.floor(Math.random() * 1000)}`}
//                 this.currentUser =  this.$axios.$post(`/api/users`, newUser)
//                  localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
//             }  
            
//             if (localStorage.getItem('connectedUser')){
//                 this.connectedUser = JSON.parse(localStorage.getItem('connectedUser')) 
//             } else{
//                 this.connectedUser = this.users[Math.floor(Math.random() * this.users.length)]
//                 localStorage.setItem('connectedUser', JSON.stringify(this.connectedUser))
//             } 

//            this.users = users.filter(user=> user._id !== this.currentUser._id)        
//       },
//   })

// </script>

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