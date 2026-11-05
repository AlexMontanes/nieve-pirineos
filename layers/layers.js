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
var lyr_MapaEspesores5nov_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mapa Espesores 5nov<br />\
    <img src="styles/legend/MapaEspesores5nov_1_0.png" /> 0<br />\
    <img src="styles/legend/MapaEspesores5nov_1_1.png" /> 0 - 2<br />\
    <img src="styles/legend/MapaEspesores5nov_1_2.png" /> 2 - 10<br />\
    <img src="styles/legend/MapaEspesores5nov_1_3.png" /> 10 - 20<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapaEspesores5nov_1.png",
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

lyr_MapasrasterdelIGN_0.setVisible(true);lyr_MapaEspesores5nov_1.setVisible(true);lyr_Nivmetros_2.setVisible(true);lyr_WebCamsPirineos_3.setVisible(true);
var layersList = [lyr_MapasrasterdelIGN_0,lyr_MapaEspesores5nov_1,lyr_Nivmetros_2,lyr_WebCamsPirineos_3];
lyr_Nivmetros_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'coordenada x': 'coordenada x', 'coordenada y': 'coordenada y', 'espesor': 'espesor', 'fecha': 'fecha', 'Altura': 'Altura', 'espesor teórico': 'espesor teórico', 'residuo': 'residuo', });
lyr_WebCamsPirineos_3.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Altitud': 'Altitud', 'Url_imagen': 'Url_imagen', });
lyr_Nivmetros_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'coordenada x': 'TextEdit', 'coordenada y': 'TextEdit', 'espesor': 'TextEdit', 'fecha': 'DateTime', 'Altura': 'TextEdit', 'espesor teórico': 'TextEdit', 'residuo': 'TextEdit', });
lyr_WebCamsPirineos_3.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Altitud': 'Range', 'Url_imagen': 'ExternalResource', });
lyr_Nivmetros_2.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'coordenada x': 'no label', 'coordenada y': 'no label', 'espesor': 'inline label - always visible', 'fecha': 'no label', 'Altura': 'inline label - always visible', 'espesor teórico': 'hidden field', 'residuo': 'hidden field', });
lyr_WebCamsPirineos_3.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Altitud': 'no label', 'Url_imagen': 'header label - visible with data', });
lyr_WebCamsPirineos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});