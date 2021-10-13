<template>
        <form class="messageForm">
                <p class="messageForm_typing">{{typing}}</p>
                <input class="messageForm_input" placeholder="Start chatting!" required v-model=value />
                <button class="messageForm_btn" type="submit" @click.prevent="onSubmit()">Send a message</button>
        </form>
</template>

<script>

export default {
    data:()=>({
        value: '',
        text: '',
        typing:'',
        currentUser:{}
    }),

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

            // console.log(userMessage)
            await this.$axios.$post(`/api/messages`, userMessage)
            await this.$store.dispatch('getMessages', this.currentUser)
            // this.messages.push(userSendedMessage)

            if(this.$store.getters.connectedUser.name ==='Echo bot'){
                this.typing = `${this.$store.getters.connectedUser.name} is typing...`
                this.bot();         
            }
            if(this.$store.getters.connectedUser.name ==='Reverse bot'){
                this.typing = `${this.$store.getters.connectedUser.name} is typing...`
                this.text = this.text.split('').reverse().join(''),
                setTimeout(()=>this.bot(),3000)              
            }

            if(this.$store.getters.connectedUser.name ==='Spam bot'){
                this.typing = `${this.$store.getters.connectedUser.name} is typing...`
                this.text ="Yep, I did it 😄"
                const time = Math.floor(Math.random()*(120000-10000)+10000)
                setInterval(()=> this.bot(), time)
            }
        },

        async bot(){
             const botMessage ={
                    sender_id: await this.$store.getters.connectedUser._id,
                    recipient_id: await this.currentUser._id,
                    message: this.text,
                    sender_name:await this.$store.getters.connectedUser.name,
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
            width: 700px;
            border: 1px solid #428bca;
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