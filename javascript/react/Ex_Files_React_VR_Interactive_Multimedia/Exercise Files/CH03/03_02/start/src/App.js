import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  StyleSheet,
  Model,
  Animated,
} from 'react-vr';
import Easing from 'react-vr';
import TextScene from './TextScene';

const AnimatedModel = Animated.createAnimatedComponent(Model);

export default class spaceman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'space.jpg',
            satelliteRotZ: new Animated.Value(0),
        }
    }

    componentDidMount() {
        this.state.satelliteRotZ.setValue(0);
        Animated.timing(
            this.state.satelliteRotZ,
            {
                toValue: -300,
                duration: 10000,
                delay: 2000,
                easing: Easing.inOut
            }
        ).start();
    }

    render() {
        return (
            <View>
                <AmbientLight intensity={ 2.5 } />
                <Pano source={asset(this.state.background)}/>
                <TextScene />
                <AnimatedModel 
                    source={{
                        obj: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.obj'),
                        mtl: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.mtl')
                    }}
                    style={{
                        transform: [
                            { translateX: -1 },
                            { translateY: 0 },
                            { translateZ: -0.75 },
                            { scale: 0.075 },
                            { rotateX: 180 },
                            { rotateY: -360 },
                            { rotateZ: this.state.satelliteRotZ  }
                        ]
                    }}
                />
            </View>
        );
    }
};
