/*
when we get data, needs:
test that has most recently been modified. placeholder state variables
*/

import React from 'react';

interface Props{};
interface State{
    nameOfTest: any,
    linkToTest: any,
};

export default class MostRecentAction extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            nameOfTest: 'Brewing a cup of green tea',
            linkToTest: 'https://google.com',
        };
    };

    hoverStyle(e: any) {
        e.target.style.color = "#990000ff";
        e.target.style.textDecoration = 'underline';
    };

    offHoverStyle(p:any) {
        p.target.style.color = "black";
        p.target.style.textDecoration = 'none';
    };

    render() {
        const allStyle = {
            backgroundColor: 'white',
            width: '90%',
            marginBottom: '5px',
            marginLeft: '3%',
            marginRight: '3%',
            padding: '3%',
            borderLeftStyle: 'solid',
            borderLeftColor: '#990000ff',
            borderLeftWidth: '5px',
        } as React.CSSProperties;

        return (
            <div style={allStyle}>
                <p style={{fontSize: '20px'}}>Pick up where you left off...</p>
                <div style={{verticalAlign: 'bottom / top / middle'}}>
                    <a href={this.state.linkToTest} onMouseOver={this.hoverStyle} onMouseLeave={this.offHoverStyle}
                        style={{fontSize: '16px'}}>{this.state.nameOfTest} &#8594;</a>
                </div>
            </div>
        );
    }
}