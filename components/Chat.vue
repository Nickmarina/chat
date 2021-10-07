<template>
    <div class="chat_container">
        <div class="user_description">
            <img src="" alt="">
            <h2></h2>
            <p></p>
        </div>
        <div class="chat">
            <ul class="chat_list"></ul>
            <form class="message_form">
                <input class="message_input" placeholder="Start chatting!" required/>
                <button class="message_btn" type="submit">Send a message</button>
            </form>
        </div>
    </div>
</template>

<style>
    .chat-conteiner{
        width: 900px;
        margin:0;
        padding:0;
    }
    .user_description{
        height: 150px;
        width:900px;
    }

    .chat{
        margin:0;
        padding: 0;
        background-color: #d7dfe7;
        width: 100%;
        height: 420px;
    }

    .chat_list{
        margin:0;
        margin-bottom: 10px;
        padding:0;
        padding: 5px;
        height:350px;
        overflow: auto;
    }

    .message_form{
        display: flex;
        justify-content: space-around;
        align-items:stretch;
    }
    .message_input{
        margin: 0;
        padding:0;
        padding-left: 5px;
        width: 700px;
    }
    .message_btn{
        margin:0; 
        padding:0;
        padding: 7px 15px;
        border-radius: 5%;
        background-color: #428bca;
        color: white;
        }
</style>