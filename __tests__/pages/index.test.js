import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const text = screen.getByText('Get started by editing');
    expect(text).toBeInTheDocument();
  });
});