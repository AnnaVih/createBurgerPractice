import React from "react"
import { shallow } from 'enzyme';
import Burger from "./Burger";

describe("Burger", function() {
    test("Exists", function() {
        expect(Burger).not.toBeNull()
    });
});

describe('<Burger />', () => {
    it('renders a <Burger /> components', () => {
        let ingredients = {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        
      const wrapper = shallow(<Burger ingredients={ingredients} />);
      expect(wrapper.find("[data-test='burger']")).toHaveLength(1);
    });  
});