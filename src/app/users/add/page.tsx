import UserForm from "@/components/UserForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function AddUserPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <Link href="/users">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeftIcon size={20} /> Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Add New User</h1>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <UserForm />
      </div>
    </main>
  );
}
