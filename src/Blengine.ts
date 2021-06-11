import * as THREE from "three";
import {BlengineConfig} from "./config";
import ecs, {Signature} from "blecs";
import initControls from "./controls/initControls";

import {
    GetKey,
    GetKeyInteger,
    GetMouse,
    IsPointerLock,
} from "./controls";

// designed to be a singleton class instance
class Blengine {

    clock : THREE.Clock;
    scene : THREE.Scene;
    camera : THREE.PerspectiveCamera;
    renderer : THREE.WebGLRenderer;
    controls : any;

    constructor() {
        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
        this.renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
        this.controls = {
            GetKey: GetKey,
            GetKeyInteger: GetKeyInteger,
            GetMouse: GetMouse,
            IsPointerLock: IsPointerLock,
        };


        initControls(this.renderer.domElement);
    }

    init(config : BlengineConfig) {
        for (let i = 0; i < config.components.length; i++) {
            ecs.RegisterComponent(config.components[i].name);
        }

        for (let i = 0; i < config.systems.length; i++) {
            // create the system signature used to 
            // "subscribe" our system to a set of   
            // components
            let sig = new Signature();
            for (let j = 0; j < config.systems[i].componentSubscriptions.length; j++) {
                sig.set(ecs.GetComponentType(config.systems[i].componentSubscriptions[j].name), 1);
            }
            ecs.RegisterSystem(config.systems[i].name, config.systems[i].system);
            ecs.SetSystemSignature(config.systems[i].name, sig);
        }


    }

};

export default Blengine;
