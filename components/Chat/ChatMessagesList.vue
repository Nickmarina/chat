<template>
<ul  class="chatList"></ul>
    <!-- <ul class="chat_list" v-for="message of messages" :key="message._id">
                <li>{{message.message}}</li>
            </ul> -->
</template>

<style lang="scss" scoped>
 .chatList{
            margin:0;
            margin-bottom: 10px;
            padding:0;
            padding: 5px;
            height:350px;
            overflow: auto;
            background-color: #d7dfe7;
        }
</style>    