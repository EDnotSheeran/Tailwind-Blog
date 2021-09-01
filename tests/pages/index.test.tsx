import { render, screen } from '@testing-library/react';
import Home from '@pages/index';

describe('Should render the Home Page', () => {
  it('Renders the documentation button', () => {
    render(<Home posts={[]} />);
    expect(
      screen.getByRole('heading', {
        name: 'Latest',
      })
    ).toBeInTheDocument();
  });
});
