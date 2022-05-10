import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene1 = new THREE.Scene()
const scene2 = new THREE.Scene()

const camera1 = new THREE.PerspectiveCamera(75, 1, 0.1, 10)
const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
const camera3 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
const camera4 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
camera1.position.z = 2
camera2.position.y = 2
camera3.position.x = -2
camera4.position.z = 2
camera2.lookAt(new THREE.Vector3(0, 0, 0))
camera3.lookAt(new THREE.Vector3(0, 0, 0))

const canvas1 = document.getElementById('c1') as HTMLCanvasElement
const canvas2 = document.getElementById('c2') as HTMLCanvasElement
const canvas3 = document.getElementById('c3') as HTMLCanvasElement
const canvas4 = document.getElementById('c4') as HTMLCanvasElement

const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 })
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 })
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 })
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 })
renderer1.setSize(200, 200)
renderer2.setSize(200, 200)
renderer3.setSize(200, 200)
renderer4.setSize(200, 200)
// document.body.appendChild(renderer.domElement)

new OrbitControls(camera1, renderer1.domElement)

const geometry = new THREE.TorusKnotGeometry() // new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true
})

const cube1 = new THREE.Mesh(geometry, material)
const cube2 = new THREE.Mesh(geometry, material)
cube1.scale.x = 0.5
cube1.scale.y = 0.5
cube1.scale.z = 0.5
cube2.scale.x = 0.5
cube2.scale.y = 0.5
cube2.scale.z = 0.5
scene1.add(cube1)
scene2.add(cube2)

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   render()
// }

function animate() {
  requestAnimationFrame(animate)

  cube1.rotation.x += 0.01
  cube1.rotation.y += 0.01

  cube2.rotation.y += 0.01

  render()
}

function render() {
  renderer1.render(scene1, camera1)
  renderer2.render(scene1, camera2)
  renderer3.render(scene2, camera3)
  renderer4.render(scene1, camera4)
}

animate()
