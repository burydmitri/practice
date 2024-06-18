import { defineStore } from 'pinia'
import { UsersDataService } from "../helpers/data-service";

export const useUsersStore = defineStore('users', {
    state: () => {
        return {
            users: [],
            shownUsers: 'true',
        }
    },
    actions: {
        showAllUsers() {
            this.shownUsers = ''
        },
        showValidUsers() {
            this.shownUsers = 'true'
        },
        showNotValidUsers() {
            this.shownUsers = 'false'
        },
        async fetchUsers(params) {
            try {
                const response = await UsersDataService.getAll(params)
                const { data } = response

                this.users = data
            }
            catch (e) {
                console.log(e)
            }
        }
    }
})