import './index.css'

import * as THREE from 'three'

//Create Scene
var scene = new THREE.Scene();

//Create Camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Create renderer and add it to canvas dom element
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const el = document.getElementById("canvas");
el.innerHTML = '';
el.appendChild(renderer.domElement);

var cubeGeometry=new THREE.BoxGeometry(1, 1, 1);

//Create example cube
var cube = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
var cubeWireframe = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial({ color: 0x000000,wireframe:true }));
cube.add(cubeWireframe);

scene.add(cube);

camera.position.z = 5;

const RotationSpeed=0.05;

function animate() {
	requestAnimationFrame(animate);		
	
	cube.rotation.x += RotationSpeed;
	cube.rotation.y += RotationSpeed;    
	
	renderer.render(scene, camera);
}
animate();