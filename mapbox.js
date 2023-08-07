mapboxgl.accessToken = 'pk.eyJ1IjoibWl0cmliZWxsIiwiYSI6ImNsa254dndtMjA1OHIzZGs1dTE5ZWYzdDIifQ.TWdYke6lFIgEtk3KZAaHrg';
 
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mitribell/clkp04typ003q01qx6seodzc7'
});
map.on('click', (event) => {
const features = map.queryRenderedFeatures(event.point, {
layers: ['symbols']
});
if (!features.length) {
return;
}
const feature = features[0];
 
const popup = new mapboxgl.Popup({ offset: [0, -15] })
.setLngLat(feature.geometry.coordinates)
.setHTML(
`<h3><a href = '${feature.properties.URL}'>${feature.properties.Name}</a></h3>`
)
.addTo(map);
});