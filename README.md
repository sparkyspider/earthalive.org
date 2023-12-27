https://svs.gsfc.nasa.gov/4451/ <- Sky maps
https://jaxry.github.io/panorama-to-cubemap/ <- Panorama to cubemap

```npm run dev```


# SkyBox and Clouds (incase you want them back)
```javascript
     viewer.scene.skyBox = new Cesium.SkyBox({sources:{
             positiveX : '/skybox/px.png',
             negativeX : '/skybox/nx.png',
             positiveY : '/skybox/ny.png',
             negativeY : '/skybox/py.png',
             positiveZ : '/skybox/pz.png',
             negativeZ : '/skybox/nz.png'
         }});

     const openWeatherMapKey = '0296bfed4bfaf0c1c554ea79a1a304e9'; // Replace with your actual API key
     const cloudsLayer = viewer.imageryLayers.addImageryProvider(
         new Cesium.UrlTemplateImageryProvider({
             url: `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${openWeatherMapKey}`,
             minimumLevel: 0,
             maximumLevel: 19,
             // Additional parameters for tile customization can be added here
         })
     );

     cloudsLayer.alpha = 0.5; // Adjust transparency of the cloud layer
     cloudsLayer.brightness = 2; // Adjust brightness of the cloud layer
```