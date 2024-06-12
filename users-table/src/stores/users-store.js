import { defineStore } from 'pinia'
//https://retoolapi.dev/D6xLg4/data
export const useUsersStore = defineStore('counter', {
    state: () => {
        return {
            users: [],
        }
    },
    getters : {
        amountOfUsers: (users) => users.length
    },
    actions: {
        async fetchUsers(page, limit) {
            try {
                const result = await fetch(`https://retoolapi.dev/D6xLg4/data?_page=${page}&_limit=${limit}`)
                const data = await result.json()

                this.users = data
                console.log(data)
            }
            catch (err) {
                console.log(err)
            }
        }
    }
})