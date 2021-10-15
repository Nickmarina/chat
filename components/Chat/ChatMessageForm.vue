<template>
        <form class="messageForm" @submit.prevent="onSubmit()">
                <p class="messageForm_typing">{{typing}}</p>
                <input class="messageForm_input" placeholder="Start chatting!" v-model=value required/>
                <button class="messageForm_btn" type="submit">Send a message</button>
        </form>
</template>

<script>

export default {
    data:()=>({
        value: '',
        text: '',
        typing:'',
        currentUser:{},
        inervalId : '',
    }),
    watch:{
        value(){
            this.value.length<2 && this.value[0]===" "? this.value='' :this.value
        }
    },
    methods:{
        async onSubmit(){
            this.text= this.value
            this.value=''
            this.currentUser = await JSON.parse(localStorage.getItem('currentUser'))
            const userMessage = {
                sender_id:  this.currentUser._id,
                recipient_id:  this.$store.getters.connectedUser._id,
                message: this.text,
                sender_name:  this.currentUser.name,
                date: new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
            }

            await this.$axios.$post(`/api/messages`, userMessage)
            await this.$store.dispatch('getMessages', this.currentUser)

            if(this.$store.getters.connectedUser.name ==='Echo bot'){
                this.typing = `${this.$store.getters.connectedUser.name} is typing...`
                this.bot(this.$store.getters.connectedUser);         
            }
            if(this.$store.getters.connectedUser.name ==='Reverse bot'){
                const user = this.$store.getters.connectedUser
                this.typing = `${user.name} is typing...`
                this.text = this.text.split('').reverse().join('')
                setTimeout(()=>this.bot(user),3000)              
            }

            if(this.$store.getters.connectedUser.name ==='Spam bot'){
                // this.typing = `${this.$store.getters.connectedUser.name} is typing...`
                const user = this.$store.getters.connectedUser.name
                this.text ="Yep, I did it 😄"
                const time = Math.floor(Math.random()*(120000-10000)+10000)
                setInterval(()=> this.bot(user), time)
            }
        },

        async bot(sender){
             const botMessage ={
                    sender_id: sender._id,
                    recipient_id:this.currentUser._id,
                    message: this.text,
                    sender_name:sender.name,
                    date: new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
                }
                await this.$axios.$post(`/api/messages`, botMessage)
                await this.$store.dispatch('getMessages', this.currentUser)
                this.typing=""      
        }
    }
}
</script>

<style lang="scss" scoped>

 .messageForm{
        position:relative;
        display: flex;
        justify-content: space-around;
        align-items:stretch;

        &_typing{
            position: absolute;
            top:-40px;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
            padding:0;
            color:#428bca;
        };
        &_input{
            margin: 0;
            padding:0;
            padding-left: 5px;
            width:300px;         
            border: 1px solid #428bca;

             @media screen and (min-width: 1200px){
                   width: 700px;
             }
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