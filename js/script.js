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
  camera.position.z = 5;

  // create Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  lighting();
  createShape();
  animate();
}

function createShape() {
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  // const texture = new THREE.TextureLoader().load(
  //   "/media/images/textureTwo.jpg"
  // );
  // let material = new THREE.MeshStandardMaterial({
  //   map: texture,
  // });

  let material = new THREE.MeshStandardMaterial({
    color: '0xF27405'
  });

  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  sceneObjects.push(cube);

}

function animate() {
  renderer.render(scene, camera);
  for (let object of sceneObjects) {
    object.rotation.x += 0.01;
    object.rotation.y += 0.001;
  }
  requestAnimationFrame(animate);
}

function lighting() {
  let pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
  pointLight.position.set(-2, 1, 5);
  pointLight.castShadow = true;
  scene.add(pointLight);

  // let ambientLight = new THREE.AmbientLight(0x404040, 2);
  // scene.add(ambientLight);
}

init();
