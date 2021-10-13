<template>
      <div class="userDescription">
            <img :src="this.$store.getters.connectedUser.avatar" alt="user" width=170, height=100% class="userDescription_avatar"> 
            <div>
                <h2>{{this.$store.getters.connectedUser.name}}</h2>
                <p>{{this.$store.getters.connectedUser.description}} 😄 ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum, maxime quod sapiente hic quas tempore doloribus, natus ratione iusto a voluptatum esse unde ut soluta necessitatibus dolor laborum ab!</p>
            </div>
        </div>
</template>


<style scoped lang='scss'>
    .userDescription{
        display:flex;
        height: 150px;
        width:900px;
        background-color: #becbd9;

        &_avatar{
            margin-right: 20px;
        }
    }
</style>