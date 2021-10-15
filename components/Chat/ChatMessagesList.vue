<template>
<!-- <ul  class="chatList"></ul> -->
    <ul class="chatList">
                <li class="msg" v-for="message of this.$store.getters.messages" :key="message._id"  v-bind:class="{msg_sendMessage: sendMessage}">
                    <div v-bind:class="{msg_info_sendMessage: sendMessage}" class="msg_info">
                         <h3 class="msg_infoName">{{message.sender_name}}</h3>
                        <span class="msg_infoTime">{{message.date}}</span>
                    </div>
                   
                    <p class="msg_text"> {{message.message}} </p>
                    <p class="seenInfo_active" > Seen {{message.date}}</p>
                    <!-- <p class="seenInfo" v-bind:class="{seenInfo_active: onSended(message)}"> Seen {{message.date}}</p> -->
                
                </li>
                
    </ul>
</template>

// <script >
export default ({
    data:()=>({
        name: "",
        sendMessage: false,
        seenInfo:Date.now(),
        currentUser: {},
    }),
    async mounted() {
        this.currentUser = await JSON.parse(localStorage.getItem('CurrentUser'))
    },
    methods:{
        // onSended(message){
        //    message.sender_id === this.currentUser.sender_id ?true :false
        // }
    }



})

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
    position:relative;
    background-color: #f4f8fb;
    max-width: 650px;
    margin-bottom: 20px;
    margin-left:10px;
    margin-right:10px;
    border-radius: 15px;
    border-bottom-left-radius: 0;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.47);
  
        &_sendMessage{
            border-bottom-left-radius: 15px;  
            margin-left:auto;
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

}
.seenInfo{
display:none;
    &_active{
    display:inline;
    color: gray;
    position: relative;
    bottom: -17px;
    left:10px;
    margin:0;
    padding:0;
    font-size:13px;
    }
}

</style>    