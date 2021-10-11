<template>
<!-- <ul  class="chatList"></ul> -->
    <ul class="chatList">
                <li class="msg" v-for="message of messages" :key="message._id">
                    <div class="msg_info">
                         <h3 class="msg_infoName">Name</h3>
                        <span class="msg_infoTime">{{new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}}</span>
                    </div>
                   
                    <p class="msg_text"> {{message.message}} 😄</p>
                </li>
    </ul>
</template>

<script >
export default {
    data: () => ({
        messages: []
    }),
    async mounted(){
        this.messages = await this.$axios.$get(`/api/messages?id=bot`)  
        console.dir(this.messages)
    },
    props:['todos']
}
</script>

<style lang="scss" scoped>
 .chatList{
        margin:0;
        margin-bottom: 10px;
        padding: 10px;
        height:350px;
        overflow: auto;
        background-color: #d7dfe7;
        list-style:none;
        }

    .msg {
    background-color: #f4f8fb;
    max-width: 650px;
    margin-bottom: 15px;
    margin-left:10px;
    margin-right:10px;
    border-radius: 15px;
    border-bottom-left-radius: 0;
        &_sendMessage{
          border-bottom-left-radius: 15%;  
            flex-direction: row-reverse;
            border-bottom-right-radius: 0;
        }

        &_info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
            background-color: #becbd9;

            &_sendMessage{
                background-color: #f0cbb3;
            }
        };
        &_infoName {
        margin:0;
        padding:0;
        margin-left: 20px;
        font-size:15px;
        font-weight:600;
        };
        &_infoTime {
        margin-right:20px;
        color: gray;
        font-size:12px;
        };

        &_text{
            margin:0;
            padding: 10px;
        }

// для відправлених повідомлень

}

</style>    