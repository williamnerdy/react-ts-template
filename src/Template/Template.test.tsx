import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Template from './Template';

const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

describe('<Template />', () => {
  it('should renders with logo', () => {
    const { getByRole } = renderWithRouter(<Template />);
    const logoElement = getByRole('img', { name: /logo/i });
    expect(logoElement).toBeInTheDocument();
  });

  it('should renders with footer', () => {
    const { getByText } = renderWithRouter(<Template />);
    const footerEement = getByText('© 2020');
    expect(footerEement).toBeInTheDocument();
  });
});
