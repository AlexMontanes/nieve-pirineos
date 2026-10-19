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
var lyr_MapaEspesores10enero_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mapa Espesores 10 enero<br />\
    <img src="styles/legend/MapaEspesores10enero_2_0.png" /> 0<br />\
    <img src="styles/legend/MapaEspesores10enero_2_1.png" /> 0- 15<br />\
    <img src="styles/legend/MapaEspesores10enero_2_2.png" /> 15 - 30<br />\
    <img src="styles/legend/MapaEspesores10enero_2_3.png" /> 30 - 60<br />\
    <img src="styles/legend/MapaEspesores10enero_2_4.png" /> 60 - 100<br />\
    <img src="styles/legend/MapaEspesores10enero_2_5.png" /> 100 - 150<br />\
    <img src="styles/legend/MapaEspesores10enero_2_6.png" /> 150 - 200<br />\
    <img src="styles/legend/MapaEspesores10enero_2_7.png" /> > 200<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapaEspesores10enero_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.791385, 5228636.520462, 94023.819477, 5319585.631461]
        })
    });
var format_Nivmetros_3 = new ol.format.GeoJSON();
var features_Nivmetros_3 = format_Nivmetros_3.readFeatures(json_Nivmetros_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nivmetros_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nivmetros_3.addFeatures(features_Nivmetros_3);
var lyr_Nivmetros_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nivmetros_3, 
                style: style_Nivmetros_3,
                popuplayertitle: 'Nivómetros',
                interactive: true,
    title: 'Nivómetros<br />\
    <img src="styles/legend/Nivmetros_3_0.png" /> AEMET<br />\
    <img src="styles/legend/Nivmetros_3_1.png" /> Estación Esquí<br />\
    <img src="styles/legend/Nivmetros_3_2.png" /> Observadores<br />\
    <img src="styles/legend/Nivmetros_3_3.png" /> Refugios FAM<br />\
    <img src="styles/legend/Nivmetros_3_4.png" /> SAIH<br />' });
var format_WebCamsPirineos_4 = new ol.format.GeoJSON();
var features_WebCamsPirineos_4 = format_WebCamsPirineos_4.readFeatures(json_WebCamsPirineos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WebCamsPirineos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebCamsPirineos_4.addFeatures(features_WebCamsPirineos_4);
var lyr_WebCamsPirineos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WebCamsPirineos_4, 
                style: style_WebCamsPirineos_4,
                popuplayertitle: 'WebCams Pirineos',
                interactive: true,
                title: '<img src="styles/legend/WebCamsPirineos_4.png" /> WebCams Pirineos'
            });
var lyr_BPA_nieve_venteada_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'BPA_nieve_venteada<br />\
    <img src="styles/legend/BPA_nieve_venteada_5_0.png" /> 0<br />\
    <img src="styles/legend/BPA_nieve_venteada_5_1.png" /> Débil<br />\
    <img src="styles/legend/BPA_nieve_venteada_5_2.png" /> Moderado<br />\
    <img src="styles/legend/BPA_nieve_venteada_5_3.png" /> Notable<br />\
    <img src="styles/legend/BPA_nieve_venteada_5_4.png" /> Fuerte<br />\
    <img src="styles/legend/BPA_nieve_venteada_5_5.png" /> Muy fuerte<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BPA_nieve_venteada_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.791385, 5228636.520462, 94023.819477, 5319585.631461]
        })
    });
var lyr_BPA_nieve_reciente_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'BPA_nieve_reciente<br />\
    <img src="styles/legend/BPA_nieve_reciente_6_0.png" /> 0<br />\
    <img src="styles/legend/BPA_nieve_reciente_6_1.png" /> Débil<br />\
    <img src="styles/legend/BPA_nieve_reciente_6_2.png" /> Moderado<br />\
    <img src="styles/legend/BPA_nieve_reciente_6_3.png" /> Notable<br />\
    <img src="styles/legend/BPA_nieve_reciente_6_4.png" /> Fuerte<br />\
    <img src="styles/legend/BPA_nieve_reciente_6_5.png" /> Muy fuerte<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BPA_nieve_reciente_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.791385, 5228636.520462, 94023.819477, 5319585.631461]
        })
    });

lyr_MapasrasterdelIGN_0.setVisible(true);lyr_Pendiente_1.setVisible(true);lyr_MapaEspesores10enero_2.setVisible(true);lyr_Nivmetros_3.setVisible(true);lyr_WebCamsPirineos_4.setVisible(true);lyr_BPA_nieve_venteada_5.setVisible(true);lyr_BPA_nieve_reciente_6.setVisible(true);
var layersList = [lyr_MapasrasterdelIGN_0,lyr_Pendiente_1,lyr_MapaEspesores10enero_2,lyr_Nivmetros_3,lyr_WebCamsPirineos_4,lyr_BPA_nieve_venteada_5,lyr_BPA_nieve_reciente_6];
lyr_Nivmetros_3.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'coordenada x': 'coordenada x', 'coordenada y': 'coordenada y', 'espesor': 'espesor', 'fecha': 'fecha', 'Altura': 'Altura', 'espesor teórico': 'espesor teórico', 'residuo': 'residuo', });
lyr_WebCamsPirineos_4.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Altitud': 'Altitud', 'Url_imagen': 'Url_imagen', });
lyr_Nivmetros_3.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'coordenada x': 'TextEdit', 'coordenada y': 'TextEdit', 'espesor': 'TextEdit', 'fecha': 'DateTime', 'Altura': 'TextEdit', 'espesor teórico': 'TextEdit', 'residuo': 'TextEdit', });
lyr_WebCamsPirineos_4.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Altitud': 'Range', 'Url_imagen': 'ExternalResource', });
lyr_Nivmetros_3.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'coordenada x': 'no label', 'coordenada y': 'no label', 'espesor': 'inline label - always visible', 'fecha': 'no label', 'Altura': 'inline label - always visible', 'espesor teórico': 'hidden field', 'residuo': 'hidden field', });
lyr_WebCamsPirineos_4.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Altitud': 'no label', 'Url_imagen': 'header label - visible with data', });
lyr_WebCamsPirineos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});