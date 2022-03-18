// const hs = {
//     "version": 8,
//     "sources": {
//         "hs_raster": {
//                 "type": "raster",
//                 "tiles": ["http://localhost:8001/tiles/hs/{z}/{x}/{y}.png"],
//                 "bounds": [-178.826516,-52.620881,179.067794,-29.231342],
//                 "scheme": "tms",
//                 "tileSize": 256,
//         "attribution": "Mine!",
//         "maxzoom": 14
//         }
//     },
//     "layers":[ 
//         {
//             "id": "hs_raster",
//             "source": "hs_raster",
//             "type": "raster",
//             "layout": { "visibility": "visible" },
//             "paint": {
//                 "raster-opacity": 0.75,
//                 "raster-resampling": "linear",
//                 "raster-brightness-max": 1.0,
//                 "raster-brightness-min": 0.5,
//                 "raster-contrast": 0,
//                 "raster-opacity": {
//                     "stops": [
//                       [1, 0.35],
//                       [7, 0.35],
//                       [8, 0.65],
//                       [15, 0.65],
//                       [16, 0.3]
//                     ]
//                   },
//             }
//         }
//     ]
// }

const mapBase = new maplibregl.Map({
    container: 'map', // container id
    style: './style/style.json', // style URL
    center: [174.0,-41.29], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });

// const mapOverlay = new maplibregl.Map({
//     container: 'mapOverlay',
//     style: hs,
//     "center": [166.453857,-45.821143,14],
//     "zoom": 3,
//     });

// syncMaps(mapBase, mapOverlay);