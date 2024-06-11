var map = L.map('map').setView([-14.179186, -49.570312], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.terrai_nom) {
        layer.bindPopup(
            '<b>Nome da Terra:</b> ' + feature.properties.terrai_nom + '<br>' +
            '<b>Etnia:</b> ' + feature.properties.etnia_nome + '<br>' +
            '<b>Município:</b> ' + feature.properties.municipio_ + '<br>' +
            '<b>Estado:</b> ' + feature.properties.uf_sigla + '<br>' +
            '<b>Superfície:</b> ' + feature.properties.superficie + ' ha<br>' +
            '<b>Status:</b> ' + feature.properties.fase_ti + '<br>' +
            '<b>Modalidade:</b> ' + feature.properties.modalidade + '<br>' +
            '<b>Coordenação Regional:</b> ' + feature.properties.cr + '<br>' +
            '<b>Faixa de Fronteira:</b> ' + feature.properties.faixa_fron + '<br>' +
            '<b>Unidade Administrativa:</b> ' + feature.properties.undadm_nom + ' (' + feature.properties.undadm_sig + ')<br>' +
            '<b>Dominio:</b> ' + feature.properties.dominio_un
        );
    }
}

function onGeoJsonLoaded(data) {
    L.geoJSON(data, {
        onEachFeature: onEachFeature
    }).addTo(map);
    console.log('GeoJSON carregado com sucesso:', data);
}

function onGeoJsonError(error) {
    console.error('Erro ao carregar o GeoJSON:', error);
}

fetch('GEOFT_TERRA_INDIGENA.json')
    .then(response => response.json())
    .then(onGeoJsonLoaded)
    .catch(onGeoJsonError);