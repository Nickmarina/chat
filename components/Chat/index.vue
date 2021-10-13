<template>
    <section class="chatContainer">
        <ChatUserDescription/>
        <div class="chatContainer_messages">
            <ChatMessagesList />
            <ChatMessageForm  v-bind:currentUser="currentUser"/>
        </div>
    </section>
</template>


<script>
    export default({
         props:{
            currentUser:{
                type: Object,
            },
         },
        async mounted(){
            // await this.$store.dispatch('getMessages')
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