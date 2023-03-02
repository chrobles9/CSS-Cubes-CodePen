let scene, camera, renderer;
let sceneObjects = [];

function initScene() {
  // Create Scene
  scene = new THREE.Scene();
  // Create Camera
  camera = new THREE.PerspectiveCamera(
    75, // FOV
    window.innerWidth / window.innerHeight, // Aspect Ratio
    0.1, // Near
    1000 // Far
  );
  // change camera postition avoid view inside shape
  camera.position.z = 8;
  // create Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Add renderer to page
  document.body.appendChild(renderer.domElement);
  lighting();
  tetra();
  cube();
  background();
  animate();
}

// Smaller inner Tetrahedron Geometry
function tetra() {
  const geometry = new THREE.TetrahedronGeometry(2, 0);
  var material = new THREE.MeshStandardMaterial({
    color: 0xff4c09,
    transparent: true,
    // opacity: 0.8,
  });
  const tetra = new THREE.Mesh(geometry, material);
  scene.add(tetra);
  sceneObjects.push(tetra);
}

// Larger Outer Cube
function cube() {
  const geometry = new THREE.BoxGeometry(4, 4, 4);
  const material = new THREE.MeshStandardMaterial({
    color: 0x09ffd1,
    transparent: true,
    opacity: 0.6,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  sceneObjects.push(cube);
}

function background() {
  // Add texture to scene background
  const backgroundTexture = new THREE.TextureLoader().load(
    "./media/images/background.jpg"
  );
  scene.background = backgroundTexture;
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // Rotate Tetrahedron
  sceneObjects[0].rotation.x += 0.01;
  sceneObjects[0].rotation.y += 0.01;
  // Rotate cube
  sceneObjects[1].rotation.x -= 0.01;
  sceneObjects[1].rotation.y -= 0.01;
}

function lighting() {
  let pointLight = new THREE.PointLight(0xffffff, 2);
  pointLight.position.set(-3, 3, 3);
  pointLight.castShadow = true;
  let ambientLight = new THREE.AmbientLight(0x404040, 2);
  // Add lighting to cube scene
  scene.add(pointLight, ambientLight);
  // Visual light helper for lighting and shadows
  // const lightHelper = new THREE.PointLightHelper(pointLight);
  // scene.add(lightHelper);
}

initScene();
