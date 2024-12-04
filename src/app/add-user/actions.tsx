"use server";

import { addUser } from "@/lib/users";

export async function addUserAction(userData: {
  name: string;
  email: string;
  age: number;
}) {
  addUser(userData);
}
