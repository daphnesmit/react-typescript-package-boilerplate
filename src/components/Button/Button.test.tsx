import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from 'tests/test-utils';

import { Button } from './Button';

describe('Button', () => {
  it('large renders without crashing', () => {
    render(<Button label="Button text" />);

    expect(screen.getByRole('button')).toHaveTextContent('Button text');
  });

  it('medium renders without crashing', () => {
    render(<Button label="Button text" size="medium" />);

    expect(screen.getByRole('button')).toHaveTextContent('Button text');
  });

  it('small renders without crashing', () => {
    render(<Button label="Button text" size="small" />);

    expect(screen.getByRole('button')).toHaveTextContent('Button text');
  });

  it('large renders without crashing', () => {
    render(<Button label="Button text" size="large" />);

    expect(screen.getByRole('button')).toHaveTextContent('Button text');
  });

  it('primary renders without crashing', () => {
    render(<Button label="Button text" variant="primary" />);

    expect(screen.getByRole('button')).toHaveTextContent('Button text');
  });

  it('secondary renders without crashing', () => {
    render(<Button label="Button text" variant="secondary" />);

    expect(screen.getByRole('button')).toHaveTextContent('Button text');
  });

  it('renders a backgroundColor when send', () => {
    render(<Button label="Button text" backgroundColor="red" />);

    expect(screen.getByRole('button')).toHaveStyle('background-color: red');
    expect(screen.getByRole('button')).toHaveTextContent('Button text');
  });
});
