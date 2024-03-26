const Panorama2 = new PANOLENS.ImagePanorama("assets/Panorama_1.jpg");
const Panorama1 = new PANOLENS.ImagePanorama("assets/Panorama_2.jpg");
const Panorama3 = new PANOLENS.ImagePanorama("assets/Panorama_3.jpg");
let imageContainer = document.querySelector(".panorama__container");

let SpotPositions = [
    new THREE.Vector3(-2100, 0, 300),
    new THREE.Vector3(-2500, 0, 300),
    new THREE.Vector3(1700, 0, 100),
    new THREE.Vector3(-3000, 0, -1000),
];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: false,
    cameraFov: 65,
});

Panorama2.link(Panorama1, SpotPositions[0]);
Panorama1.link(Panorama2, SpotPositions[1]);

Panorama1.link(Panorama3, SpotPositions[2]);
Panorama3.link(Panorama1, SpotPositions[3]);

viewer.add(Panorama1, Panorama2, Panorama3);
