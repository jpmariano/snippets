import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  StyleSheet,
  Model,
} from 'react-vr';
import TextScene from './TextScene';

export default class spaceman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'space.jpg',
        }
    }

    render() {
        return (
            <View>
                <AmbientLight intensity={ 2.5 } />
                <Pano source={asset(this.state.background)}/>
                <TextScene />
                <Model 
                    source={{
                        obj: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.obj'),
                        mtl: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [-1, 0, -0.75] },
                            { scale: 0.075 },
                            { rotateX: 180 },
                            { rotateY: -360 } 
                        ]
                    }}
                />
                <Model 
                    source={{
                        obj: asset('/Loral-1300Com-obj/Loral-1300Com-main.obj'),
                        mtl: asset('/Loral-1300Com-obj/Loral-1300Com-main.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [3, 0, -10] },
                            { scale: 0.01 },
                            { rotateX: 30 },
                            { rotateY: -45 } 
                        ]
                    }}
                />
                <Model 
                    source={{
                        obj: asset('/EMU/EMU.obj'),
                        mtl: asset('/EMU/EMU.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [-1.75, -0.5, -0.5] },
                            { scale: 0.5 },
                            { rotateY: 180 } 
                        ]
                    }}
                />
            </View>
        );
    }
};
