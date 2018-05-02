import React from "react"
import { shallow } from 'enzyme';
import BuildControl from './BuildControl';

describe("BuildControl", function(){
    test("Recieve", function(){
        expect(BuildControl).not.toBeNull()
    })
})


describe('<BuildControl />', () => {
    it('renders a <BuildControl /> components', () => {
    

      const wrapper = shallow(<BuildControl label="label" />);
      let label = wrapper.find(".build-control-label")
      expect(label).toHaveLength(1);
      expect(label.html()).toBe("label");      
    });  
});