import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'

import { TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js'
/**
 * Base
 */
// Debug
const fontLoader = new FontLoader()


const clock = new THREE.Clock()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

/**
 * Object 
 * knowwhere nowhere now here know where
 * 
 */


 fontLoader.load('../static/fonts/fonts/helvetiker_bold.typeface.json', (font) =>{

    const textGeometry = new TextGeometry(
        'k',
        {
            font: font,
            size: 0.5,
            height: 0.2,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }
  
    )
    
        const textMaterial = new THREE.MeshStandardMaterial({color:'grey'})
        const textk = new THREE.Mesh(textGeometry,textMaterial)
        textMaterial.wireframe = false
        scene.add(textk)
        textk.position.x = -1.7 
      
  
  } )





  

 fontLoader.load('../static/fonts/fonts/helvetiker_bold.typeface.json', (font) =>{

  const textGeometry = new TextGeometry(
      'now',
      {
          font: font,
          size: 0.5,
          height: 0.2,
          curveSegments: 5,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5
      }

  )
  
      const textMaterial = new THREE.MeshStandardMaterial({color:'grey'})
      const text = new THREE.Mesh(textGeometry,textMaterial)
      textMaterial.wireframe = false
      scene.add(text)
      text.position.x = -1.3

} )


fontLoader.load('../static/fonts/fonts/helvetiker_bold.typeface.json', (font) =>{

    const textGeometry = new TextGeometry(
        'here',
        {
            font: font,
            size: 0.5,
            height: 0.2,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }

    )
    
        const textMaterial = new THREE.MeshStandardMaterial({color:'grey'})
        const text = new THREE.Mesh(textGeometry,textMaterial)
        textMaterial.wireframe = false
        scene.add(text)
        text.position.x = 0.15

} )




const bgsphere = new THREE.SphereGeometry(30,30,30)
const bgtexture = new THREE.MeshBasicMaterial()
const bg = textureLoader.load('../static/bg/Stonewall_Bg.jpg')
bgtexture.map = bg

bgtexture.side = 1

const bggood = new THREE.Mesh(bgsphere,bgtexture)

scene.add(bggood)




const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)


const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = 4
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = -1
camera.position.z = 2.5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */





const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

  const xvalue = elapsedTime * 0.05
pointLight.position.x = - (Math.sin(elapsedTime) * 0.3) 


  //bggood.rotation.y = 0.5
//bggood.rotation.y = -0.8
//bggood.rotation.y = 1.8
//bggood.rotation.x = -1.8 
bggood.rotation.y = xvalue
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()