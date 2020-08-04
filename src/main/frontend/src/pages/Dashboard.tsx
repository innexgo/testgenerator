import * as React from "react";
import DashboardLayout from '../components/DashboardLayout';
import Greeting from '../components/Greeting';
import DashboardLinks from '../components/DashboardLinks';

interface State{
  windowWidth: number;
  windowHeight: number;
};

class Dashboard extends React.Component<AuthenticatedComponentProps, State> {
  constructor(props: AuthenticatedComponentProps) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

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

  render() {
    const windowWidth = this.state.windowWidth;
    const tablet = windowWidth < 934;

    const allStyle = {
      margin: 'auto', 
      display: tablet ? 'initial' : 'flex',
    } as React.CSSProperties;

    const column = {
      width: tablet ? '100%' : '50%',
      /*flex: tablet ? '0' : '50%',*/
      position: tablet ? 'initial' : 'relative',
    } as React.CSSProperties;

    const boxStyle = {
      margin: '3%',
    };

    return <DashboardLayout {...this.props}>
      <div style={allStyle}>
        <div style={column}> {/*left column*/}
          <div style={boxStyle}><Greeting/></div>
        </div>
        <div style={column}> {/*right column*/}
          <div style={boxStyle}><DashboardLinks/></div>
        </div>





      </div>
    </DashboardLayout>
  }
};

export default Dashboard;
