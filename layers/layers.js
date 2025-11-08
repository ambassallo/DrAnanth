var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DrJelligudda_1 = new ol.format.GeoJSON();
var features_DrJelligudda_1 = format_DrJelligudda_1.readFeatures(json_DrJelligudda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrJelligudda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrJelligudda_1.addFeatures(features_DrJelligudda_1);
var lyr_DrJelligudda_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrJelligudda_1, 
                style: style_DrJelligudda_1,
                popuplayertitle: 'Dr.Jelligudda',
                interactive: true,
                title: '<img src="styles/legend/DrJelligudda_1.png" /> Dr.Jelligudda'
            });
var format_Totalarea_2 = new ol.format.GeoJSON();
var features_Totalarea_2 = format_Totalarea_2.readFeatures(json_Totalarea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Totalarea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Totalarea_2.addFeatures(features_Totalarea_2);
var lyr_Totalarea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Totalarea_2, 
                style: style_Totalarea_2,
                popuplayertitle: 'Totalarea',
                interactive: true,
                title: '<img src="styles/legend/Totalarea_2.png" /> Totalarea'
            });
var format_Totalaream_3 = new ol.format.GeoJSON();
var features_Totalaream_3 = format_Totalaream_3.readFeatures(json_Totalaream_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Totalaream_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Totalaream_3.addFeatures(features_Totalaream_3);
var lyr_Totalaream_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Totalaream_3, 
                style: style_Totalaream_3,
                popuplayertitle: 'Totalaream',
                interactive: true,
                title: '<img src="styles/legend/Totalaream_3.png" /> Totalaream'
            });
var format_Cottage_4 = new ol.format.GeoJSON();
var features_Cottage_4 = format_Cottage_4.readFeatures(json_Cottage_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cottage_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cottage_4.addFeatures(features_Cottage_4);
var lyr_Cottage_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cottage_4, 
                style: style_Cottage_4,
                popuplayertitle: 'Cottage',
                interactive: true,
                title: '<img src="styles/legend/Cottage_4.png" /> Cottage'
            });
var format_pipe_5 = new ol.format.GeoJSON();
var features_pipe_5 = format_pipe_5.readFeatures(json_pipe_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pipe_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pipe_5.addFeatures(features_pipe_5);
var lyr_pipe_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pipe_5, 
                style: style_pipe_5,
                popuplayertitle: 'pipe',
                interactive: true,
                title: '<img src="styles/legend/pipe_5.png" /> pipe'
            });
var format_subpipeshallowdigging_6 = new ol.format.GeoJSON();
var features_subpipeshallowdigging_6 = format_subpipeshallowdigging_6.readFeatures(json_subpipeshallowdigging_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subpipeshallowdigging_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_subpipeshallowdigging_6.addFeatures(features_subpipeshallowdigging_6);
var lyr_subpipeshallowdigging_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_subpipeshallowdigging_6, 
                style: style_subpipeshallowdigging_6,
                popuplayertitle: 'subpipeshallowdigging',
                interactive: true,
                title: '<img src="styles/legend/subpipeshallowdigging_6.png" /> subpipeshallowdigging'
            });
var format_distributionpipe_7 = new ol.format.GeoJSON();
var features_distributionpipe_7 = format_distributionpipe_7.readFeatures(json_distributionpipe_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distributionpipe_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distributionpipe_7.addFeatures(features_distributionpipe_7);
var lyr_distributionpipe_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_distributionpipe_7, 
                style: style_distributionpipe_7,
                popuplayertitle: 'distribution pipe',
                interactive: true,
                title: '<img src="styles/legend/distributionpipe_7.png" /> distribution pipe'
            });
var format_Drippipe_8 = new ol.format.GeoJSON();
var features_Drippipe_8 = format_Drippipe_8.readFeatures(json_Drippipe_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drippipe_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drippipe_8.addFeatures(features_Drippipe_8);
var lyr_Drippipe_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drippipe_8, 
                style: style_Drippipe_8,
                popuplayertitle: 'Drip pipe',
                interactive: true,
                title: '<img src="styles/legend/Drippipe_8.png" /> Drip pipe'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DrJelligudda_1.setVisible(true);lyr_Totalarea_2.setVisible(true);lyr_Totalaream_3.setVisible(true);lyr_Cottage_4.setVisible(true);lyr_pipe_5.setVisible(true);lyr_subpipeshallowdigging_6.setVisible(true);lyr_distributionpipe_7.setVisible(true);lyr_Drippipe_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DrJelligudda_1,lyr_Totalarea_2,lyr_Totalaream_3,lyr_Cottage_4,lyr_pipe_5,lyr_subpipeshallowdigging_6,lyr_distributionpipe_7,lyr_Drippipe_8];
lyr_DrJelligudda_1.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Totalarea_2.set('fieldAliases', {'id': 'id', });
lyr_Totalaream_3.set('fieldAliases', {'id': 'id', });
lyr_Cottage_4.set('fieldAliases', {'id': 'id', });
lyr_pipe_5.set('fieldAliases', {'id': 'id', 'length': 'length', });
lyr_subpipeshallowdigging_6.set('fieldAliases', {'id': 'id', 'length': 'length', });
lyr_distributionpipe_7.set('fieldAliases', {'id': 'id', 'length': 'length', });
lyr_Drippipe_8.set('fieldAliases', {'id': 'id', 'length': 'length', });
lyr_DrJelligudda_1.set('fieldImages', {'Name': '', 'Latitude': '', 'Longitude': '', });
lyr_Totalarea_2.set('fieldImages', {'id': '', });
lyr_Totalaream_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Cottage_4.set('fieldImages', {'id': 'TextEdit', });
lyr_pipe_5.set('fieldImages', {'id': '', 'length': '', });
lyr_subpipeshallowdigging_6.set('fieldImages', {'id': '', 'length': '', });
lyr_distributionpipe_7.set('fieldImages', {'id': '', 'length': '', });
lyr_Drippipe_8.set('fieldImages', {'id': '', 'length': '', });
lyr_DrJelligudda_1.set('fieldLabels', {'Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Totalarea_2.set('fieldLabels', {'id': 'no label', });
lyr_Totalaream_3.set('fieldLabels', {'id': 'no label', });
lyr_Cottage_4.set('fieldLabels', {'id': 'no label', });
lyr_pipe_5.set('fieldLabels', {'id': 'header label - always visible', 'length': 'header label - always visible', });
lyr_subpipeshallowdigging_6.set('fieldLabels', {'id': 'no label', 'length': 'no label', });
lyr_distributionpipe_7.set('fieldLabels', {'id': 'no label', 'length': 'no label', });
lyr_Drippipe_8.set('fieldLabels', {'id': 'no label', 'length': 'no label', });
lyr_Drippipe_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});