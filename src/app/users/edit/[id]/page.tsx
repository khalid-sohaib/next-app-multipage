import { getUserById, getUsers } from "@/lib/users"; // Ensure this fetches correctly
import UserForm from "@/components/UserForm";
import Link from "next/link";

type PageProps = {
  params: { id: string };
};

export default async function EditUserPage({ params }: PageProps) {
  const user = getUserById(params.id); // Assuming getUserById is synchronous

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

// Generate static params for SSG
export async function generateStaticParams() {
  const users = getUsers(); // Adjust if asynchronous
  return users.map((user) => ({
    id: user.id,
  }));
}
