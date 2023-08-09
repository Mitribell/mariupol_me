mapboxgl.accessToken = 'pk.eyJ1IjoibWl0cmliZWxsIiwiYSI6ImNsbDNscXVpaDBscWszZW81cTF1YXkzcGUifQ.ME7L72mUq6O6ARdRw9Xk2A';
 
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
    `<img src='image/${feature.properties.Image}' />
    <h2><a href = '${feature.properties.URL}'>${feature.properties.Name}</a></h2>`
)
.addTo(map);
});