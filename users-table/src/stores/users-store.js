import { defineStore } from 'pinia'
//https://retoolapi.dev/D6xLg4/data
export const useUsersStore = defineStore('counter', {
    state: () => {
        return {
            users: [],
            shownUsers: 'status=true',
        }
    },
    getters : {
        amountOfUsers: (users) => users.length
    },
    actions: {
        showAllUsers() {
            this.shownUsers = ''
        },
        showValidUsers() {
            this.shownUsers = 'status=true'
        },
        showNotValidUsers() {
            this.shownUsers = 'status=false'
        },
        async fetchUsers(shownUsers, page, limit) {
            try {
                const result = await fetch(`https://retoolapi.dev/D6xLg4/data?${shownUsers}&_page=${page}&_limit=${limit}`)
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