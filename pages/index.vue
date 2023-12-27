<template>
    <div class="w-screen bg-black h-64 h-screen relative">
        <div id="cesiumGlobe" class="w-full h-full"></div>
        <div class="absolute top-0 left-0 mx-2 my-1">
            <!-- Your overlay content here, e.g., logo or text -->
            <p class="text-white font-kanit neon-text text-2xl">earthalive.org</p>
        </div>
    </div></template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

onMounted(() => {

    definePageMeta({
        title: 'earthalive.org'
    })

    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MjRiMTcwMi0xZGQyLTQwYjctODQ0Ni02ZmMxODM0NmNmYjMiLCJpZCI6ODk0NzMsImlhdCI6MTcwMjMxMzY4OX0.k8ZdUvi_edlChAQ9z1OpHY2dgdmGHFISKreJyb_7PVA';

    //@ts-ignore
    window.CESIUM_BASE_URL = '/cesium';


    const viewer = new Cesium.Viewer('cesiumGlobe', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
        scene3DOnly: true,
        shadows: true,
        animation: false, // Hide animation widget
        baseLayerPicker: false, // Hide base layer picker
        fullscreenButton: false, // Hide fullscreen button
        vrButton: false, // Hide VR button
        geocoder: false, // Hide geocoder widget
        homeButton: false, // Hide home button
        infoBox: false, // Hide info box
        sceneModePicker: false, // Hide scene mode picker
        selectionIndicator: false, // Hide selection indicator
        timeline: false, // Hide timeline
        navigationHelpButton: false, // Hide navigation help button
        navigationInstructionsInitiallyVisible: false, // Hide
    });

    viewer.scene.globe.enableLighting = true;
    viewer.scene.shadowMap.softShadows = true;
    viewer.scene.globe.shadows = Cesium.ShadowMode.RECEIVE_ONLY;


    viewer.scene.skyBox = new Cesium.SkyBox({sources:{
            positiveX : '/skybox/px.png',
            negativeX : '/skybox/nx.png',
            positiveY : '/skybox/ny.png',
            negativeY : '/skybox/py.png',
            positiveZ : '/skybox/pz.png',
            negativeZ : '/skybox/nz.png'
        }});

    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(20.0, 10.0, 30000000.0), // Longitude, Latitude, Height
        orientation: {
            heading: Cesium.Math.toRadians(0.0), // East, default value is 0.0 (north)
            pitch: Cesium.Math.toRadians(-90.0), // Default value (looking down)
            roll: 0.0,
        }
    });

    viewer.scene.preRender.addEventListener(() => {
        const spinRate = 1;
        viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, Cesium.Math.toRadians(spinRate / 60));
    });

    // Enable enhanced lighting
    viewer.scene.globe.enableLighting = true;

    // Additional Cesium setup can go here

    onUnmounted(() => {
        viewer.destroy();
    });
});
</script>

<style>

.cesium-viewer-bottom {
    display: none !important;
}

#nuxt-devtools-container {
    display: none !important;
}

.neon-text {
    color: white; /* Neon color */
    text-shadow:
        0 0 7px rgba(205, 240, 255, 0.92),  /* Light cyan */
        0 0 20px rgba(21, 193, 255, 0.76) /* Light cyan */
}


</style>