var canvas = document.getElementById("renderCanvas"); // Get the canvas element
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/
        var createScene = function () {

            // Create the scene space
            var scene = new BABYLON.Scene(engine);
            scene.clearColor = BABYLON.Color3.Black();

            // Add a camera to the scene and attach it to the canvas
            var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), scene);
            //var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);
            
        //     camera.useFramingBehavior = true;
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.attachControl(canvas, true);
            // Add lights to the scene
            var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
            var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

            // Add and manipulate meshes in the scene
            //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);

            // Adding Logo to scene
            BABYLON.SceneLoader.Append("./", "mlogo.obj", scene, function(meshes) {

            });
            var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, 10, 1), scene);
            return scene;
        };
        /******* End of the create scene function ******/

        var scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
                scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
                engine.resize();
        });