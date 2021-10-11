<template>
    <section class="users">
        <button type="button" @click.prevent="onOnline()" class="btn" v-bind:class="{btn_active: onlineList}">Online</button>
        <button type="button" @click.prevent="onAll()" class="btn"  v-bind:class="{btn_active: allList}">All</button>
         <ul class="users_list">
                <li  v-for="user of users" :key="user._id" class="users_list_item">
                    <a href="" class="users_list_link" @click.prevent="onActiveChat(user)">
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
    </section>
</template>

<script>
    export default{
       
        data: () => ({
            allUsers:[],
            filteredUsers:[],
            users: [],
            onlineList: false,
            allList: true,
        }),

        async mounted(){
            this.allUsers = await this.$axios.$get(`/api/users`); 
            this.users = this.allUsers;
            this.allList = true;
            this.onlineList=false;
        },

        methods:{
            onOnline(){
               this.filteredUsers = this.allUsers.filter(user => user.online === true);
               this.users = this.filteredUsers;
               this.onlineList = true;
               this.allList = false;
            },
            onAll(){
                this.users= this.allUsers;
                this.allList = true;
                this.onlineList=false;
            },

            onActiveChat(user){
                // const user = {id, name, description, avatar}
                // console.log(user)
                localStorage.setItem('activeUser', JSON.stringify(user))
            }
        }
    }
</script>

<style scoped lang="scss">
.users{ 
   width: 300px;
   height: 570px;
   background-color:white;
   margin-left: auto; 

    &_list{
        height:510px;
        list-style:none;
        margin:0;
        padding:0;
        padding-top: 10px;
        overflow: auto;

        &_item{
            padding:0;
            margin-bottom: 10px;
        }

        &_link{
            display: flex;
            justify-content: space-evenly;
            align-items:center;
            margin:0;
            padding:0;
            text-decoration:none;
            background-color:white;

            // &_active{
            //     background-color: #d7dfe7;
            // }
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
    width:148px;
    margin:0;
    padding:15px;
    border: 0.2px solid gray;
    border-top:none;
    background-color: #d7dfe7;

    &_active{
        border: none;
        background-color: white;
    }
}
</style>


// STORE
 // async fetch({store}){
        //     if(store.getters['users/users'].length === 0){
        //       const users = await store.dispatch('users/fetchUsers')
        //       console.log(users)
        //     }
        // },
        // data:{
        //     users:[]
        // }
        // computed:{
        //     users(){
        //         return this.$store.getters['users/users']
        //     }
        // }