

let scene;
let camera;
let renderer;
let sceneObjects = [];

function init() {
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
  camera.position.z = 6;

  // create Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // const controls = new OrbitControls(camera, renderer.domElement);

  lighting();
  createShape();
  animate();

  scene.add(controls);
}

function createShape() {
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshStandardMaterial({
    color: 0xf27405,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  sceneObjects.push(cube);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  for (let object of sceneObjects) {
    object.rotation.x += 0.01;
    object.rotation.y += 0.001;
  }
}

function lighting() {
  let pointLight = new THREE.PointLight(0xffffff, 2);
  pointLight.position.set(-2, 2, 2);
  pointLight.castShadow = true;
  let ambientLight = new THREE.AmbientLight(0x404040);

  scene.add(pointLight, ambientLight);

  const lightHelper = new THREE.PointLightHelper(pointLight);
  scene.add(lightHelper);
}

init();
