"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getUsers } from "@/lib/users";
import { User } from "@/types/user";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListIcon, PlusIcon, ArrowLeftIcon } from "lucide-react";

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeftIcon size={20} /> Back
            </Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">User List</h1>
        <Link href="/users/add">
          <Button className="flex items-center gap-2">
            <PlusIcon size={18} /> Add User
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListIcon size={20} className="text-blue-500" />
                <Link href={`/users/${user.id}`} className="hover:underline">
                  {user.name}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
