"use client";

import moment from "moment";
import Link from "next/link";
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
import Swal from "sweetalert2";

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
  ) 

{
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
      if (response.ok) {
        console.log("Api fetched okay");
      } else {
        console.log("Api fetch failed");
        Swal.fire({
          title: "Oops...",
          imageUrl: "https://unsplash.it/450/250",
          imageWidth: 450,
          imageHeight: 250,
          imageAlt: "Custom image",
          html: `
          <h3 style="font-size: 1.1em; margin-bottom: 8px;">We're currently experiencing a system outage.</h3>
          <h4 style="font-size: 1em; margin-bottom: 6px;">Our team is working diligently to restore service.</h4>
          <h5 style="font-size: 0.9em; margin-bottom: 8px;">Thank you for your patience.</h5>
          <h6 style="font-size: 0.8em; margin-bottom: 5px; color: green;">[MA-001]</h6>
            `,
          footer:
            '<a style="color: blue;" href="#">Why do I have this issue?</a>',
          confirmButtonText: "Continue",
        });
        <Link href="/contact-us"></Link>;
      }
    } catch {
      console.log("Error:: Could not fetch the api");
      Swal.fire({
        title: "Oops...",
        imageUrl: "https://unsplash.it/450/250",
        imageWidth: 450,
        imageHeight: 250,
        imageAlt: "Custom image",
        html: `
        <h3 style="font-size: 1.1em; margin-bottom: 8px;">We're currently experiencing a system outage.</h3>
        <h4 style="font-size: 0.9em; margin-bottom: 6px;">Our team is working diligently to restore service.</h4>
        <h5 style="font-size: 0.9em; margin-bottom: 8px;">Thank you for your patience.</h5>
        <h6 style="font-size: 0.8em; margin-bottom: 5px; color: green;">[MA-002]</h6>
          `,
        footer:
          '<a style="color: blue;" href="#">Why do I have this issue?</a>',
        confirmButtonText: "Continue",
      });
      <Link href="/contact-us"></Link>;
    }
  }

  return (
    <div className="sm: flex flex-col justify-center items-center w-full m-2 min-h-fit md:flex-row ">
      <div className="border-2 border-white w-[80%] m-1 p-10 bg-gradient-to-r from-violet-950 to-fuchsia-1000 md:h-[540px]">
        <div className="text-white mt-0 z-10 ">
          <div className="mt-2 w-40">
            <hr className="ml-4 border-primary border-2"></hr>
          </div>
          <h1 className="text-3xl w-10 pl-5 mt-5 mb-5">CONTACT</h1>
          <div className="ml-5 text-[15px]">
            <h1 className="text-[20px] text-[#0099ff]">
              Let's talk about your challenges
            </h1>
            <h1 className="text-[16px] text-[#0099ff]">
              Drop us a line through this form and I'll get back to you as soon
              as possible
            </h1>
            <br />
            <h1 className="text-[20px] text-[#e75151]">Office Hours</h1>
            <h3 className="text-[#e75151]">Time: 9 AM to 6 PM</h3>
            <h3 className="text-[#e75151]">Indian Standard Time (UTC+5:30) Monday through Saturday</h3>
          </div>
        </div>
      </div>

      <div className="border border-white w-[80%] m-1 p-10">
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
                      <Input className="bg-slate-100 text-slate-900" placeholder="Anderson" type="text" {...field} />
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
                      <Input className="bg-slate-100 text-slate-900" placeholder="Smith" type="text" {...field} />
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
                      className="bg-slate-100 text-slate-900"
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
                      className="bg-slate-100 text-slate-900"
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
            <Button className="mt-6" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
