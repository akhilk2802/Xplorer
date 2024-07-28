import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create the player
  const playerGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const playerMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const player = new THREE.Mesh(playerGeometry, playerMaterial);
  scene.add(player);

  // Handle player movement
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        player.position.z -= 0.1;
        break;
      case "ArrowDown":
        player.position.z += 0.1;
        break;
      case "ArrowLeft":
        player.position.x -= 0.1;
        break;
      case "ArrowRight":
        player.position.x += 0.1;
        break;
    }
  });

  // Spawn monsters
  function spawnMonster() {
    const monsterGeometry = new THREE.BoxGeometry();
    const monsterMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const monster = new THREE.Mesh(monsterGeometry, monsterMaterial);

    monster.position.x = Math.random() * 10 - 5;
    monster.position.z = Math.random() * 10 - 5;

    scene.add(monster);
  }

  // Check for collisions
  function checkCollisions() {
    scene.children.forEach((object) => {
      if (
        object !== player &&
        object.geometry &&
        player.position.distanceTo(object.position) < 1
      ) {
        // Handle encounter
        const fight = confirm("Do you want to fight the monster?");
        if (fight) {
          // Show fight animation
          alert("You win! Proceeding to next level.");
        } else {
          alert("You chose to skip the fight.");
        }
      }
    });
  }

  // Main game loop
  function animate() {
    requestAnimationFrame(animate);
    checkCollisions();
    renderer.render(scene, camera);
  }

  animate();
  setInterval(spawnMonster, 5000); // Spawn a monster every 5 seconds

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

init();
