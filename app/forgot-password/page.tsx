"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authSchema } from "@/validators/forgot-password"; 

export interface FormErrors {
  emailForgotPassword?: string;
}

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    emailForgotPassword: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showMessage, setShowMessage] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    // Validate email
    const result = authSchema.safeParse(formData);

    if (!result.success) {
      // Convert Zod error issues to a more accessible errors object
      const newErrors = result.error.issues.reduce((acc, issue) => {
        acc[issue.path[0] as keyof FormErrors] = issue.message;
        return acc;
      }, {} as FormErrors);
      setErrors(newErrors);
    } else {
      // If validation succeeds, show the message box
      setShowMessage(true);
      // Email would be sent to the server here
    }
  };

  // Handle closing the message box
  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#f9f9f9]">
      <Card className="w-[400px] bg-[#f9f9f9]">
        <CardHeader>
          <CardTitle className='text-center'>استعادة كلمة المرور</CardTitle>
        </CardHeader>
        {!showMessage ? (
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="emailForgotPassword">البريد الإلكتروني</Label>
                  <Input name="emailForgotPassword" id="emailForgotPassword" type="email" placeholder="tryhasady@gmail.com"
                    value={formData.emailForgotPassword}
                    onChange={handleChange}
                    className="w-full mt-1"
                  />
                  {errors.emailForgotPassword && <p className="mt-1 text-red-500">{errors.emailForgotPassword}</p>}
                </div>
                <Button type="submit" className="w-full mb-2 bg-black rounded-full px-5 shadow-2xl font-bold hover:bg-neutral-800">
                  إرسال رابط إعادة التعيين
                </Button>
              </div>
            </CardContent>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center p-4">
            <p className="mb-4 text-center">
              يرجى مراجعة بريدك الالكتروني لإعادة تعيين كلمة المرور.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
