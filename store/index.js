export const state = () =>({
    users:[],
    connectedUser:{},
    messages:[],
});

export const mutations = {
    setUsers(state, users){
        state.users = users;
    },

    setConnectedUser(state, connectedUser){
        state.connectedUser = connectedUser;
    },

    setMessages(state, messages){
        state.messages = messages;
    }
};

export const actions ={
    async getUsers({commit}){
        const allUsers =  await this.$axios.$get(`/api/users`);

        const users = allUsers.filter(user =>{
             if(localStorage.getItem('currentUser')){
                 const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                 return user._id !== currentUser._id
             } else{
                 return user;
             }
         })
        commit('setUsers', users);
    },

    async getConnectedUser({commit}, user){
        const connectedUser =  await this.$axios.$get( `/api/users/${user._id}`)
        commit('setConnectedUser', connectedUser)
    },

    async getMessages({commit, state},currentUser){
        const allMessages =  await this.$axios.$get(`/api/messages?id=${currentUser._id}&botId=bot`)
        const filteredMessages = await allMessages.filter(message =>
                    message.sender_id === state.connectedUser._id || message.recipient_id === state.connectedUser._id 
        )
        commit('setMessages', filteredMessages)
    }
}

export const getters ={
    users: state => state.users,
    connectedUser: state => state.connectedUser,
    messages: state => state.messages,
}