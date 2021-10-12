<template>
    <form class="messageForm">
            <input class="messageForm_input" placeholder="Start chatting!" required v-model=value />
            <button class="messageForm_btn" type="submit" @click.prevent="onSubmit()">Send a message</button>
    </form>
</template>

<script>

export default {
    data:()=>({
        value: '',
        text: '',
    }),
    props: {
        messages:{
            type:Array,
            required:true,
        },
       connectedUser:{
           type:Object,
           required:true,
       },
       currentUser:{
           type:Object,
           required:true,
       }
    },
    methods:{
        async onSubmit(){
            this.text= this.value
            this.value=''
            const userMessage = {
                sender_id: this.currentUser._id,
                recipient_id: this.connectedUser._id,
                message: this.text,
                sender_name:this.currentUser.name,
                date: new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
            }
            const userSendedMessage = await this.$axios.$post(`/api/messages`, userMessage)
            this.messages.push(userSendedMessage)

            if(this.connectedUser.name ==='Echo bot'){
                this.bot();         
            }
            if(this.connectedUser.name ==='Reverse bot'){
                this.text = this.text.split('').reverse().join(''),
                setTimeout(()=>this.bot(),3000)              
            }

            if(this.connectedUser.name ==='Spam bot'){
                this.text ="Yep, I did it 😄"
                const time = Math.floor(Math.random()*(120000-10000)+10000)
                setInterval(()=> this.bot(), time)
            }
        },

        async bot(){
             const botMessage ={
                    sender_id: this.connectedUser._id,
                    recipient_id: this.currentUser._id,
                    message: this.text,
                    sender_name:this.connectedUser.name,
                    date: new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
                }
                const botSendedMessage = await this.$axios.$post(`/api/messages`, botMessage)
                this.messages.push(botSendedMessage)       
        }
    }
    // setup() {
        
    // },
}
</script>

<style lang="scss" scoped>
 .messageForm{
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