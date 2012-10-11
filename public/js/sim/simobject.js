define(function(require, exports, module) {
        var Box2D = require('box2d/box2d');
        var klass = require('klass/klass');
        //Return the module value
        return function () {
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



            var SimObject = klass(function(config) {
                this.applyConfig(config, {

                })
            }).methods({


            }).statics({


        });



            return SimObject;
        };
    }
);