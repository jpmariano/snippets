import React from 'react';
import { Text, View, StyleSheet, Video, asset, VrButton, Sound } from 'react-vr';

export default class TextScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: false,
            audio: true,
            wavFile: '/578628main_hskquindar.mp3',
        };
    }

    useAudio() {
        if (this.state.audio === true) {
            return <Sound 
                loop={true}
                volume={0.7}
                source={{
                    wav: asset(this.state.wavFile)
                }}
            />
        }
    }

    startVideo() {
        this.setState({
            video: true,
            audio: false,
        });
    }

    renderItems() {
        if (this.state.video === false) {
            return <Text
                style={{
                    backgroundColor: '#777879',
                    fontSize: 0.5,
                    fontWeight: '400',
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [
                        { translate: [-4, 1, -0.5] },
                        { scale: 0.5 },
                        { rotateY: 90 } 
                    ]
                }}
            >Aqua Satellite click here</Text>
        } else {
            return <Video 
                    source={{uri: '/static_assets/Nasa_aqua.mp4'}}
                    style={{
                        height: 2,
                        width: 3.56,
                        transform: [
                            { translate: [-4, 1, -0.5] },
                            { rotateY: 90 }
                        ]
                    }}
                />
        }
    }

    render () {
        return (
            <View>
                <VrButton onClick={this.startVideo.bind(this)}>
                    {this.renderItems()}
                </VrButton>
                {this.useAudio()}
                <Text
                    style={{
                        backgroundColor: '#777879',
                        fontSize: 0.5,
                        fontWeight: '400',
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [
                            { translate: [1, 2.5, -12] },
                            { scale: 1 }
                        ]
                    }}
                >Loral-1300Com</Text>
            </View>
        )
    }
}
