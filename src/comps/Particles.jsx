import React, { Component } from 'react';
import { Particles as ReactParticles } from 'react-particles-js';
const PARAMS = {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "area": 950
            }
        },
        "color": {
            "value": [
                "e1dd72",
                "a8c66c",
                "1b6535",
                "f6d55c",
                "ed553b"
            ]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": .9,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 3,
                "opacity_min": .5,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": {
                "enable": true,
                "minimumValue": 1
            },
            "anim": {
                "enable": false,
                "speed": 5,
                "size_min": 0.1,
                "sync": true
            }
        },
        "links": {
            "enable": true,
            "distance": 70,
            "color": "56776c",
            "opacity": 0.9,
            "width": 0.5,
            "consent": false,
            "blink": false
        },
        "move": {
            "enable": true,
            "speed": 2.1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "attract": {
                "distance": 100,
                "duration": 1,
                "speed": 10
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "push": {
                "particles_nb": 3
            },
            "remove": {
                "particles_nb": 2
            },
            "repulse": {
                "distance": 100,
                "duration": 1
            }
        }
    },
    "retina_detect": true
}

class Particles extends Component {
    render() {
        return (
            <div className='particles'>
                <ReactParticles width='100vw' height='100vh' params={PARAMS} />
            </div>
        )
    }
}

export default Particles;
