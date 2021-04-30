/* eslint-disable import/export */
import { render, RenderOptions } from '@testing-library/react';
import React from 'react';

const WithProviders: React.FC = ({ children }) => {
  return (
    <>{children}</>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: WithProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
