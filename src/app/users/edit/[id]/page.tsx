import { getUserById, getUsers } from "@/lib/users";
import UserForm from "@/components/UserForm";
import Link from "next/link";

// Generate static params for all users
export async function generateStaticParams() {
  const users = getUsers(); // Fetch all users
  return users.map((user) => ({ id: user.id }));
}

export default async function EditUserPage({
  params,
}: {
  params: { id: string };
}) {
  const user = getUserById(params.id); // Fetch the user by ID

  if (!user) {
    return (
      <div>
        <h1>User not found</h1>
        <Link href="/users">Back to User List</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm user={user} />
    </div>
  );
}
