import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import { createComponent } from 'react-fela';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Margin = createComponent(
  () => ({
    marginTop: '72px'
  }));
  

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerOpenHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }
    
    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }


    render () {
        return (
            <Aux>
                <Toolbar openDrawer={this.sideDrawerOpenHandler} />
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler} 
                    open={this.state.showSideDrawer}/>
                    <Margin>
                        <main>{this.props.children}</main>
                    </Margin>
            </Aux>
        );
    }
   
}

export default Layout;