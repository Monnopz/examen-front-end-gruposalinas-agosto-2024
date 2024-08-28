<script setup>
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

import NavBar from '@/components/NavBar.vue'
import ORCEditableForm from '@/components/ORCEditableForm.vue'
</script>

<template>

  <header>
    <NavBar />
  </header>

  <main>
    <!-- <Tabs value="0">
      <TabList>
          <Tab value="0" as="div">
              <i class="pi pi-home" />
              <span class="font-bold whitespace-nowrap">DATOS</span>
          </Tab>
          <Tab value="1" as="div">
              <i class="pi pi-home" />
              <span class="font-bold whitespace-nowrap">PLAN</span>
          </Tab>
      </TabList>
      <TabPanels>
          <TabPanel value="0" as="div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TabPanel>
          <TabPanel value="1" as="div">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </TabPanel>
      </TabPanels>
    </Tabs>
    <br>
    <br> -->

    <ORCEditableForm />

  </main>

</template>

<style scoped>

</style>
