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
var lyr_MapaEspesores9dic_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mapa Espesores 9 dic<br />\
    <img src="styles/legend/MapaEspesores9dic_1_0.png" /> <= 0,0000<br />\
    <img src="styles/legend/MapaEspesores9dic_1_1.png" /> 0 - 15<br />\
    <img src="styles/legend/MapaEspesores9dic_1_2.png" /> 15 - 30<br />\
    <img src="styles/legend/MapaEspesores9dic_1_3.png" /> 30 - 60<br />\
    <img src="styles/legend/MapaEspesores9dic_1_4.png" /> 60 - 100<br />\
    <img src="styles/legend/MapaEspesores9dic_1_5.png" /> 100 - 150<br />\
    <img src="styles/legend/MapaEspesores9dic_1_6.png" /> > 150,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapaEspesores9dic_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.073809, 5228671.936464, 93989.753013, 5319585.631461]
        })
    });
var lyr_BPA_final_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'BPA_final<br />\
    <img src="styles/legend/BPA_final_2_0.png" /> 0<br />\
    <img src="styles/legend/BPA_final_2_1.png" /> Débil<br />\
    <img src="styles/legend/BPA_final_2_2.png" /> Moderado<br />\
    <img src="styles/legend/BPA_final_2_3.png" /> Notable<br />\
    <img src="styles/legend/BPA_final_2_4.png" /> Fuerte<br />\
    <img src="styles/legend/BPA_final_2_5.png" /> Muy fuerte<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BPA_final_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-133908.073809, 5228671.936464, 93989.753013, 5319585.631461]
        })
    });
var format_Nivmetrosconalturamuestreado_3 = new ol.format.GeoJSON();
var features_Nivmetrosconalturamuestreado_3 = format_Nivmetrosconalturamuestreado_3.readFeatures(json_Nivmetrosconalturamuestreado_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nivmetrosconalturamuestreado_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nivmetrosconalturamuestreado_3.addFeatures(features_Nivmetrosconalturamuestreado_3);
var lyr_Nivmetrosconalturamuestreado_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nivmetrosconalturamuestreado_3, 
                style: style_Nivmetrosconalturamuestreado_3,
                popuplayertitle: 'Nivómetros con altura — muestreado',
                interactive: true,
    title: 'Nivómetros con altura — muestreado<br />\
    <img src="styles/legend/Nivmetrosconalturamuestreado_3_0.png" /> AEMET<br />\
    <img src="styles/legend/Nivmetrosconalturamuestreado_3_1.png" /> Estación Esquí<br />\
    <img src="styles/legend/Nivmetrosconalturamuestreado_3_2.png" /> Observadores<br />\
    <img src="styles/legend/Nivmetrosconalturamuestreado_3_3.png" /> Refugios FAM<br />\
    <img src="styles/legend/Nivmetrosconalturamuestreado_3_4.png" /> SAIH<br />\
    <img src="styles/legend/Nivmetrosconalturamuestreado_3_5.png" /> <br />' });
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

lyr_MapasrasterdelIGN_0.setVisible(true);lyr_MapaEspesores9dic_1.setVisible(true);lyr_BPA_final_2.setVisible(true);lyr_Nivmetrosconalturamuestreado_3.setVisible(true);lyr_WebCamsPirineos_4.setVisible(true);
var layersList = [lyr_MapasrasterdelIGN_0,lyr_MapaEspesores9dic_1,lyr_BPA_final_2,lyr_Nivmetrosconalturamuestreado_3,lyr_WebCamsPirineos_4];
lyr_Nivmetrosconalturamuestreado_3.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'coordenada x': 'coordenada x', 'coordenada y': 'coordenada y', 'espesor': 'espesor', 'fecha': 'fecha', 'Altura': 'Altura', 'espesor teórico': 'espesor teórico', 'residuo': 'residuo', });
lyr_WebCamsPirineos_4.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Altitud': 'Altitud', 'Url_imagen': 'Url_imagen', });
lyr_Nivmetrosconalturamuestreado_3.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'coordenada x': 'TextEdit', 'coordenada y': 'TextEdit', 'espesor': 'TextEdit', 'fecha': 'DateTime', 'Altura': 'TextEdit', 'espesor teórico': 'TextEdit', 'residuo': 'TextEdit', });
lyr_WebCamsPirineos_4.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Altitud': 'Range', 'Url_imagen': 'ExternalResource', });
lyr_Nivmetrosconalturamuestreado_3.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'coordenada x': 'no label', 'coordenada y': 'no label', 'espesor': 'inline label - always visible', 'fecha': 'no label', 'Altura': 'inline label - always visible', 'espesor teórico': 'hidden field', 'residuo': 'hidden field', });
lyr_WebCamsPirineos_4.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Altitud': 'no label', 'Url_imagen': 'header label - visible with data', });
lyr_WebCamsPirineos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});