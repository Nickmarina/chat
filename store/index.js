export const state = () =>({
    users:[],
    // connecredUser:{},
    // currentUser:{},
});

export const mutations = {
    setUsers(state, users){
        state.users = users;
    },

    // setConnectedUser(state, connectedUser){
    //     state.connectedUser = connectedUser;
    // },

    // setCurrentUser(state, currentUser){
    //     state.currentUser = currentUser;
    // }
};

export const actions ={
    async fetch({commit}){
        const users =  await this.$axios.$get( `http://localhost:5000/users`);
        console.log( `USERSSSSSSS: ${users}`)
        commit('setUsers', users);
    },

    // async getConnectedUser({commit}){
    //     const connectedUser = 
    // }
}

export const getters ={
    users: state => state.users,
}