<template>
    <div>
        <canvas ref="container" />
    </div>
</template>

<script>
// import * as PIXI from 'pixi.js'
import { Engine, Render, World, Body, Bodies, Constraint, Matter } from 'matter-js';
import MatterAttractors from 'matter-attractors';

export default {
    name: 'InteractivePhysics',

    data () {
        return {
            world: {},
            engine: {},
        };
    },

    mounted () {
        // // The application will create a renderer using WebGL, if possible,
        // // with a fallback to a canvas render. It will also setup the ticker
        // // and the root stage PIXI.Container
        // const app = new PIXI.Application();

        // // The application will create a canvas element for you that you
        // // can then insert into the DOM
        // // document.body.appendChild(app.view);
        // this.$refs.container.appendChild(app.view);

        // // load the texture we need
        // app.loader.add('bunny', 'bunny.png').load((loader, resources) => {
        //     // This creates a texture from a 'bunny.png' image
        //     const bunny = new PIXI.Sprite(resources.bunny.texture);

        //     // Setup the position of the bunny
        //     bunny.x = app.renderer.width / 2;
        //     bunny.y = app.renderer.height / 2;

        //     // Rotate around the center
        //     bunny.anchor.x = 0.5;
        //     bunny.anchor.y = 0.5;

        //     // Add the bunny to the scene we are building
        //     app.stage.addChild(bunny);

        //     // Listen for frame updates
        //     app.ticker.add(() => {
        //         // each frame we spin the bunny around a bit
        //         bunny.rotation += 0.01;
        //     });
        // });



        // create an engine
        var engine = Engine.create();
        // engine.enableSleeping = true;

        // create a renderer
        var render = Render.create({
            canvas: this.$refs.container,
            engine: engine,
            options: {
                // width: 800,
                // height: 600,
                background: 'white',
                wireframes: false
            }
        });

        engine.world.gravity.x = 355;
        engine.world.gravity.y = 125;
        engine.world.gravity.isPoint = true;

        // context.translate(0.5, 0.5);

        // // Set display size (css pixels).
        // var size = 600;
        // canvas.style.width = size + "px";
        // canvas.style.height = size + "px";      

        // // Set actual size in memory (scaled to account for extra pixel density).
        // var scale = window.devicePixelRatio; // <--- Change to 1 on retina screens to see blurry canvas.
        // canvas.width = size * scale;
        // canvas.height = size * scale;       

        // // Normalize coordinate system to use css pixels.
        // context.scale(scale, scale);

        // create two boxes and a ground
        var boxA = Bodies.rectangle(400, 200, 80, 30);
        var boxB = Bodies.rectangle(450, 50, 80, 80);
        var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        // add all of the bodies to the world
        this.world = engine.world;
        this.engine = engine;
        World.add(engine.world, [boxA, boxB, ground]);

        // run the engine
        Engine.run(engine);

        // run the renderer
        Render.run(render);
    },

    methods: {
        addNewCircle () {
            var addCircle = function () {
                const circle = Bodies.circle(Math.random()*400 + 30, 30, 30);
                Body.setVelocity( circle, {x: 2, y: -2});
                return circle;
            };

            World.add(this.world, addCircle())
        },
    }
}
</script>