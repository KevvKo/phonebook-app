import React from 'react';
import { render } from '../../scripts/test-utils';
import Error from './Error';
import '../../scripts/i18n';

describe(' Error component', () => {
    it('should render', () =>{
        render( < Error/> );
    });
    it('should contain an alert icon', () => {
        const { getByTestId } = render( < Error/> );
        const alert = getByTestId('error-message');
        expect(alert).toBeTruthy();
    });
});
