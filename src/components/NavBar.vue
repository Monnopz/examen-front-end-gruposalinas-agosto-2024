<script setup>

import Avatar from 'primevue/avatar'
import Menubar from 'primevue/menubar'

</script>

<template>
    <div class="card">
        <Menubar>
            <template #start>
                <div class="flex">
                    <img src="@/img/hamburguesa.svg" width="30" alt="hamburguesa-svg">
                    <img src="@/img/home.svg" width="30" class="ml-4"alt="home-svg">
                </div>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<style scoped>

</style>