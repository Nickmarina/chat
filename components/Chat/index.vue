<template>
    <section class="chatContainer">
        <ChatUserDescription/>
        <div class="chatContainer_messages">
            <ChatMessagesList/>
            <ChatMessageForm/>
        </div>
    </section>
</template>

// <script >
// export default {
//     // async asyncData({$axios}){
//     //     const messages = await $axios.$get(`/api/messages`)
//     //     return {messages}
//     // }
//     // data: () => ({
//     //     messages: []
//     // }),
//     // async mounted(){
//     //     this.messages = await this.$axios.$get(`/api/messages`)  
//     //     console.dir(this.messages)
//     // },
// //     methods: {
// //   open() {
// //     this.$store.dispatch('this.getEventAlbum');
// //   },
// //   async getEventAlbum(store) {
// //     console.log('album action');
// //     const response = await Axios.get(url);
// //     store.commit('storeEventAlbum', response.data.results);
// //   }
// // }
// //     props: {
// //         messages: Array,
// //     //     imgUrl: String,
// //     //     userName: String
// //      },
// //   actions: {
//     // async getMessages ({$axios, $config}) {
//     //   const messages = await this.$axios.$get(`/messages`)
//     // return {messages}
//     // }
// //   }

// // }
// </script>


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