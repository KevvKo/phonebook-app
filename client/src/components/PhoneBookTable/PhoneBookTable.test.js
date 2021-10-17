import React from 'react';
import '../../scripts/i18n';
import { render } from '../../scripts/test-utils';
import PhoneBookTable from './PhoneBookTable';

describe('PhoneBookTable', () => {
  it('should render PhoneBookTable', () => {
    render(<PhoneBookTable />);
  });
  it('should contain TableHead component', () => {
    const { getByTestId } = render(<PhoneBookTable />);
    const TableHead = getByTestId('phone-book-table-head');
    expect(TableHead).toBeTruthy;
  });
  it('should contain Table component', () => {
    const { getByTestId } = render(<PhoneBookTable />);
    const Table = getByTestId('phone-book-table');
    expect(Table).toBeTruthy;
  });
  it('should contain TableBody component', () => {
    const { getByTestId } = render(<PhoneBookTable />);
    const TableBody = getByTestId('phone-book-table-body');
    expect(TableBody).toBeTruthy;
  });
});
