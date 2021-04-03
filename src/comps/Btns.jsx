import React, { Component } from 'react';
const BTNS = [
    {
    link: "https://github.com/mattie1/",
    info: "GitHub",
    },
    {
    link: "https://imatei.co.uk/resume",
    info: "Resume",
    },
    {
    link: "https://www.linkedin.com/in/ionut-matei-815811208/",
    info: "LinkedIn"
    }
];
const Button = ({ link, info }) => {
    return (
    <span className='btn-container'>
        <a className='button' href={link} target='_self' rel='noopener noreferrer'>
            <span className='sm_btn'>{info}</span>
        </a>
    </span>
    );
};
class Btns extends Component {
    render() {
        return (
            <div>
                {BTNS.map((props, i) => (
                    <Button {...props} key={i} />
                ))}
            </div>
        );
    }
}
export default Btns;
