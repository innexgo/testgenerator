import * as React from "react";
import DashboardLayout from '../components/DashboardLayout';

import Greeting from '../components/Greeting';
import DashboardLink from '../components/DashboardLink';
import Calendar from '../components/Calendar';
import TodaysTests from '../components/TodaysTests';
import MostRecentAction from '../components/MostRecentAction';


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
      position: tablet ? 'initial' : 'relative',
    } as React.CSSProperties;

    const boxStyle = {
      margin: '3%',
      display: 'initial',
    };

    const todaysTestsStyleTablet = {
      display: tablet ? 'initial' : 'none',
      margin: '3%'
    };
    
    const todaysTestsStyleComputer = {
      margin: '3%',
      display: tablet ? 'none' : 'initial'
    };

    return <DashboardLayout {...this.props}>
      <div style={allStyle}>

        <div style={column}> {/*left column*/}
          <div style={boxStyle}><Greeting/></div>
          <div style={todaysTestsStyleTablet}><TodaysTests/></div>
          <div style={boxStyle}><Calendar/></div>
        </div>

        <div style={column}> {/*right column*/}
          <div style={{marginTop: '3%', marginBottom: '3%', textAlign: 'center'}}>
            <DashboardLink link="assigntest" icon="alarm" name="Assign a test"/>
            <DashboardLink link="testchoosetestbank" icon="add_circle_outline" name="Create new test"/>
            <DashboardLink link="tests" icon="assignment" name="View current tests"/>
            <DashboardLink link="testbanks" icon="dns" name="View all tests"/>
            <DashboardLink link="reportsoverview" icon="class" name="View classes"/>
            <DashboardLink link="updateinformation" icon="group" name="Update students &amp; classes"/>
          </div>
          <div style={todaysTestsStyleComputer}><TodaysTests/></div>
          <div style={boxStyle}><MostRecentAction/></div>
        </div>

      </div>
    </DashboardLayout>
  }
};

export default Dashboard;
