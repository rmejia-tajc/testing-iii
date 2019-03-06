// Test away!

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
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

        const { getByTestId } = render(<Dashboard />);

        const unlockedLocked = getByTestId(/unlockedLocked/i);
        const openClosed= getByTestId(/openClosed/i);
        const btnLockUnlock = getByTestId(/lockUnlockGate/i);
        const btnCloseOpen= getByTestId(/closeOpenGate/i);

        expect(unlockedLocked).toBeInTheDocument();
        expect(openClosed).toBeInTheDocument();
        expect(btnLockUnlock).toBeInTheDocument();
        expect(btnCloseOpen).toBeInTheDocument();
    });


    it('the "close gate" button should change to "open gate" when clicked', () => {

        const { getByTestId, queryByText } = render(<Dashboard />);

        expect(queryByText(/close gate/i)).toBeTruthy();
        expect(queryByText(/open gate/i)).toBeFalsy();
        
        const btnCloseOpen= getByTestId(/closeOpenGate/i);
        fireEvent.click(btnCloseOpen);

        expect(queryByText(/close gate/i)).toBeFalsy();
        expect(queryByText(/open gate/i)).toBeTruthy();

    });


});