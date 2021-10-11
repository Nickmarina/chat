export const state = () =>({
    users:[],
});

export const mutations = {
    setUsers(state, users){
        state.users = users;
    },
};

export const actions ={
    async fetchUsers({commit}){
        const users =  await this.$axios.$get(`/api/users`);
        console.log( `USERSSSSSSS: ${users}`)
        commit('setUsers', users);
    },
}

export const getters ={
    getUsers: state => state.users,
}