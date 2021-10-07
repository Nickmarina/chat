<template>
    <div class="users">
        <button>Online</button>
        <button>All</button>
        <ul class="users_list" >
            <li class="users_list_item">user1</li>
            <li class="users_list_item">user 2</li>        
        </ul>
    </div>
</template>

<script>
    export default{
        name: 'UsersList',
    }
</script>

<style>
.users{ 
   width: 300px;
   height: 100%;
   background-color:white;
   margin-left: auto; 
}

button{
    width:148px;
    margin:0;
    padding:15px;
    border: none;
}

.users_list{
    list-style:none;
    margin:0;
    padding:0;
    margin-top: 15px;
}
.users_list_item{
    margin-left: 15px;
    margin-bottom: 10px;
    padding-right: 10px;
}

</style>