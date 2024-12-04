import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, PlusIcon, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Welcome Card */}
      <Card className="w-full max-w-xl mb-8">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome to User Management
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            Manage your users efficiently with our system. You can view, edit,
            and add users seamlessly.
          </p>
        </CardContent>
      </Card>

      {/* Buttons for navigation */}
      <div className="flex justify-center gap-8 mb-4">
        <Link href="/users">
          <Button className="flex items-center gap-2">
            View Users <ArrowRightIcon size={18} />
          </Button>
        </Link>

        <Link href="/users/add">
          <Button variant="outline" className="flex items-center gap-2">
            Add New User <PlusIcon size={18} />
          </Button>
        </Link>
      </div>

      {/* About page navigation */}
      <div className="flex justify-center">
        <Link href="/about">
          <Button variant="link" className="flex items-center gap-2">
            <InfoIcon size={18} />
            About This Project
          </Button>
        </Link>
      </div>
    </main>
  );
}
