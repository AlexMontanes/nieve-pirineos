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
var lyr_Peligronieveventeada_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Peligro nieve venteada<br />\
    <img src="styles/legend/Peligronieveventeada_1_0.png" /> 0<br />\
    <img src="styles/legend/Peligronieveventeada_1_1.png" /> Débil<br />\
    <img src="styles/legend/Peligronieveventeada_1_2.png" /> Moderado<br />\
    <img src="styles/legend/Peligronieveventeada_1_3.png" /> Notable<br />\
    <img src="styles/legend/Peligronieveventeada_1_4.png" /> Fuerte<br />\
    <img src="styles/legend/Peligronieveventeada_1_5.png" /> Muy fuerte<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Peligronieveventeada_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.073809, 5228671.936464, 93989.753013, 5319585.631461]
        })
    });
var lyr_Peligronievereciente_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Peligro nieve reciente<br />\
    <img src="styles/legend/Peligronievereciente_2_0.png" /> 0<br />\
    <img src="styles/legend/Peligronievereciente_2_1.png" /> Débil<br />\
    <img src="styles/legend/Peligronievereciente_2_2.png" /> Moderado<br />\
    <img src="styles/legend/Peligronievereciente_2_3.png" /> Notable<br />\
    <img src="styles/legend/Peligronievereciente_2_4.png" /> Fuerte<br />\
    <img src="styles/legend/Peligronievereciente_2_5.png" /> Muy fuerte<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Peligronievereciente_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.073809, 5228671.936464, 93989.753013, 5319585.631461]
        })
    });
var lyr_Espesorestimado27noviembre_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Espesor estimado 27 noviembre<br />\
    <img src="styles/legend/Espesorestimado27noviembre_3_0.png" /> 0<br />\
    <img src="styles/legend/Espesorestimado27noviembre_3_1.png" /> 0 - 2 cm.<br />\
    <img src="styles/legend/Espesorestimado27noviembre_3_2.png" /> 1 - 10 cm.<br />\
    <img src="styles/legend/Espesorestimado27noviembre_3_3.png" /> 10 - 20 cm.<br />\
    <img src="styles/legend/Espesorestimado27noviembre_3_4.png" /> 20 - 40 cm.<br />\
    <img src="styles/legend/Espesorestimado27noviembre_3_5.png" /> 40 - 60 cm.<br />\
    <img src="styles/legend/Espesorestimado27noviembre_3_6.png" /> 60 - 80 cm.<br />\
    <img src="styles/legend/Espesorestimado27noviembre_3_7.png" />  > 80<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Espesorestimado27noviembre_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.791385, 5228636.520462, 94023.819477, 5319585.631461]
        })
    });
var format_Nivmetros_4 = new ol.format.GeoJSON();
var features_Nivmetros_4 = format_Nivmetros_4.readFeatures(json_Nivmetros_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nivmetros_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nivmetros_4.addFeatures(features_Nivmetros_4);
var lyr_Nivmetros_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nivmetros_4, 
                style: style_Nivmetros_4,
                popuplayertitle: 'Nivómetros',
                interactive: true,
    title: 'Nivómetros<br />\
    <img src="styles/legend/Nivmetros_4_0.png" /> AEMET<br />\
    <img src="styles/legend/Nivmetros_4_1.png" /> Estación Esquí<br />\
    <img src="styles/legend/Nivmetros_4_2.png" /> Observadores<br />\
    <img src="styles/legend/Nivmetros_4_3.png" /> Refugios FAM<br />\
    <img src="styles/legend/Nivmetros_4_4.png" /> SAIH<br />' });
var format_WebCamsPirineos_5 = new ol.format.GeoJSON();
var features_WebCamsPirineos_5 = format_WebCamsPirineos_5.readFeatures(json_WebCamsPirineos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WebCamsPirineos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebCamsPirineos_5.addFeatures(features_WebCamsPirineos_5);
var lyr_WebCamsPirineos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WebCamsPirineos_5, 
                style: style_WebCamsPirineos_5,
                popuplayertitle: 'WebCams Pirineos',
                interactive: true,
                title: '<img src="styles/legend/WebCamsPirineos_5.png" /> WebCams Pirineos'
            });
var format_Estaciones_SAIH_6 = new ol.format.GeoJSON();
var features_Estaciones_SAIH_6 = format_Estaciones_SAIH_6.readFeatures(json_Estaciones_SAIH_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_SAIH_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_SAIH_6.addFeatures(features_Estaciones_SAIH_6);
var lyr_Estaciones_SAIH_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_SAIH_6, 
                style: style_Estaciones_SAIH_6,
                popuplayertitle: 'Estaciones_SAIH',
                interactive: true,
                title: '<img src="styles/legend/Estaciones_SAIH_6.png" /> Estaciones_SAIH'
            });
var group_BPA28noviembre = new ol.layer.Group({
                                layers: [lyr_Peligronieveventeada_1,lyr_Peligronievereciente_2,],
                                fold: 'close',
                                title: 'BPA 28 noviembre'});

lyr_MapasrasterdelIGN_0.setVisible(true);lyr_Peligronieveventeada_1.setVisible(true);lyr_Peligronievereciente_2.setVisible(true);lyr_Espesorestimado27noviembre_3.setVisible(true);lyr_Nivmetros_4.setVisible(true);lyr_WebCamsPirineos_5.setVisible(true);lyr_Estaciones_SAIH_6.setVisible(true);
var layersList = [lyr_MapasrasterdelIGN_0,group_BPA28noviembre,lyr_Espesorestimado27noviembre_3,lyr_Nivmetros_4,lyr_WebCamsPirineos_5,lyr_Estaciones_SAIH_6];
lyr_Nivmetros_4.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'coordenada x': 'coordenada x', 'coordenada y': 'coordenada y', 'espesor': 'espesor', 'fecha': 'fecha', 'Altura': 'Altura', 'espesor teórico': 'espesor teórico', 'residuo': 'residuo', });
lyr_WebCamsPirineos_5.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Altitud': 'Altitud', 'Url_imagen': 'Url_imagen', });
lyr_Estaciones_SAIH_6.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Z_est': 'Z_est', 'P_24h': 'P_24h', 'Activa': 'Activa', 'Evento precipitación (l/m2)': 'Evento precipitación (l/m2)', });
lyr_Nivmetros_4.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'coordenada x': 'TextEdit', 'coordenada y': 'TextEdit', 'espesor': 'TextEdit', 'fecha': 'DateTime', 'Altura': 'TextEdit', 'espesor teórico': 'TextEdit', 'residuo': 'TextEdit', });
lyr_WebCamsPirineos_5.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Altitud': 'Range', 'Url_imagen': 'ExternalResource', });
lyr_Estaciones_SAIH_6.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Z_est': 'Range', 'P_24h': 'Range', 'Activa': 'Range', 'Evento precipitación (l/m2)': '', });
lyr_Nivmetros_4.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'coordenada x': 'no label', 'coordenada y': 'no label', 'espesor': 'inline label - always visible', 'fecha': 'no label', 'Altura': 'inline label - always visible', 'espesor teórico': 'hidden field', 'residuo': 'hidden field', });
lyr_WebCamsPirineos_5.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Altitud': 'no label', 'Url_imagen': 'header label - visible with data', });
lyr_Estaciones_SAIH_6.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'inline label - always visible', 'Z_est': 'hidden field', 'P_24h': 'hidden field', 'Activa': 'hidden field', 'Evento precipitación (l/m2)': 'inline label - always visible', });
lyr_Estaciones_SAIH_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});