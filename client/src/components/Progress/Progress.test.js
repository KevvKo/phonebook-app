import React from 'react';
import { render } from '../../scripts/test-utils';
import Progress from './Progress';

describe('Progress component', () => {
    it('should render', () =>{
        render( < Progress/> );
    });
    it('should contain circularProgress component', () => {
        const { getByTestId } = render( < Progress/> );
        const CircularProgress = getByTestId('progress-spinner');
        expect(CircularProgress).toBeTruthy();
    });
});
