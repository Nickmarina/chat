<template>
      <div class="userDescription">
            <img :src="connectedUser.avatar" alt="user" width=170, height=100% class="userDescription_avatar"> 
            <div>
                <h2>{{connectedUser.name}}</h2>
                <p>{{connectedUser.description}} 😄 ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum, maxime quod sapiente hic quas tempore doloribus, natus ratione iusto a voluptatum esse unde ut soluta necessitatibus dolor laborum ab!</p>
            </div>
        </div>
</template>

<script>
export default({
   props:{
       connectedUser:{
           type:Object,
           required:true,
       }
   }
})
</script>

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