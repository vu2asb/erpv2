"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Form } from "@/components/ui/form";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  emailAddress: z.string().email(),
});

const ContactUsSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
    },
  });

  const handleSubmit = () => {};

  return (
    <div className="flex flex-row w-full space-x-2 min-h-fit">
      <div className="border p-10 border-white w-[80%] bg-gradient-to-r from-violet-800 to-fuchsia-800">
        <div className="mt-2 w-40">
          <hr className="ml-4 border-primary border-2"></hr>
        </div>
        <h1 className="text-3xl w-10 pl-5 mt-5 mb-5">CONTACT</h1>
        <div className="ml-5 text-[15px]">
          <h3>Time: 9 AM to 6 PM</h3>
          <h3>Indian Standard Time (UTC+5:30) Monday through Saturday</h3>
        </div>
      </div>

      <div className="border border-white w-[80%] p-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="emailAddress"
              render={(field) => {
                return (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactUsSection;
