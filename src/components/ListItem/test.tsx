import { render, screen } from '@testing-library/react';

import ListItem from '.';

describe('<ListItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<ListItem />);

    expect(screen.getByRole('heading', { name: /ListItem/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
