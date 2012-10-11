define(['klass', 'box2d/box2d'], function(klass,Box2D) {


        var b2Vec2 = Box2D.Common.Math.b2Vec2
            , b2Math = Box2D.Common.Math.b2Math
            , b2AABB = Box2D.Collision.b2AABB
            , b2BodyDef = Box2D.Dynamics.b2BodyDef
            , b2Body = Box2D.Dynamics.b2Body
            , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
            , b2Fixture = Box2D.Dynamics.b2Fixture
            , b2World = Box2D.Dynamics.b2World
            , b2MassData = Box2D.Collision.Shapes.b2MassData
            , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
            , b2ChainShape = Box2D.Collision.Shapes.b2EdgeChainDef

            , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
            , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
            , b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef
            ;
        var Sim = klass(function(config) {

            this.applyConfig(config, {
                gravity: {
                    x: 0,
                    y: 1
                },
                allowSleep: true,
                objects: [[],[],[]]

            });


            this.world = new b2World(
                new b2Vec2(this.gravity.x, this.gravity.y),
                this.allowSleep
            );


        }).methods({

                applyConfig: function(config, defaults) {
                    Sim.applyConfigTo(this, config, defaults);
                },
                addObject: function(object) {
                    console.dir(object.type);
                    this.objects[object.type].push(object);
                    object.addToWorld(this.world);
                },
                update: function() {


                    this.world.Step(1 / 60, 10, 10);
                    for (var i = 0; i < this.objects[Sim.type.dynamic].length; i++) {
                        this.objects[Sim.type.dynamic][i].update();
                    }
                    this.world.ClearForces();
                }
            }).statics({
                type: {
                    static: Box2D.Dynamics.b2Body.b2_staticBody,
                    kinematic: Box2D.Dynamics.b2Body.b2_kinematicBody,
                    dynamic: Box2D.Dynamics.b2Body.b2_dynamicBody
                },
                applyConfigTo: function(object, config, defaults) {

                    if (config === undefined || config === null) {
                        config = {};
                    }
                    if (defaults === undefined || defaults === null) {
                        defaults = {};
                    }

                    var defs = {},
                        key = null,
                        defaultKey = null;
                    for (defaultKey in defaults) {
                        if (defaults.hasOwnProperty(defaultKey) && !config.hasOwnProperty(defaultKey)) {
                            object[defaultKey] = defaults[defaultKey];
                        }
                    }

                    for (key in config) {
                        if (config.hasOwnProperty(key)) {
                            object[key] = config[key];
                        }
                    }
                    return Object.create(this, defs);
                }

            });
    return Sim;
});