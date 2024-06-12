<template>
    <Main>
        <div class="d-flex flex-column justify-space-between h-100">
            <div>
                <div class="d-flex justify-space-between align-center mb-6">
                    <div class="d-flex align-center">
                        <h1 class="text-h6 mr-4">Обработанные</h1>  
                        <v-btn variant="flat" icon="mdi-reload" />
                    </div>
                    <v-btn class="font-weight-light text-subtitle-2 px-16" color="primary" variant="flat" append-icon="mdi-menu-down">Действия</v-btn>
                </div>
            
                <v-container class="table-grid-7 ">
                    <div class="mb-5">
                        <v-row class="mb-4">
                            <v-col
                                v-for="attribute of attributes"
                                :key="attribute"
                                class="text-body-1 font-weight-bold"
                            >
                                {{ attribute }}
                            </v-col>
                        </v-row>
                        <v-divider />
                    </div>
                    <div
                        v-for="n in 3"
                        :key="n"
                        class="mb-5"
                    >
                        <v-row class="mb-6">
                            <v-col 
                                v-for="ni in 7"
                                :key="ni"
                                class="text-body-2"
                            >
                                Lorem Ipsum
                            </v-col >
                        </v-row>
                        <v-divider />
                    </div>
                </v-container>
            </div>

            <div>
                <v-divider />
                <div class="d-flex align-center justify-end pt-8">
                    <span class="text-body-2 montserrat mr-7">Количество элементов на странице:</span>
                    <select 
                        class="text-body-2 montserrat pr-3 my-select"
                    >
                        <option 
                            v-for="num in amountOfElements" 
                            :key="num"
                            :value="num"
                        >{{ num }}</option>
                    </select>
                    <v-icon class="" color="#A0A0A0" icon="mdi-menu-down"/>
                    <v-pagination :length="10"></v-pagination>
                </div>
            </div>
        </div>
        
    </Main>
</template>


<script setup>
    import Main from './Main.vue'

    const attributes = ['Имя', 'Фамилия', 'Компания', 'Специальность', 'Телефон', 'E-mail', 'Интересы']
    const amountOfElements = [10, 7, 5, 3]
</script>