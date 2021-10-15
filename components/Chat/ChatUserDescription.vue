<template>
      <div class="userDescription">
            <img :src="this.$store.getters.connectedUser.avatar" alt="user" width=170, height=100% class="userDescription_avatar"> 
            <div class="userDescription_info">
                <h2>{{this.$store.getters.connectedUser.name}}</h2>
                <p>{{this.$store.getters.connectedUser.description}} 😄 ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum, maxime quod sapiente hic quas tempore doloribus, natus ratione iusto a voluptatum esse unde ut soluta necessitatibus dolor laborum ab!</p>
            </div>
        </div>
</template>


<style scoped lang='scss'>
    .userDescription{
        background-color: #becbd9;
      
        @media screen and (max-width:1199px){
            max-width:800px;
        }

        @media screen and (min-width: 1200px){
            display:flex;
            height: 150px;
            width:900px;
        }
        
        &_avatar{
            @media screen and (max-width:1199px){
                display: block;
                margin-left: auto;
                margin-right:auto;
             };
            @media screen and (min-width: 1200px){
                margin-right: 20px;
            }
        }

        &_info{
              @media screen and (max-width:1199px){
                display: block;
                margin-left: auto;
                margin-right:auto;
                max-width: 500px;
                text-align: center;
             }
        }
}
</style>