//  ________   ___  ___  __    _____ ______   ________      
// |\   ___  \|\  \|\  \|\  \ |\   _ \  _   \|\   ____\     
// \ \  \\ \  \ \  \ \  \/  /|\ \  \\\__\ \  \ \  \___|_    
//  \ \  \\ \  \ \  \ \   ___  \ \  \\|__| \  \ \_____  \   
//   \ \  \\ \  \ \  \ \  \\ \  \ \  \    \ \  \|____|\  \  
//    \ \__\\ \__\ \__\ \__\\ \__\ \__\    \ \__\____\_\  \ 
//     \|__| \|__|\|__|\|__| \|__|\|__|     \|__|\_________\
//                                              \|_________|

//NIKMS




import React, {Component} from "react";
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader} from 'three/examples/jsm/loaders/RGBELoader';
import {RoughnessMipmapper} from 'three/examples/jsm/utils/RoughnessMipmapper';
import textmap from '../royal_esplanade_1k.hdr';
import gltf1 from './stage.glb';
import gltf2 from './microphone.glb';
//import textgltf from './Speakertext.glb';
let mobileresp = window.matchMedia("(max-width: 700px)");

const scene = new THREE.Scene();
const renderer = new THREE.WebGL1Renderer({ antialias: true });
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
const loadergltf = new GLTFLoader();

const controls = new OrbitControls( camera, renderer.domElement );
var isMouseDown;
function render() {
    renderer.render( scene, camera );
}
function onMouseDown(){
    isMouseDown = true;
}

function onMouseUp(){
    isMouseDown = false;
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();

}
function animate() {

    requestAnimationFrame( animate );

    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

    render();

}



class ThreeScene extends Component {
    componentDidMount(){
        //scene and renderer
        
        renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1;
		renderer.outputEncoding = THREE.sRGBEncoding;
        this.mount.appendChild(renderer.domElement);

        //camera
        camera.position.set( 0, 0, 7);
        camera.position.set.z = 7;
        //controls
        controls.enableZoom = false;
        controls.maxPolarAngle = Math.PI / 2;
		controls.addEventListener( 'change', render ); // use if there is no animation loop
        controls.autoRotate = true;
		controls.minDistance = 7;  
		controls.maxDistance = 9; 
        controls.target.set( 0, 0, - 0.2 );
		controls.update();
		controls.listenToKeyEvents( window );
        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
		controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;

        window.addEventListener('resize', onWindowResize );
		window.addEventListener('mousedown', onMouseDown);
    	window.addEventListener('mouseup', onMouseUp);
        //Disable orbit on small devices
        if(mobileresp.matches){
            controls.enabled = false;
        }


        //camera and lighting
      
		
        const dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
        dirLight.position.set( 0, 0, 1 ).normalize();
		scene.add( dirLight );
        const pointLight = new THREE.PointLight( 0xffffff, 1.5 );
		pointLight.position.set( 0, 100, 90 );
		scene.add( pointLight );
        const light = new THREE.AmbientLight( 0xffffff ); // soft white light
		scene.add( light );

        //load background and gltf
       
        //load background
        var loader = new RGBELoader();
        loader.setDataType(THREE.UnsignedByteType);
        loader.load(textmap, function(texture) {

            texture.mapping = THREE.EquirectangularReflectionMapping;
            
            scene.background = texture;
            scene.environment = texture;

            render();

            //models
            const roughnessMipmapper = new RoughnessMipmapper( renderer );	
            //stage
            
			loadergltf.load( gltf1, function ( gltf ) {

							gltf.scene.traverse( function ( child ) {

								if ( child.isMesh ) {

									roughnessMipmapper.generateMipmaps( child.material );

								}

							} );
                            if(mobileresp.matches){
                                gltf.scene.scale.set(.6, .6 ,.6);
                            }

							scene.add( gltf.scene );

							roughnessMipmapper.dispose();
							
							renderer.render(scene, camera);

			},
            // called while loading is progressing
            function ( xhr ) {
        
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
            },
            // called when loading has errors
            function ( error ) {
        
                console.log( 'An error happened' );
        
            });
            //mic
            loadergltf.load( gltf2, function ( gltf ) {

                gltf.scene.traverse( function ( child ) {

                    if ( child.isMesh ) {

                        roughnessMipmapper.generateMipmaps( child.material );

                    }

                } );

                scene.add( gltf.scene );
                gltf.scene.position.y = -1.3;
                gltf.scene.scale.set(0.8,0.8,0.8);
                if(mobileresp.matches){
                    gltf.scene.scale.set(.6, .6 ,.6);
                    gltf.scene.position.y = -0.8;
                }
                
                roughnessMipmapper.dispose();
                
                render();

            },
            // called while loading is progressing
            function ( xhr ) {
        
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
            },
            // called when loading has errors
            function ( error ) {
        
                console.log( 'An error happened' );
        
            } );

    //added text gltf

    /*
    loadergltf.load( textgltf, function ( gltf ) {

        gltf.scene.traverse( function ( child ) {

            if ( child.isMesh ) {

                roughnessMipmapper.generateMipmaps( child.material );

            }

        } );
        gltf.scene.position.y = 0;
        gltf.scene.position.x = -1.3;
        gltf.scene.rotation.y =3*(Math.PI/2);
        scene.add( gltf.scene );
        

        roughnessMipmapper.dispose();
        
        render();

    },
    // called while loading is progressing
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    } );
    */
						

});



        //importing objects
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({
            color: 0x004f00
        });
        this.cube = new THREE.Mesh(geometry, material);

        //scene.add(this.cube);
        this.animation();
        renderer.render(scene, camera);
    }

    animation= ()=>{
        requestAnimationFrame(this.animation);
        controls.update();
        renderer.render(scene, camera);
    }

    
    

    render(){
        return(
            <div
            ref={mount =>{
                this.mount = mount;
            }} />
        )
    }
}

export default ThreeScene;