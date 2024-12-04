import { useRouter } from "next/router";
import { getUserById } from "@/lib/users";
import UserForm from "@/components/UserForm";
import Link from "next/link";

export default function EditUserPage() {
  const router = useRouter();
  const { id } = router.query; // Get user ID from the URL
  const user = getUserById(id as string); // Fetch the user by ID

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
