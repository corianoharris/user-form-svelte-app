import '@testing-library/jest-dom';

// Additional global type extensions can be added here if needed
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

export {};