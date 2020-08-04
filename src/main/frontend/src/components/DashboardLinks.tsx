import * as React from 'react'; 

interface Props{};
interface State{};

class DashboardLinks extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    };

    assignClick() {
        window.location.replace("AssignTest");
    };

    render() {
        const allStyle = {
            backgroundColor: '#fff',
            width: '100%',
        };

        const contents = {
            margin: '3%'
        };

        function hoverStyle(e: any) {
            e.target.style.color = "#990000ff"
            e.target.style.textDecoration = "underline"
            e.target.style.fontSize = "20px"
        };

        function offHoverStyle(p:any) {
            p.target.style.color = "black"
            p.target.style.textDecoration = "none"
            p.target.style.fontSize = '14px'
        };

        const buttonStyle = {
            fontSize: '14px',
            display: 'block',
            marginTop: '5px',
            marginBottom: '7px',
        };

        return (
            <div style={allStyle}>
                <hr style={{borderColor: '#990000ff', borderWidth: '7px', margin: '0%'}}/>
                <div style={contents}>

                    <p style={{fontSize: '24px'}}>I want to...</p> 

                    <button style={buttonStyle} onMouseOver={hoverStyle} onMouseLeave={offHoverStyle}>
                    <a href="assigntest">Assign a test &#8594;</a></button>
                    <button style={buttonStyle} onMouseOver={hoverStyle} onMouseLeave={offHoverStyle}>
                    <a href="testchoosetestbank">Create new test &#8594;</a></button>
                    <button style={buttonStyle} onMouseOver={hoverStyle} onMouseLeave={offHoverStyle}>
                    <a href="tests">View current tests &#8594;</a></button>
                    <button style={buttonStyle} onMouseOver={hoverStyle} onMouseLeave={offHoverStyle}>
                    <a href="testbanks">View all test banks &#8594;</a></button>
                    <br/>
                    <button style={buttonStyle} onMouseOver={hoverStyle} onMouseLeave={offHoverStyle}>
                    <a href="reportsoverview">View classes &#8594;</a></button>
                    <button style={buttonStyle} onMouseOver={hoverStyle} onMouseLeave={offHoverStyle}>
                    <a href="updateinformation">Update students &amp; classes &#8594;</a></button>
                    
                    
                </div>
            </div> 
        );
    };
};

export default DashboardLinks;