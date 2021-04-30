import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'tests/test-utils';

import { Button } from './Button';

describe('Button', () => {
  it('large renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button label="Button text" />, div);
  });

  it('medium renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button label="Button text" size="medium" />, div);
  });

  it('small renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button label="Button text" size="small" />, div);
  });

  it('large renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button label="Button text" size="large" />, div);
  });

  it('primary renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button label="Button text" variant="primary" />, div);
  });

  it('secondary renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button label="Button text" variant="secondary" />, div);
  });

  it('renders a backgroundColor when send', () => {
    const button = render(<Button label="Button text" backgroundColor="red" />);

    expect(button.getByRole('button')).toHaveStyle('background-color: red');
    expect(button.getByRole('button')).toHaveTextContent('Button text');
  });
});
