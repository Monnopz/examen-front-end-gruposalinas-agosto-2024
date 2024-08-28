<script setup>
import { storeToRefs } from 'pinia'

import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

import ORCReadOnlyForm from '@/components/ORCReadOnlyForm.vue'

import { useTestStore } from '@/stores/test'

const testStore = useTestStore();

const { ORCForm } = storeToRefs(testStore);

</script>

<template>
    <div class="lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
            <div class="flex flex-col">
                <div class="flex flex-col gap-2">
                    <label for="orc-id">ID Sistema ORC´s</label>
                    <InputText :value="ORCForm.proyectID" id="orc-id" placeholder="0" disabled aria-describedby="orc-id-help" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="proyect-name">Nombre del proyecto</label>
                    <InputText v-model="ORCForm.proyectName" id="proyect-name" aria-describedby="proyect-name-help" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="proyect-description">Descripción del proyecto</label>
                    <InputText v-model="ORCForm.proyectDescription" id="proyect-description" aria-describedby="proyect-description-help" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="proyect-goals">Objetivos a los que contribuye el proyecto</label>
                    <Select optionLabel="proyect-goals" aria-describedby="proyect-goals-help" />
                </div>
                <div class="grid grid-cols-2">
                    <div class="flex flex-col gap-2">
                        <label for="start-date">Fecha Inicio</label>
                        <DatePicker v-model="ORCForm.startDate" id="start-date" :manualInput="false" dateFormat="dd/mm/yy" showIcon fluid iconDisplay="input" aria-describedby="start-date-help">
                            <template #inputicon="slotProps">
                                <i class="pi pi-clock" @click="slotProps.clickCallback" />
                            </template>
                        </DatePicker>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="end-date">Fecha Fin</label>
                        <DatePicker v-model="ORCForm.endDate" id="end-date" :manualInput="false" dateFormat="dd/mm/yy" showIcon fluid iconDisplay="input" aria-describedby="end-date-help">
                            <template #inputicon="slotProps">
                                <i class="pi pi-clock" @click="slotProps.clickCallback" />
                            </template>
                        </DatePicker>
                    </div>
                </div>
            </div>
            <div>
                <Button label="Prioridad del proyecto" rounded aria-describedby="proyect-priority-help" />
            </div>
        </div>
        <ORCReadOnlyForm />
    </div>
    <div class="lg:grid lg:grid-cols-3">
        <div class="flex flex-col gap-2">
            <label for="proyect-lead">Responsables del proyecto</label>
            <Select optionLabel="proyect-lead" placeholder="Agregar Responsable del proyecto..." aria-describedby="proyect-lead-help" />
        </div>
        <div class="flex flex-col gap-2">
            <label for="proyect-admin">Administrador</label>
            <Select optionLabel="proyect-admin" placeholder="Agregar Administrador..." aria-describedby="proyect-admin-help" />
        </div>
        <div class="flex flex-col gap-2">
            <label for="proyect-extras">Involucrados <span class="italic">(opcional)</span></label>
            <Select optionLabel="proyect-extras" placeholder="Agregar Involucrados..." aria-describedby="proyect-extras-help" />
        </div>
    </div>
    <div>
        <Button label="Agregar etapa" rounded aria-describedby="add-state-help" />
    </div>
</template>


<style scoped>

</style>