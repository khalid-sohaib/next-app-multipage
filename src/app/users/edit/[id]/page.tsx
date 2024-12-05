import { getUserById } from "@/lib/users";
import UserForm from "@/components/UserForm";
import Link from "next/link";

interface EditUserPageProps {
  params: { id: string }; // Params provided by Next.js for dynamic routes
}

export default async function EditUserPage({ params }: EditUserPageProps) {
  const user = await getUserById(params.id); // Fetch the user by ID

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
      <UserForm user={user} /> {/* This will render the form to edit a user */}
    </div>
  );
}
