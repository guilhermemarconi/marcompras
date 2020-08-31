import { render, screen } from '@testing-library/react';

import List from '.';

describe('<List />', () => {
  it('should render the heading', () => {
    const { container } = render(<List />);

    expect(screen.getByRole('heading', { name: /List/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
