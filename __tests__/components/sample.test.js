import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sample from '@/components/sample';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Sample />);
    const text = screen.getByText('Sample Component');
    expect(text).toBeInTheDocument();
  });
});