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
var lyr_Mapaespesores25noviembre_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mapa espesores 25 noviembre<br />\
    <img src="styles/legend/Mapaespesores25noviembre_1_0.png" /> 0<br />\
    <img src="styles/legend/Mapaespesores25noviembre_1_1.png" /> 0 - 2 cm.<br />\
    <img src="styles/legend/Mapaespesores25noviembre_1_2.png" /> 2 - 5 cm.<br />\
    <img src="styles/legend/Mapaespesores25noviembre_1_3.png" /> 5 - 10 cm.<br />\
    <img src="styles/legend/Mapaespesores25noviembre_1_4.png" /> 10 - 20 cm.<br />\
    <img src="styles/legend/Mapaespesores25noviembre_1_5.png" /> 20 - 40 cm.<br />\
    <img src="styles/legend/Mapaespesores25noviembre_1_6.png" /> 40 - 60 cm.<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Mapaespesores25noviembre_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.791385, 5228636.520462, 94023.819477, 5319585.631461]
        })
    });
var format_Nivmetros_2 = new ol.format.GeoJSON();
var features_Nivmetros_2 = format_Nivmetros_2.readFeatures(json_Nivmetros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nivmetros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nivmetros_2.addFeatures(features_Nivmetros_2);
var lyr_Nivmetros_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nivmetros_2, 
                style: style_Nivmetros_2,
                popuplayertitle: 'Nivómetros',
                interactive: true,
    title: 'Nivómetros<br />\
    <img src="styles/legend/Nivmetros_2_0.png" /> AEMET<br />\
    <img src="styles/legend/Nivmetros_2_1.png" /> Estación Esquí<br />\
    <img src="styles/legend/Nivmetros_2_2.png" /> Observadores<br />\
    <img src="styles/legend/Nivmetros_2_3.png" /> Refugios FAM<br />\
    <img src="styles/legend/Nivmetros_2_4.png" /> SAIH<br />' });
var format_WebCamsPirineos_3 = new ol.format.GeoJSON();
var features_WebCamsPirineos_3 = format_WebCamsPirineos_3.readFeatures(json_WebCamsPirineos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WebCamsPirineos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebCamsPirineos_3.addFeatures(features_WebCamsPirineos_3);
var lyr_WebCamsPirineos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WebCamsPirineos_3, 
                style: style_WebCamsPirineos_3,
                popuplayertitle: 'WebCams Pirineos',
                interactive: true,
                title: '<img src="styles/legend/WebCamsPirineos_3.png" /> WebCams Pirineos'
            });
var format_Estaciones_SAIH_4 = new ol.format.GeoJSON();
var features_Estaciones_SAIH_4 = format_Estaciones_SAIH_4.readFeatures(json_Estaciones_SAIH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_SAIH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_SAIH_4.addFeatures(features_Estaciones_SAIH_4);
var lyr_Estaciones_SAIH_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_SAIH_4, 
                style: style_Estaciones_SAIH_4,
                popuplayertitle: 'Estaciones_SAIH',
                interactive: true,
                title: '<img src="styles/legend/Estaciones_SAIH_4.png" /> Estaciones_SAIH'
            });

lyr_MapasrasterdelIGN_0.setVisible(true);lyr_Mapaespesores25noviembre_1.setVisible(true);lyr_Nivmetros_2.setVisible(true);lyr_WebCamsPirineos_3.setVisible(true);lyr_Estaciones_SAIH_4.setVisible(true);
var layersList = [lyr_MapasrasterdelIGN_0,lyr_Mapaespesores25noviembre_1,lyr_Nivmetros_2,lyr_WebCamsPirineos_3,lyr_Estaciones_SAIH_4];
lyr_Nivmetros_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'coordenada x': 'coordenada x', 'coordenada y': 'coordenada y', 'espesor': 'espesor', 'fecha': 'fecha', 'Altura': 'Altura', 'espesor teórico': 'espesor teórico', 'residuo': 'residuo', });
lyr_WebCamsPirineos_3.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Altitud': 'Altitud', 'Url_imagen': 'Url_imagen', });
lyr_Estaciones_SAIH_4.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Z_est': 'Z_est', 'P_24h': 'P_24h', 'Activa': 'Activa', 'Evento precipitación (l/m2)': 'Evento precipitación (l/m2)', });
lyr_Nivmetros_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'coordenada x': 'TextEdit', 'coordenada y': 'TextEdit', 'espesor': 'TextEdit', 'fecha': 'DateTime', 'Altura': 'TextEdit', 'espesor teórico': 'TextEdit', 'residuo': 'TextEdit', });
lyr_WebCamsPirineos_3.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Altitud': 'Range', 'Url_imagen': 'ExternalResource', });
lyr_Estaciones_SAIH_4.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Z_est': 'Range', 'P_24h': 'Range', 'Activa': 'Range', 'Evento precipitación (l/m2)': '', });
lyr_Nivmetros_2.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'coordenada x': 'no label', 'coordenada y': 'no label', 'espesor': 'inline label - always visible', 'fecha': 'no label', 'Altura': 'inline label - always visible', 'espesor teórico': 'hidden field', 'residuo': 'hidden field', });
lyr_WebCamsPirineos_3.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Altitud': 'no label', 'Url_imagen': 'header label - visible with data', });
lyr_Estaciones_SAIH_4.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'inline label - always visible', 'Z_est': 'hidden field', 'P_24h': 'hidden field', 'Activa': 'hidden field', 'Evento precipitación (l/m2)': 'inline label - always visible', });
lyr_Estaciones_SAIH_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});