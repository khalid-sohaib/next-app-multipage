import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mb-8">
        {/* Back Button */}
        <Link href="/" passHref>
          <Button
            variant="link"
            className="flex items-center gap-2 text-gray-800 hover:text-blue-500"
          >
            <ArrowLeftIcon size={18} />
            Back to Home
          </Button>
        </Link>
      </div>

      <Card className="w-full max-w-xl mt-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">
            About This Project
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mt-4 text-gray-600">
            This is a basic user management system built with Next.js. It allows
            you to manage users efficiently and easily.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
