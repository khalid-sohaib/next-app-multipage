import { User } from "@/types/user";

let users: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", age: 30 },
  { id: "2", name: "Jane Smith", email: "jane@example.com", age: 25 },
];

// Fetch all users
export const getUsers = (): User[] => {
  return users; // 'users' is your in-memory array
};

// Fetch user by ID
export const getUserById = (id: string): User | null => {
  const user = users.find((user) => user.id === id);
  return user ?? null; // Explicitly handle undefined by returning null
};

// Add a new user
export const addUser = (user: Omit<User, "id">): User => {
  const newUser = { ...user, id: String(users.length + 1) };
  users.push(newUser);
  return newUser;
};

// Update an existing user by ID
export const updateUser = (
  id: string,
  updatedUser: Partial<Omit<User, "id">>
): User | null => {
  let updated = null;
  users = users.map((user) => {
    if (user.id === id) {
      updated = { ...user, ...updatedUser };
      return updated;
    }
    return user;
  });
  return updated;
};
