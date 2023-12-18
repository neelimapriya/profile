import * as THREE from 'three';

let initialized = false;
export const effect = dom => {
  if (initialized) return;
  initialized = true;

  let scene, camera, renderer, stars, starGeo;

  function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, dom.clientWidth / dom.clientHeight, 1, 1000);
    // camera.position.z = 1;
    // camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(dom.clientWidth, dom.clientHeight);
    dom.appendChild(renderer.domElement);

    starGeo = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 6000; i++) {
      vertices.push(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
    }

    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    let sprite = new THREE.TextureLoader().load('/star.png');
    let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite,
      transparent: true,
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    window.addEventListener('resize', onWindowResize, false);

    animate();
  }

  function onWindowResize() {
    camera.aspect = dom.clientWidth / dom.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(dom.clientWidth, dom.clientHeight);
  }

  function animate() {
    const positions = starGeo.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] -= 0.02; // Update y position
      if (positions[i + 1] < -200) {
        positions[i + 1] = 200;
      }
    }

    starGeo.attributes.position.needsUpdate = true;
    // stars.rotation.y += 0.002;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  init();
};
