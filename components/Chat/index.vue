<template>
    <section class="chatContainer">
        <ChatUserDescription/>
        <div class="chatContainer_messages">
            <ChatMessagesList />
            <ChatMessageForm/>
        </div>
    </section>
</template>




<style lang="scss">
    .chatConteiner {
        width: 900px;
        margin:0;
        padding:0;

        &_mesages{
            // position:relative;
            margin:0;
            padding: 0;
            background-color: #d7dfe7;
            width: 100%;
            height: 420px;
        }
    }  
</style>