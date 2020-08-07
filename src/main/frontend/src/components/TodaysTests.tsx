import React from 'react';

interface Props{};
interface State{
    numoftests: number
    tests: Array<Props>
};

export default class TodaysTests extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            numoftests: 0, /*no data yet*/
            tests: []
        }
    }

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

        if(this.state.numoftests == 0) {
            return(
                <div style={allStyle}>
                    <br/>
                    <p style={{fontSize: '20px'}}>You have no tests scheduled for today.</p>
                    <br/>
                </div>
            );
        }
        return(
            <div style={allStyle}>
                <br/>
                <p style={{fontSize: '20px'}}>You have {this.state.numoftests} scheduled for today:</p>
                <ul>
                    <li>{this.state.tests}</li>
                </ul>
                <br/>
            </div>
        )
    }
}