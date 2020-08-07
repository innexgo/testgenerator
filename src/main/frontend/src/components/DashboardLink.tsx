import React from 'react'; 
import { Icon } from '@material-ui/core';

interface Props { 
    link: any,
    icon: any,
    name: string,
};
interface State{
    windowWidth: number,
    windowHeight: number,
};

export default class DashboardLink extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
      }
    
      updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    
        this.setState({ windowWidth, windowHeight });
      };

    hoverStyle(e: any) {
        e.target.style.color = "white";
        e.target.style.fontSize = '2.5rem'
    };

    offHoverStyle(p:any) {
        p.target.style.color = "white";
        p.target.style.fontSize = '2rem'
    };

    render() {
        const windowWidth = this.state.windowWidth;
        const tablet = windowWidth < 768;

        const allStyle = {
            backgroundColor: 'white',
            height: '50px',
            width: tablet ? '3rem' : '42%',
            display: 'inline-block',
            marginLeft: tablet ? '10%' : '4%',
            marginRight: tablet ? '10%' : '4%',
            marginBottom: '13px',
        } as React.CSSProperties;

        const textStyle = {
            display: tablet ? 'none' : 'initial',
            float: tablet ? 'none' : 'left', 
            width: tablet ? '0%' :'70%',
        } as React.CSSProperties;

        const iconBoxStyle = {
            float: tablet ? 'unset' : 'right',
            width: tablet ? '100%' : '30%', 
            backgroundColor: '#990000', 
            height: '100%'
        } as React.CSSProperties;

        const iconStyle = {
            fontSize: '2rem', 
            marginTop: tablet ? '3%' : '9%',
        };

        return (
            <div style={allStyle}>

                <div style={textStyle}>
                    <div style={{textAlign: 'center', verticalAlign: 'middle'}}>
                        <p style={{lineHeight: '18px', fontSize:'16px', marginBottom: '0', marginTop: '7%'}}>
                            {this.props.name}</p>
                    </div>
                </div>

                <div style={iconBoxStyle}>
                    <div style={{textAlign: 'center', color: 'white'}}>
                        <a href={this.props.link}><Icon style={iconStyle} onMouseOver={this.hoverStyle} onMouseLeave={this.offHoverStyle}>
                            {this.props.icon}</Icon></a>
                    </div>
                </div>

            </div>
        );
    };
};