// Test away!

import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Controls from './Controls.js'




describe('<Controls /> Component', () => {


    it("renders without crashing", () => {
  
      const sanityCheck = render(<Controls />);
    });


    it('should match snapshot', () => {

        const tree = renderer.create(<Controls />);

        expect(tree.toJSON()).toMatchSnapshot();
    });


    it('should default to unlocked(lock gate) and open(close gate)', () => {

        const { getByText } = render(<Controls />);

        const btnLock = getByText(/lock gate/i);
        const btnClose= getByText(/close gate/i);

        expect(btnLock).toBeInTheDocument();
        expect(btnClose).toBeInTheDocument();
    });


});