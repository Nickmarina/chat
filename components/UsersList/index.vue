<template>
    <section class="users">
        <button type="button" @click.prevent="onOnline()" class="btn" v-bind:class="{btn_active: onlineList}">Online</button>
        <button type="button" @click.prevent="onAll()" class="btn"  v-bind:class="{btn_active: allList}">All</button>
         <ul class="users_list">
                <li  v-for="user of users" :key="user._id" class="users_list_item" >
                    <a href="" class="users_list_link" @click.prevent="onActiveChat(user)" v-bind:class="{'users_list_activeLink': user._id===$store.getters.connectedUser._id}">
                    <div class="user"> 
                        <img :src="user.avatar" alt="user" width="70" height="70" /> 
                        <span v-bind:class="{user_status_online: user.online}" class="user_status"></span>
                    </div>
                    <div class="userPreview">
                        <h3 class="userPreview_title">{{user.name}}</h3>
                        <p class="userPreview_decription">{{user.description}}</p>
                    </div>
                    </a>
                </li>
        </ul>
        <input class="users_search" placeholder="Search..."  v-model="value" /> 
    </section>
</template>

<script lang="ts">
   import Vue from 'vue'
    import{User,state} from '~/store'
    export default Vue.extend({
        data: () => ({
            allUsers: new Array<User>(),
            filteredUsers: new Array<User>(),
            users: new Array<User>(),
            onlineList: false,
            allList: true,
            activeUser: false,
            value:'',
            currentUser:{_id:''}
        }),
       async mounted(){
            await this.$store.dispatch('getUsers');
            const notFilteredUsers:Array<User>= await this.$store.getters.users
            if(notFilteredUsers.length>0){
                this.allUsers =notFilteredUsers.filter(user =>{
                    const currentUser: string| null = localStorage.getItem('currentUser')
                    if(typeof currentUser === 'string'){
                        this.currentUser= JSON.parse(currentUser);
                        return user._id !== this.currentUser._id
                    } else{
                        return user;
                    }
                });
                this.users = this.allUsers
            }
        },
        watch:{
            value(){
                if (this.value.length>0){
                    const normalizedName = this.value.toLowerCase();
                    return this.users = this.users.filter(user => user.name.toLowerCase().includes(normalizedName))
                }
                this.allList? this.users= this.allUsers :this.users = this.filteredUsers;;               
            }
        },
        methods:{
            onOnline():void{
               this.filteredUsers = this.allUsers.filter(user => user.online === true);
               this.users = this.filteredUsers;
               this.onlineList = true;
               this.allList = false;
               this.value='';
            },
            onAll():void{
                this.users= this.allUsers;
                this.allList = true;
                this.onlineList=false;
                this.value='';
            },
            async onActiveChat(user:User){
                await this.$store.dispatch('getConnectedUser', user);
                await this.$store.dispatch('getMessages', this.currentUser);
            },
        }
    })
</script>

<style scoped lang="scss">
.users{ 
   position: relative;
   max-width:500px;
   background-color:white;
   @media screen and (max-width: 1199px){
       margin-left: auto;
       margin-right: auto;
       margin-top: 20px;
       margin-bottom: 20px;
   }
   @media screen and (min-width: 1200px){
        margin-left: auto; 
        width: 300px;
        height: 570px;
   }
  
   &_search{
    @media screen and (max-width: 1199px){
        display: block;
        width:300px;
        margin-left: auto;
        margin-right: auto;
        padding:10px;
     }

    @media screen and (min-width: 1200px){
       position:fixed;
       bottom:9%;
       right:9%;
       width: 210px;
       padding:5px;
       border: 1px solid lightgray;
       border-radius: 5%;
    }
   }

    &_list{
        list-style:none;
        margin:0;
        margin-bottom: 5px;
        padding:0;
        padding-top: 10px;
       
        
        @media screen and (min-width: 1200px){
            height:470px;
            overflow: auto;
        }

        &_item{
            padding:0;
            margin-bottom: 10px;
        }

        &_link{
            display: flex;
            align-items:center;
            margin:0;
            padding:0;
            text-decoration:none;
            background-color:white;
            margin-left: 5px;
        }

        &_activeLink{
                background-color: #f8f8f8;
        }
    }
}

.user{
    position: relative;

    &_status{
        position: absolute;
        bottom:0;
        right: -7px;
        height: 15px;
        width:15px;
        border-radius: 50%;
        border:none;
        background-color: #de2f2f;

        &_online{
            background-color: #2bcf3c;
        }
    }
}

.userPreview{
    margin-left: 20px;
    &_title{
        margin:0;
        padding:0;
        font-size:17px;
        color: black;
    };

    &_decription{
        margin:0;
        padding: 0;
        font-size:15px;
        color:darkslategrey;
    }
}

.btn{
    margin:0;
    padding:15px;
    border: 0.2px solid gray;
    
    @media screen and (max-width: 1199px){
        display: block;
        min-width:300px;
        max-width:500px;
        margin-left: auto;
        margin-right:auto;
        margin-bottom:15px;
    }

    @media screen and (min-width: 1200px){
        width:148px;
        border-top:none;
        background-color: #d7dfe7;
    }

    &_active{
        border: none;
        background-color: white;
    }
}
</style>

      function onAll() {
        throw new Error('Function not implemented.');
      }

      function onAll() {
        throw new Error('Function not implemented.');
      }
