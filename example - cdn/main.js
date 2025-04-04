import * as THREE from "three";

// 1- Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 2- Add the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
); // Field of View, aspect ratio, near and far clipping planes
camera.position.z = 5; // Set the camera position

// 3- Create and add a cube object
const geometry = new THREE.BoxGeometry(); // Create a cube geometry
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: "#468585",
});

const cube = new THREE.Mesh(geometry, material); // Create a mesh with the geometry and material
scene.add(cube); // Add the cube to the scene

// 4- Add lighting
const light = new THREE.DirectionalLight(0x9cdba6, 1); // color, intensity
light.position.set(1, 1, 1);
scene.add(light); // Add the light to the scene

// 5- Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer
document.body.appendChild(renderer.domElement); // Append the renderer to the document body

// 6- Animate the scene
function animate() {
  requestAnimationFrame(animate); // Request the next frame

  cube.rotation.x += 0.01; // Rotate the cube around the x-axis
  cube.rotation.y += 0.01; // Rotate the cube around the y-axis

  renderer.render(scene, camera); // Render the scene from the camera's perspective
}

animate();
