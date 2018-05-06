import React from 'react';
import Aux from '../../hoc/Aux';
import { createComponent } from 'react-fela';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const Margin = createComponent(
  () => ({
    marginTop: '72px'
  }));
  

const layout = (props) => (
    <Aux>
        <Toolbar />
            <Margin>
                <main>{props.children}</main>
            </Margin>
    </Aux>
);

export default layout;