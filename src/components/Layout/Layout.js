import React from 'react';
import Aux from '../../hoc/Aux';
import { createComponent } from 'react-fela';


const Margin = createComponent(
  () => ({
    marginTop: '16px'
  }));
  

const layout = (props) => (
    <Aux>
        <div>
            Toolbar, SideBar, Backdrop
        </div>
            <Margin>
                <main>{props.children}</main>
            </Margin>
    </Aux>
);

export default layout;