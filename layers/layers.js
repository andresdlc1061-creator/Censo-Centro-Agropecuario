var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Centro_Agropecuario_1 = new ol.format.GeoJSON();
var features_Centro_Agropecuario_1 = format_Centro_Agropecuario_1.readFeatures(json_Centro_Agropecuario_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centro_Agropecuario_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centro_Agropecuario_1.addFeatures(features_Centro_Agropecuario_1);
var lyr_Centro_Agropecuario_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centro_Agropecuario_1, 
                style: style_Centro_Agropecuario_1,
                popuplayertitle: 'Centro_Agropecuario',
                interactive: true,
                title: '<img src="styles/legend/Centro_Agropecuario_1.png" /> Centro_Agropecuario'
            });
var format_ArbolesLaGranja_2 = new ol.format.GeoJSON();
var features_ArbolesLaGranja_2 = format_ArbolesLaGranja_2.readFeatures(json_ArbolesLaGranja_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArbolesLaGranja_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArbolesLaGranja_2.addFeatures(features_ArbolesLaGranja_2);
cluster_ArbolesLaGranja_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ArbolesLaGranja_2
});
var lyr_ArbolesLaGranja_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ArbolesLaGranja_2, 
                style: style_ArbolesLaGranja_2,
                popuplayertitle: 'Arboles La Granja',
                interactive: true,
                title: '<img src="styles/legend/ArbolesLaGranja_2.png" /> Arboles La Granja'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Centro_Agropecuario_1.setVisible(true);lyr_ArbolesLaGranja_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Centro_Agropecuario_1,lyr_ArbolesLaGranja_2];
lyr_Centro_Agropecuario_1.set('fieldAliases', {'Id': 'Id', });
lyr_ArbolesLaGranja_2.set('fieldAliases', {'C�digo d': 'Codigo de individuo', 'Coordenada': 'Coordenada X', 'Coordena_1': 'Coordenada Y', 'C�digo_1': 'Codigo de zona', 'Familia': 'Familia', 'Nombre cie': 'Nombre cie', 'Nombre com': 'Nombre com', 'DAP 1 (cm)': 'DAP 1 (cm)', 'DAP2 (cm)': 'DAP2 (cm)', 'DAP3 (cm)': 'DAP3 (cm)', 'DAP 4': 'DAP 4', 'DAP 5': 'DAP 5', 'DAP6': 'DAP6', 'DAP (cm)': 'DAP (cm)', 'DAP (m)': 'DAP (m)', 'Altura tot': 'Altura tot', 'Altura al': 'Altura al', 'Copa X (m)': 'Copa X (m)', 'Copa Y (m)': 'Copa Y (m)', });
lyr_Centro_Agropecuario_1.set('fieldImages', {'Id': 'TextEdit', });
lyr_ArbolesLaGranja_2.set('fieldImages', {'C�digo d': 'TextEdit', 'Coordenada': 'TextEdit', 'Coordena_1': 'TextEdit', 'C�digo_1': 'TextEdit', 'Familia': 'TextEdit', 'Nombre cie': 'TextEdit', 'Nombre com': 'TextEdit', 'DAP 1 (cm)': 'TextEdit', 'DAP2 (cm)': 'TextEdit', 'DAP3 (cm)': 'TextEdit', 'DAP 4': 'TextEdit', 'DAP 5': 'TextEdit', 'DAP6': 'TextEdit', 'DAP (cm)': 'TextEdit', 'DAP (m)': 'TextEdit', 'Altura tot': 'TextEdit', 'Altura al': 'TextEdit', 'Copa X (m)': 'TextEdit', 'Copa Y (m)': 'TextEdit', });
lyr_Centro_Agropecuario_1.set('fieldLabels', {'Id': 'no label', });
lyr_ArbolesLaGranja_2.set('fieldLabels', {'C�digo d': 'inline label - always visible', 'Coordenada': 'inline label - always visible', 'Coordena_1': 'inline label - always visible', 'C�digo_1': 'inline label - always visible', 'Familia': 'inline label - always visible', 'Nombre cie': 'inline label - always visible', 'Nombre com': 'inline label - always visible', 'DAP 1 (cm)': 'hidden field', 'DAP2 (cm)': 'hidden field', 'DAP3 (cm)': 'hidden field', 'DAP 4': 'hidden field', 'DAP 5': 'hidden field', 'DAP6': 'hidden field', 'DAP (cm)': 'inline label - always visible', 'DAP (m)': 'inline label - always visible', 'Altura tot': 'inline label - always visible', 'Altura al': 'inline label - always visible', 'Copa X (m)': 'inline label - always visible', 'Copa Y (m)': 'inline label - always visible', });
lyr_ArbolesLaGranja_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});