import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from "gsap";

const camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 13;

const scene = new THREE.Scene();
let btf;
const loader = new GLTFLoader();
loader.load("stylized_flying_bee_bird_rigged.glb", function (gltf) {
  btf = gltf.scene;
  btf.position.y =  -1;
  btf.rotation.y =  1.5;
  btf.scale.set(0.023, 0.023, 0.023)
  console.log(btf);
  
  scene.add(btf);
},function (xhr) {}, function (err) {
    console.log(err);
    
});

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container3D").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();