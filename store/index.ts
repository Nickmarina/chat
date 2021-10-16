import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import  $axios  from '@nuxtjs/axios'

export interface User{
    _id: string,
    name: string,
    description: string,
    online: boolean,
    avatar: string

}

export interface Message{
    _id?:string,
    recipient_id: string,
    sender_id: string,
    message:string,
    sender_name:string,
    date:string
}



export interface MainState {
    users: User[],
    connectedUser: User,
    messages: Message[],
  }


export const state = (): MainState =>({
    users:[],
    connectedUser:{
        _id:"",
        name: "",
        description: "",
        online: false,
        avatar: ""
    },
    messages:[],
});

export const mutations: MutationTree<MainState> = {
    setUsers(state, users: User[]){
        state.users = users;
    },

    setConnectedUser(state, connectedUser: User){
        state.connectedUser = connectedUser;
    },

    setMessages(state, messages:Message[]){
        state.messages = messages;
    },
};

export const actions:  ActionTree<MainState, MainState> ={
    async getUsers({commit}){
        const allUsers:User[] =  await this.$axios.$get(`/api/users`);
        commit('setUsers', allUsers);
    },

    async getConnectedUser({commit}, user){
        const connectedUser=  await this.$axios.$get( `/api/users/${user._id}`)
        commit('setConnectedUser', connectedUser)
    },

    async getMessages({commit, state},currentUser){
        const allMessages: Message[] =  await this.$axios.$get(`/api/messages?id=${currentUser._id}&botId=bot`)
        const filteredMessages = await allMessages.filter(message =>
                message.sender_id === state.connectedUser._id || message.recipient_id === state.connectedUser._id 
        )
        commit('setMessages', filteredMessages)
    },

}

export const getters: GetterTree<MainState, MainState> ={
    users: state => state.users,
    connectedUser: state => state.connectedUser,
    messages: state => state.messages,
}