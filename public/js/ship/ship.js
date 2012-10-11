define(function (require, exports, module) {

//        var SimObject = require('sim/simobject');
        var Box2D = require('box2d/box2d');
        var klass = require('klass');
        //Return the module value
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

            var Ship = klass(function (config) {
                this.type = Ship.types.dynamic;

                this.applyConfig(config, {
                    length:173,
                    beam:23.8,
                    scale:0.04

                });
                var fixDef = new b2FixtureDef;
                fixDef.density = 1.0;
                fixDef.friction = 0.5;
                fixDef.restitution = 0.2;

                var bodyDef = new b2BodyDef;
                var vertices = Ship.createShape(this.length, this.beam);
                var vertCount = vertices.length;
                bodyDef.type = this.type;
                fixDef.shape = new b2PolygonShape;
                fixDef.shape.SetAsArray(vertices, vertCount);

                bodyDef.position.x = this.initialPosition.x;
                bodyDef.position.y = this.initialPosition.y;
                bodyDef.angularDamping = 1;
                this.setDefs(bodyDef, fixDef);

                this.body = null;

                this.fixture = null;

                this.ocShape.x = this.bodyDef.position.x*30;
                this.ocShape.y = this.bodyDef.position.y*30;


            }).methods({
                    addToWorld: function(world) {
                        this.body = world.CreateBody(this.bodyDef);
                        this.fixture = this.body.CreateFixture(this.fixtureDef);
                    },
                    setDefs: function(bodyDef, fixtureDef) {
                        this.bodyDef = bodyDef;
                        this.fixtureDef = fixtureDef;
                    },
                    applyConfig: function(config, defaults) {
                        Ship.applyConfigTo(this, config, defaults);
                    },
                    update: function() {
                        this.ocShape.x = this.body.GetPosition().x*30;
                        this.ocShape.y = this.body.GetPosition().y*30;
                    }
                }).statics({
                    createShape:function (length, beam) {
                        var hl = length / 2;
                        var hb = beam / 2;
                        var vertices = [];

                        vertices.push(Ship.getBez(0.9, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.8, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.7, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.6, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.5, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.4, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.3, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.2, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.15, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.1, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.05, new b2Vec2(hb / 6 * -5, hl), new b2Vec2(-1 * hb, hl / 4), new b2Vec2(-1 * hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));

                        vertices.push(new b2Vec2(0, hl * -1));
//
                        vertices.push(Ship.getBez(0.05, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.1, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.15, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.2, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.3, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.4, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.5, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.6, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.7, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.8, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(Ship.getBez(0.9, new b2Vec2(hb / 6 * 5, hl), new b2Vec2(hb, hl / 4), new b2Vec2(hb, hl / 4 * -3), new b2Vec2(0, hl * -1)));
                        vertices.push(new b2Vec2(hb / 6 * 5, hl));
                        vertices.push(new b2Vec2(hb / 6 * -5, hl));

                        return vertices;
                    },

                    getBez:function (percent, p1, cp1, cp2, p2) {
                        function b1(t) {
                            return t * t * t
                        }

                        function b2(t) {
                            return 3 * t * t * (1 - t)
                        }

                        function b3(t) {
                            return 3 * t * (1 - t) * (1 - t)
                        }

                        function b4(t) {
                            return (1 - t) * (1 - t) * (1 - t)
                        }

                        return new b2Vec2((p1.x * b1(percent) + cp1.x * b2(percent) + cp2.x * b3(percent) + p2.x * b4(percent)), (p1.y * b1(percent) + cp1.y * b2(percent) + cp2.y * b3(percent) + p2.y * b4(percent) ));
                    },
                    types: {
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


            return Ship;

    }
);