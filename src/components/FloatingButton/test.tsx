import { render, screen } from '@testing-library/react';

import FloatingButton from '.';

describe('<FloatingButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<FloatingButton />);

    expect(screen.getByRole('heading', { name: /FloatingButton/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
