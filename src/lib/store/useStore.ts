import { writable } from 'svelte/store';
import type { UserData } from '../../lib/validation/userSchema';

function createUserStore() {
    const { subscribe, set, update } = writable<UserData | null>(null);

    return {
        subscribe,
        setUser: (userData: UserData) => set(userData),
        updateUser: (partialData: Partial<UserData>) =>
            update((currentUser) => (currentUser ? { ...currentUser, ...partialData } : null)),
        reset: () => set(null),
    };
}

export const userStore = createUserStore();
