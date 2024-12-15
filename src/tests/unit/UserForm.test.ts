import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event'; // Import userEvent
import { describe, it, expect } from 'vitest';
import UserForm from '../../components/UserForm.svelte';
import { userStore } from '../../lib/store/useStore';

describe('UserForm', () => {
  it('renders the form correctly', () => {
    const { getByLabelText, getByText } = render(UserForm);

    expect(getByLabelText(/first name/i)).toBeInTheDocument();
    expect(getByLabelText(/age/i)).toBeInTheDocument();
    expect(getByText(/submit/i)).toBeInTheDocument();
  });



  it('submits valid form data', async () => {
    const { getByLabelText, getByText } = render(UserForm);

    const mockUser = {
      firstName: 'John',
      age: 30
    };

    // Fill out form
    const firstNameInput = getByLabelText(/first name/i);
    await userEvent.type(firstNameInput, mockUser.firstName); // Use userEvent.type for input

    const ageInput = getByLabelText(/age/i);
    await userEvent.type(ageInput, mockUser.age.toString()); // Fill age input

    const submitButton = getByText(/submit/i);
    await userEvent.click(submitButton); // Use userEvent.click for button click

    // Check if store was updated
    userStore.subscribe(user => {
      expect(user).toEqual(mockUser);
    });
  });
});
