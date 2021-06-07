//

import * as THREE from "three";
import bl from "blengine";

import ecs, {Signature, System} from "blecs";

ecs.RegisterComponent("cubemesh");

function main() {

    bl.camera.position.z = 5;

    for ( let i = 0; i < 10; i++ ) {
        let e = ecs.CreateEntity();

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: Math.random() * 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );

        bl.scene.add(cube);

        cube.position.set(i * (1.5) - 7.5, 0, 0);

        ecs.AddComponent(e, "cubemesh", cube);
    }

    update();
}

const cubes = ({dt, entities} : any) => {
    entities.forEach((entityID : number) => {
        let cube = ecs.GetComponent(entityID, "cubemesh");
      
        cube.rotation.x += dt * 0.5;
        cube.rotation.y += dt * 0.5;

    });
}

const CubesSystem = new System(cubes);

let sig = new Signature();
// "subscribe" to entities which have a position component
sig.set(ecs.GetComponentType("cubemesh"), 1);
ecs.RegisterSystem("cubesSystem", CubesSystem);
ecs.SetSystemSignature("cubesSystem", sig);

function update() {

    requestAnimationFrame( () => update() );

    let dt : number = bl.clock.getDelta();

    CubesSystem.update(dt);

    bl.renderer.render(bl.scene, bl.camera);

}

export default main;
