/*add current events into this? possible?*/

import React from 'react';

interface Props{};
interface State{
    name: string
};

class Greeting extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "Needs Name"
        }
    };

    render() {
        var day = new Date();
        var hours = new Date().getHours();
        var greeting = "";

        if(hours < 12) {
            greeting = "Good morning,";
        }
        else if(hours>=12 && hours<17) {
            greeting = "Good afternoon,";
        }
        else {
            greeting = "Good evening,";
        }

        const allStyle = {
            backgroundColor: 'white',
            width: '90%',
            padding: '3%',
            marginBottom: '5px',
            marginLeft: '3%',
            marginRight: '3%',
            borderLeftStyle: 'solid',
            borderLeftColor: '#990000ff',
            borderLeftWidth: '5px',
        } as React.CSSProperties;
        
        return (
            <div style={allStyle}>
                <br/>
                <p style={{fontSize: '20px', marginBottom: '0'}}>{greeting}</p>
                <p style={{fontSize: '27px'}}>{this.state.name}!</p>
                <br/>
            </div>
        );
    }

};

export default Greeting;