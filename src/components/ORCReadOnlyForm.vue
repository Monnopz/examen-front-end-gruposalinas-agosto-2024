<script setup>
import { storeToRefs } from 'pinia'

import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'

import { useTestStore } from '@/stores/test'

const testStore = useTestStore();

const { ORCForm } = storeToRefs(testStore);

</script>

<template>
    <Card>
        <template #content>
            <div class="flex flex-col">
                <div class="flex flex-row">
                    <div class="flex flex-col gap-2">
                        <label for="proyect-id">ID Proyecto</label>
                        <InputText id="proyect-id" v-model="ORCForm.proyectID" placeholder="Escribe el número de ID Proyectos Sipres" aria-describedby="orc-id-help" />
                    </div>
                <Button label="Buscar proyecto" rounded aria-describedby="proyect-find-help" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="proyect-name">Nombre del proyecto</label>
                    <InputText :value="ORCForm.proyectName" id="proyect-name" disabled aria-describedby="proyect-name-help" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="proyect-description">Descripción del proyecto</label>
                    <InputText :value="ORCForm.proyectDescription" id="proyect-description" disabled aria-describedby="proyect-description-help" />
                </div>
            </div>
            <div class="grid grid-cols-3">
                <div class="flex flex-col gap-2">
                    <label for="created-date">Fecha de creación</label>
                    <DatePicker v-model="ORCForm.createdDate" id="created-date" :manualInput="false" dateFormat="dd/mm/yy" showIcon fluid iconDisplay="input" placeholder="dd/mm/aaaa" disabled aria-describedby="created-date-help">
                        <template #inputicon="slotProps">
                            <i class="pi pi-clock" @click="slotProps.clickCallback" />
                        </template>
                    </DatePicker>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="proyect-capex">Capex</label>
                    <InputText :value="ORCForm.proyectCapex" id="proyect-capex" disabled aria-describedby="proyect-capex-help" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="proyect-opex">Opex</label>
                    <InputText :value="ORCForm.proyectOpex" id="proyect-opex" disabled aria-describedby="proyect-opex-help" />
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class="flex flex-col gap-2">
                    <label for="proyect-pilar">Pilar del proyecto</label>
                    <InputText v-model="ORCForm.proyectPilar" id="proyect-pilar" aria-describedby="proyect-pilar-help" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="proyect-investment">Clasificación Comité de Inversión</label>
                    <InputText v-model="ORCForm.proyectInvestment" id="proyect-investment" aria-describedby="proyect-investment-help" />
                </div>
            </div>
        </template>
    </Card>
</template>


<style scoped>

</style>