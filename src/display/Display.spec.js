// Test away!

import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Display from './Display.js'




describe('<Display /> Component', () => {


    it("renders without crashing", () => {
  
      const sanityCheck = render(<Display />);
    });


    it('should match snapshot', () => {

        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    });


    it('should default to (unlocked) and (open)', () => {

        const { getByText } = render(<Display />);

        const unlocked = getByText(/unlocked/i);
        const open= getByText(/open/i);

        expect(unlocked).toBeInTheDocument();
        expect(open).toBeInTheDocument();
    });


});