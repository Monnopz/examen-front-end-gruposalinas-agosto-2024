import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', () => {

  const ORCForm = reactive({
    proyectID: null,
    proyectName: null,
    proyectDescription: null,
    proyectGoals: null,
    startDate: null,
    endDate: null,
    createdDate: null,
    proyectCapex: null,
    proyectOpex: null,
    proyectPilar: null,
    proyectInvestment: null,
  })

  return { 

    // State
    ORCForm

  }
})
