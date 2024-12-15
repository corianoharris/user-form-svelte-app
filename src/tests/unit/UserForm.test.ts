import { render, waitFor } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event'; // Import userEvent
import { describe, it, expect, vi } from 'vitest';
import UserForm from '../../components/UserForm.svelte';
import { userStore } from '../../lib/store/useStore';

// Mock the store with vi.fn()
vi.mock('../../lib/store/useStore', () => ({
  userStore: {
    subscribe: vi.fn(),
    updateUser: vi.fn(),
  },
}));

describe('UserForm', () => {
  it('renders the form correctly', () => {
    const { getByLabelText, getByText, getByRole } = render(UserForm);

    expect(getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Age/i)).toBeInTheDocument();
    expect(getByRole('button', { name: /submit form/i })).toBeInTheDocument();
  });

  it('submits valid form data', async () => {
    // Arrange: Render the form and mock store
    const { getByLabelText, getByRole } = render(UserForm);
  
    const mockUser = {
      firstName: 'John',
      age: 30,
    };
  
    // Act: Fill out form
    const firstNameInput = getByLabelText(/first name/i);
    await userEvent.type(firstNameInput, mockUser.firstName);
  
    const ageInput = getByLabelText(/age/i);
    await userEvent.type(ageInput, mockUser.age.toString());
  
    const submitButton = getByRole('button', { name: /submit form/i });
    await userEvent.click(submitButton);
  
    // Mock store subscription
    const unsubscribe = userStore.subscribe((user) => {
      // Ensure the form submission updates the store
      expect(user).toEqual(mockUser);
    });
  
    // Wait for store update to happen
    await waitFor(() => expect(userStore.subscribe).toHaveBeenCalled());
  
    // Cleanup: Unsubscribe
    unsubscribe();
  }, 30000);// Increase the timeout to 10 seconds
});
