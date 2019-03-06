// Test away!

import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard.js'




describe('<Dashboard /> Component', () => {


    it("renders without crashing", () => {
  
      const sanityCheck = render(<Dashboard />);
    });


    it('should match snapshot', () => {

        const tree = renderer.create(<Dashboard />);

        expect(tree.toJSON()).toMatchSnapshot();
    });


    it('should default to (lock gate)[unlocked] and (close gate)[open]', () => {

        const { getByText } = render(<Dashboard />);

        const unlocked = getByText(/unlocked/i);
        const open= getByText(/open/i);
        const btnLock = getByText(/lock gate/i);
        const btnClose= getByText(/close gate/i);

        expect(unlocked).toBeInTheDocument();
        expect(open).toBeInTheDocument();
        expect(btnLock).toBeInTheDocument();
        expect(btnClose).toBeInTheDocument();
    });


});