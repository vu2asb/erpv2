"use client";

import moment from "moment";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  emailAddress: z.string().trim().email(),
  vizFirstName: z.string().trim().min(3),
  vizLastName: z.string().trim().min(3),
  vizMessage: z.string().trim().min(10),
  client_date_time: z.string().trim(),
});

export default function ContactUsSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      vizFirstName: "",
      vizLastName: "",
      vizMessage: "",
      client_date_time: "", // https://momentjs.com/   https://www.youtube.com/watch?v=SrzvESs6N0M
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    values.client_date_time = moment().format();
    // console.log({ values });
    // const tid = '101';
    const tFname = values.vizFirstName;
    const tLname = values.vizLastName;
    const temail = values.emailAddress;
    const tstamp = values.client_date_time;
    const tmessage = values.vizMessage;
    apiIf(tFname, tLname, temail, tstamp, tmessage);
  };

  async function apiIf(
    tFname: string,
    tLname: string,
    temail: string,
    tstamp: string,
    tmessage: string
  ) {
    console.log(
      "CL-500 series First Name: " +
        tFname +
        ", Last Name: " +
        tLname +
        ", Time Stamp: " +
        tstamp +
        ", Message: " +
        tmessage +
        "..."
    );

    try {
      const response = await fetch(
        "http://localhost:3000/api/persist-contact-form-data",
        {
          method: "POST",
          body: JSON.stringify({ tFname, tLname, temail, tstamp, tmessage }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch {

    }
  }

  return (
    <div className="sm: flex flex-col w-full m-2 min-h-fit md:flex-row">
            <div className="border border-white w-[80%] m-5 p-10 bg-gradient-to-r from-violet-800 to-fuchsia-800">

        <div className="text-white mt-0 z-10 ">
          <div className="mt-2 w-40">
            <hr className="ml-4 border-primary border-2"></hr>
          </div>
          <h1 className="text-3xl w-10 pl-5 mt-5 mb-5">CONTACT</h1>
          <div className="ml-5 text-[15px]">
            <h1 className="text-[20px] text-primary">
              Let's talk about your challenges
            </h1>
            <h1 className="text-[16px] text-primary">
              Drop us a line through this form and I'll get back to you as soon
              as possible
            </h1>
            <br />
            <h1 className="text-[20px]">Office Hours</h1>
            <h3>Time: 9 AM to 6 PM</h3>
            <h3>Indian Standard Time (UTC+5:30) Monday through Saturday</h3>
          </div>
        </div>
      </div>

      <div className="border border-white w-[80%] m-5 p-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="vizFirstName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Anderson" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="vizLastName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Smith" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => {
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

            <FormField
              control={form.control}
              name="vizMessage"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Your message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I would like to know..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type="submit" variant="custom">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
