// Test away!

import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Controls from './Controls.js'




describe('<Controls /> Component', () => {

    it('should match snapshot', () => {

        const tree = renderer.create(<Controls />);

        expect(tree.toJSON()).toMatchSnapshot();
    });





});