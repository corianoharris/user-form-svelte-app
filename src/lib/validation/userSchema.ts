import { z } from 'zod';

export const userSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    age: z.number().min(18, { message: "Must be at least 18 years old" }).max(100, { message: "Age must be below 100" }),
    bio: z.string().max(500, { message: "Bio cannot exceed 500 characters" }).optional()
});

export type UserData = z.infer<typeof userSchema>;

export function validateUserData(data: unknown): data is UserData
{
    try
    {
        userSchema.parse(data);
        return true;
    } catch (error)
    {
        return false;
    }
}