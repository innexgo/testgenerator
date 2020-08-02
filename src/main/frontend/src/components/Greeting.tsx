import React from 'react';

interface State{};
interface Props{};

class Greeting extends React.Component<State, Props> {
    constructor(Props: any) {
        super(Props);
    };

    assignClick() {
        window.location.replace("AssignTest");
    }

    createClick() {
        window.location.replace("EditTest");
    }

    render() {
        var hours = new Date().getHours();
        var greeting = "";
        var name = "Needs Name"; /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

        if(hours < 12) {
            greeting = "Good morning, "  + name + ".";
        }
        else if(hours>=12 && hours<5) {
            greeting = "Good afternoon, " + name + ".";
        }
        else {
            greeting = "Good evening, " + name + ".";
        }

        const allStyle = { /*MARGINS wooooooooooooooooooooooooooooooo*/
            marginTop: '2%',
            marginBottom: '5%',
            marginLeft: '4%',
            marginRight: '4%',
            backgroundColor: '#fff',
            width: '100%',
        };

        const contents = {
            margin: '3%'
        };
        
        const buttonStyleOne = {
            fontSize: '14px',
            marginLeft: '2%',
            marginRight: '40px',
        };

        const buttonStyleTwo = {
            fontSize: '14px',
            marginRight: '2%',
        };

        function hoverStyle(e: any) {
            e.target.style.color = "#990000ff"
            e.target.style.textDecoration = "underline"
        };

        function offHoverStyle(p:any) {
            p.target.style.color = "black"
            p.target.style.textDecoration = "none"
        };

        return (
            <div style={allStyle}>
                <hr style={{borderColor: '#990000ff', borderWidth: '4px', margin: '0%'}}/>
                <div style={contents}>
                    <p style={{fontSize: '24px', marginBottom: '0'}}>{greeting}</p>
                    <p>What would you like to do today?</p>
                    <button style={buttonStyleOne} onMouseOver={hoverStyle} onMouseLeave={offHoverStyle} onClick={this.assignClick.bind(this)}>
                    Assign &#8594;</button>
                    <button style={buttonStyleTwo} onMouseOver={hoverStyle} onMouseLeave={offHoverStyle} onClick={this.createClick.bind(this)}>
                    Create &#8594;</button>
                    <br/><br/>
                </div>
            </div>
        );
    }

};

export default Greeting;