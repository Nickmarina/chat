<template>
    <form class="messageForm">
            <input class="messageForm_input" placeholder="Start chatting!" required/>
            <button class="messageForm_btn" type="submit">Send a message</button>
    </form>
</template>

<style lang="scss" scoped>
 .messageForm{
    //  position:absolute;
    //  bottom:0;
    //  left:0;
        display: flex;
        justify-content: space-around;
        align-items:stretch;

        &_input{
            margin: 0;
            padding:0;
            padding-left: 5px;
            width: 700px;
        }

        &_btn{
            margin:0; 
            padding:0;
            padding: 7px 15px;
            border-radius: 5%;
            background-color: #428bca;
            color: white;
        }
    }
</style>