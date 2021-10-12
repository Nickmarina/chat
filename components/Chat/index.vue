<template>
    <section class="chatContainer">
        <ChatUserDescription v-bind:connectedUser="connectedUser"/>
        <div class="chatContainer_messages">
            <ChatMessagesList v-bind:messages="filteredMessages" v-bind:currentUser="currentUser"/>
            <ChatMessageForm v-bind:messages="filteredMessages" v-bind:connectedUser="connectedUser" v-bind:currentUser="currentUser"/>
        </div>
    </section>
</template>


<script>
    export default({
        data: () => ({
        messages: [],
        filteredMessages:[],
        currentUser:{},
        connectedUser:{}
    }),
        async mounted(){
            if(localStorage.getItem('currentUser')){
                 this.currentUser= JSON.parse(localStorage.getItem('currentUser')) 
                 this.messages = await this.$axios.$get(`/api/messages?id=${this.currentUser._id}&botId=bot`) 
            } else{
                this.messages = await this.$axios.$get(`/api/messages?id=bot`)
                const newUser = {name: `user ${Math.floor(Math.random() * 1000)}`}
                this.currentUser = await this.$axios.$post(`/api/users`, newUser)
                localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
            }   
           this.connectedUser = JSON.parse(localStorage.getItem('connectedUser')) 
           this.filteredMessages = this.messages.filter(message =>{
                return  message.sender_id ===this.connectedUser._id || message.recipient_id === this.connectedUser._id 
            })
        },        
    })
</script>


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