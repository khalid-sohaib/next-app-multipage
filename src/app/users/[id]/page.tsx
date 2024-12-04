import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link"; // Correct import for navigation
import { getUserById } from "@/lib/users";

export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getUserById(params.id);

  if (!user) {
    return <p className="p-8 text-red-500 text-center">User not found</p>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">
              User Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-lg">
              <span className="font-semibold">ID:</span> {user.id}
            </p>
            <div className="mt-6">
              <Link href="/users">
                <Button
                  variant="link"
                  className="text-blue-600 hover:underline"
                >
                  Back to User List
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
