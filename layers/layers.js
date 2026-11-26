var wms_layers = [];

var lyr_MapasrasterdelIGN_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/mapa-raster",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mtn_rasterizado",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Mapas raster del IGN',
                            popuplayertitle: 'Mapas raster del IGN',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MapasrasterdelIGN_0, 0]);
var lyr_Pendiente_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pendiente<br />\
    <img src="styles/legend/Pendiente_1_0.png" /> <= 25º<br />\
    <img src="styles/legend/Pendiente_1_1.png" /> 25º - 30º<br />\
    <img src="styles/legend/Pendiente_1_2.png" /> 30º - 45º<br />\
    <img src="styles/legend/Pendiente_1_3.png" /> > 45º<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pendiente_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.073809, 5228671.936464, 93989.753013, 5319585.631461]
        })
    });
var lyr_Peligronieveventeada_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Peligro nieve venteada<br />\
    <img src="styles/legend/Peligronieveventeada_2_0.png" /> 0<br />\
    <img src="styles/legend/Peligronieveventeada_2_1.png" /> Débil<br />\
    <img src="styles/legend/Peligronieveventeada_2_2.png" /> Moderado<br />\
    <img src="styles/legend/Peligronieveventeada_2_3.png" /> Notable<br />\
    <img src="styles/legend/Peligronieveventeada_2_4.png" /> Fuerte<br />\
    <img src="styles/legend/Peligronieveventeada_2_5.png" /> Muy fuerte<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Peligronieveventeada_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.073809, 5228671.936464, 93989.753013, 5319585.631461]
        })
    });
var lyr_Peligronievereciente_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Peligro nieve reciente<br />\
    <img src="styles/legend/Peligronievereciente_3_0.png" /> 0<br />\
    <img src="styles/legend/Peligronievereciente_3_1.png" /> Débil<br />\
    <img src="styles/legend/Peligronievereciente_3_2.png" /> Moderado<br />\
    <img src="styles/legend/Peligronievereciente_3_3.png" /> Notable<br />\
    <img src="styles/legend/Peligronievereciente_3_4.png" /> Fuerte<br />\
    <img src="styles/legend/Peligronievereciente_3_5.png" /> Muy fuerte<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Peligronievereciente_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.073809, 5228671.936464, 93989.753013, 5319585.631461]
        })
    });
var lyr_Espesorestimado26noviembre_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Espesor estimado 26 noviembre<br />\
    <img src="styles/legend/Espesorestimado26noviembre_4_0.png" /> 0<br />\
    <img src="styles/legend/Espesorestimado26noviembre_4_1.png" /> 0 - 5 cm.<br />\
    <img src="styles/legend/Espesorestimado26noviembre_4_2.png" /> 5 - 10 cm.<br />\
    <img src="styles/legend/Espesorestimado26noviembre_4_3.png" /> 10 - 20 cm.<br />\
    <img src="styles/legend/Espesorestimado26noviembre_4_4.png" /> 20 - 30 cm.<br />\
    <img src="styles/legend/Espesorestimado26noviembre_4_5.png" /> 30 - 40 cm.<br />\
    <img src="styles/legend/Espesorestimado26noviembre_4_6.png" /> 40 - 60 cm.<br />\
    <img src="styles/legend/Espesorestimado26noviembre_4_7.png" /> > 70 cm.<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Espesorestimado26noviembre_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.791385, 5228636.520462, 94023.819477, 5319585.631461]
        })
    });
var format_Nivmetros_5 = new ol.format.GeoJSON();
var features_Nivmetros_5 = format_Nivmetros_5.readFeatures(json_Nivmetros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nivmetros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nivmetros_5.addFeatures(features_Nivmetros_5);
var lyr_Nivmetros_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nivmetros_5, 
                style: style_Nivmetros_5,
                popuplayertitle: 'Nivómetros',
                interactive: true,
    title: 'Nivómetros<br />\
    <img src="styles/legend/Nivmetros_5_0.png" /> AEMET<br />\
    <img src="styles/legend/Nivmetros_5_1.png" /> Estación Esquí<br />\
    <img src="styles/legend/Nivmetros_5_2.png" /> Observadores<br />\
    <img src="styles/legend/Nivmetros_5_3.png" /> Refugios FAM<br />\
    <img src="styles/legend/Nivmetros_5_4.png" /> SAIH<br />' });
