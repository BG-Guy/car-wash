"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JosephineSans } from "@/fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1),
    email: z.string().email({
      message: "Email is required",
    }),
    description: z.string().min(1),
  });
  type ContactFormValues = z.infer<typeof formSchema>;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setLoading(true);

      console.log("🚀 ~ onSubmit ~ data:", data);
      toast.success("Email Sent Successfully");
      router.refresh();
      window.location.reload();
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col p-2 w-full mt-auto h-fit">
      <h1 className={` font-josephine text-[32px] text-white`}>Contact Us!</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="flex flex-col gap-2 text-white">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ps-3">Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ps-3">Email</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ps-3">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="Description"
                      {...field}
                      className="h-[128px] resize-none text-black text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={loading}
              className="mt-6 w-36 md:mt-auto bg-gray-200 hover:bg-gray-200/90 text-black"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
