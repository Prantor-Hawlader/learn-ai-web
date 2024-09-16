"use client";
import { Button, Card, CardBody, CardFooter, Input } from "@nextui-org/react";
import Link from "next/link";
import toast from "react-hot-toast";

import { login } from "@/action/user";

export default function Login() {
  const handleLogin = async (formData: FormData) => {
    const res = await login(formData);

    if (res.error) toast.error(res.error);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="w-full max-w-md h-full p-4">
        <div className="flex flex-col items-center justify-center p-5">
          <p className="text-3xl font-bold">Login</p>
          <p className="mt-2 text-small text-default-500">
            Fill the form to login
          </p>
        </div>
        <form action={handleLogin}>
          <CardBody className="space-y-4">
            <div className="space-y-2">
              <Input
                required
                id="email"
                label="Email"
                name="email"
                size="sm"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Input
                required
                id="password"
                label="Password"
                name="password"
                size="sm"
                type="password"
              />
            </div>
          </CardBody>
          <CardFooter>
            <Button
              className="w-full bg-gradient-to-r from-[#00b7fa] to-[#01cfea]"
              type="submit"
            >
              Login
            </Button>
          </CardFooter>
        </form>
        <div className="my-4 text-center">
          <span className="text-sm">Need to create an account?</span>
          <Link
            className="text-sm text-blue-500"
            href="/register"
            prefetch={false}
          >
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
}