var format_WebCamsPirineos_6 = new ol.format.GeoJSON();
var features_WebCamsPirineos_6 = format_WebCamsPirineos_6.readFeatures(json_WebCamsPirineos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WebCamsPirineos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebCamsPirineos_6.addFeatures(features_WebCamsPirineos_6);
var lyr_WebCamsPirineos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WebCamsPirineos_6, 
                style: style_WebCamsPirineos_6,
                popuplayertitle: 'WebCams Pirineos',
                interactive: true,
                title: '<img src="styles/legend/WebCamsPirineos_6.png" /> WebCams Pirineos'
            });
var format_Estaciones_SAIH_7 = new ol.format.GeoJSON();
var features_Estaciones_SAIH_7 = format_Estaciones_SAIH_7.readFeatures(json_Estaciones_SAIH_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_SAIH_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_SAIH_7.addFeatures(features_Estaciones_SAIH_7);
var lyr_Estaciones_SAIH_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_SAIH_7, 
                style: style_Estaciones_SAIH_7,
                popuplayertitle: 'Estaciones_SAIH',
                interactive: true,
                title: '<img src="styles/legend/Estaciones_SAIH_7.png" /> Estaciones_SAIH'
            });
var group_BPA26noviembre = new ol.layer.Group({
                                layers: [lyr_Peligronieveventeada_2,lyr_Peligronievereciente_3,],
                                fold: 'close',
                                title: 'BPA 26 noviembre'});

lyr_MapasrasterdelIGN_0.setVisible(true);lyr_Pendiente_1.setVisible(true);lyr_Peligronieveventeada_2.setVisible(true);lyr_Peligronievereciente_3.setVisible(true);lyr_Espesorestimado26noviembre_4.setVisible(true);lyr_Nivmetros_5.setVisible(true);lyr_WebCamsPirineos_6.setVisible(true);lyr_Estaciones_SAIH_7.setVisible(true);
var layersList = [lyr_MapasrasterdelIGN_0,lyr_Pendiente_1,group_BPA26noviembre,lyr_Espesorestimado26noviembre_4,lyr_Nivmetros_5,lyr_WebCamsPirineos_6,lyr_Estaciones_SAIH_7];
lyr_Nivmetros_5.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'coordenada x': 'coordenada x', 'coordenada y': 'coordenada y', 'espesor': 'espesor', 'fecha': 'fecha', 'Altura': 'Altura', 'espesor teórico': 'espesor teórico', 'residuo': 'residuo', });
lyr_WebCamsPirineos_6.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Altitud': 'Altitud', 'Url_imagen': 'Url_imagen', });
lyr_Estaciones_SAIH_7.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Z_est': 'Z_est', 'P_24h': 'P_24h', 'Activa': 'Activa', 'Evento precipitación (l/m2)': 'Evento precipitación (l/m2)', });
lyr_Nivmetros_5.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'coordenada x': 'TextEdit', 'coordenada y': 'TextEdit', 'espesor': 'TextEdit', 'fecha': 'DateTime', 'Altura': 'TextEdit', 'espesor teórico': 'TextEdit', 'residuo': 'TextEdit', });
lyr_WebCamsPirineos_6.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Altitud': 'Range', 'Url_imagen': 'ExternalResource', });
lyr_Estaciones_SAIH_7.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Z_est': 'Range', 'P_24h': 'Range', 'Activa': 'Range', 'Evento precipitación (l/m2)': '', });
lyr_Nivmetros_5.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'coordenada x': 'no label', 'coordenada y': 'no label', 'espesor': 'inline label - always visible', 'fecha': 'no label', 'Altura': 'inline label - always visible', 'espesor teórico': 'hidden field', 'residuo': 'hidden field', });
lyr_WebCamsPirineos_6.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Altitud': 'no label', 'Url_imagen': 'header label - visible with data', });
lyr_Estaciones_SAIH_7.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'inline label - always visible', 'Z_est': 'hidden field', 'P_24h': 'hidden field', 'Activa': 'hidden field', 'Evento precipitación (l/m2)': 'inline label - always visible', });
lyr_Estaciones_SAIH_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});