"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addUser, updateUser } from "@/lib/users";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
// import { Input, Label, Button, Card, CardContent } from "@/components/ui/form";

const userSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  age: z.number().min(18, { message: "Age must be at least 18" }),
});

export default function UserForm({ user }: { user?: User }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<User, "id">>({
    resolver: zodResolver(userSchema),
    defaultValues: user || { name: "", email: "", age: 18 },
  });

  const onSubmit = (data: Omit<User, "id">) => {
    if (user) {
      updateUser(user.id, data);
    } else {
      addUser(data);
    }
    alert("User submitted successfully!");
    router.push("/users");
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input {...register("name")} />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>
          <div>
            <Label>Email</Label>
            <Input {...register("email")} />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div>
            <Label>Age</Label>
            <Input
              type="number"
              {...register("age", { valueAsNumber: true })}
            />
            <p className="text-red-500">{errors.age?.message}</p>
          </div>
          <Button type="submit">{user ? "Update" : "Add"} User</Button>
        </form>
      </CardContent>
    </Card>
  );
}
