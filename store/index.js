export const state = () =>({
    users:[],
    connectedUser:{},
    // currentUser:{},
    messages:{},
});

export const mutations = {
    setUsers(state, users){
        state.users = users;
    },

    setConnectedUser(state, connectedUser){
        state.connectedUser = connectedUser;
    },

    // setCurrentUser(state, currentUser){
    //     state.curentUser = currentUser;
    // },

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

    // async getCurrentUser({commit}){
    //     let currentUser;
    //     if(localStorage.getItem('currentUser')){
    //        const user = JSON.parse(localStorage.getItem('currentUser'));
    //        currentUser = await this.$axios.$get( `/api/users/${user._id}`);
    //     }else{
    //         const user = {name: `user ${Math.floor(Math.random() * 1000)}`};
    //         currentUser = await this.$axios.$post(`/api/users`, user);
    //         localStorage.setItem('currentUser', JSON.stringify(currentUser));
    //     }
    //     commit('setCurrentUser', currentUser)
    // },

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
    // currentUser: state => state.currentUser,
    messages: state => state.messages,
}