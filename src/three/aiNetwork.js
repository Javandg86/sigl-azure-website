import * as THREE from 'three'

export function initAiTrustNetwork(container) {
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    65,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 34

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(container.clientWidth, container.clientHeight)
  container.appendChild(renderer.domElement)

  const group = new THREE.Group()
  scene.add(group)

  const nodeCount = 95
  const positions = []
  const nodeGeometry = new THREE.SphereGeometry(0.12, 16, 16)
  const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x7cddff })

  for (let i = 0; i < nodeCount; i++) {
    const x = (Math.random() - 0.5) * 42
    const y = (Math.random() - 0.5) * 24
    const z = (Math.random() - 0.5) * 22
    positions.push(new THREE.Vector3(x, y, z))

    const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
    node.position.set(x, y, z)
    group.add(node)
  }

  const linePositions = []
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      if (positions[i].distanceTo(positions[j]) < 8) {
        linePositions.push(
          positions[i].x, positions[i].y, positions[i].z,
          positions[j].x, positions[j].y, positions[j].z
        )
      }
    }
  }

  const lineGeometry = new THREE.BufferGeometry()
  lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x7cddff,
    transparent: true,
    opacity: 0.18
  })

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
  group.add(lines)

  const coreGeometry = new THREE.IcosahedronGeometry(2.7, 2)
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.62
  })

  const core = new THREE.Mesh(coreGeometry, coreMaterial)
  group.add(core)

  const mouse = { x: 0, y: 0 }

  function onMouseMove(e) {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
  }

  function onResize() {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  }

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('resize', onResize)

  function animate() {
    group.rotation.y += 0.0018
    group.rotation.x += 0.0009
    group.rotation.y += mouse.x * 0.0009
    group.rotation.x += mouse.y * 0.0007

    core.rotation.x += 0.006
    core.rotation.y += 0.008

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  animate()

  return () => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', onResize)
    renderer.dispose()
    container.innerHTML = ''
  }
}
