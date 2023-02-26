function init() {

// Create Scene
const scene = new THREE.Scene();

// Create Camera 
const camera = new THREE.PerspectiveCamer(
  75, // FOV
  window.innerWidth / window.innerHeight, // Aspect Ratio
  0.1, // Near
  1000 // Far
)

// create Renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement);







  


}





init();