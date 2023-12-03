<script setup lang="ts">

import Logo from "~/components/Logo.vue";
import EnvelopeIcon from "~/components/icons/EnvelopeIcon.vue";
</script>

<template>
    <div class="flex h-20 border-b">
        <div class="flex">
            <div class="flex flex-row font-roboto-condensed uppercase">
                <div class="flex items-center px-5 text-black border-r">Dragonfly V</div>
                <div class="flex items-center px-5 text-gray-400">Company History</div>
                <div class="flex items-center px-5 text-gray-400">Our Team</div>
                <div class="flex items-center px-5 text-gray-400"><EnvelopeIcon class="mr-1"/>Contact Us</div>
            </div>
        </div>
        <div class="flex-auto"></div>
        <div class="flex items-center"><Logo class="h-28"/></div>
    </div>
</template>

<style scoped>

</style>