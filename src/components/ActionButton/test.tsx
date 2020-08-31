import { render, screen } from '@testing-library/react';

import ActionButton from '.';

describe('<ActionButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<ActionButton />);

    expect(screen.getByRole('heading', { name: /ActionButton/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
