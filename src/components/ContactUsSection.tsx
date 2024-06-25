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
  vizName: z.string().trim().min(3),
  vizMessage: z.string().trim().min(10),
  client_date_time: z.string().trim(),
});

export default function ContactUsSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      vizName: "",
      vizMessage: "",
      client_date_time: "", // https://momentjs.com/   https://www.youtube.com/watch?v=SrzvESs6N0M
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    values.client_date_time = moment().format();
    // console.log({ values });
    // const tid = '101';
    const tname = values.vizName;
    const temail = values.emailAddress;
    const tstamp = values.client_date_time;
    const tmessage = values.vizMessage;
    apiIf(tname, temail, tstamp, tmessage);
  };

  async function apiIf(tname: string, temail: string, tstamp: string, tmessage: string) {
    console.log('CL-500 series Name: '+tname+', Time Stamp: '+tstamp+', Message: '+tmessage+'...');

    try{
      const response = await fetch('http://localhost:3000/api/persist-contact-form-data', {
        method: 'POST',
        body: JSON.stringify({tname, temail, tstamp, tmessage}),
        headers: {
            'Content-Type': 'application/json',
        }
      })
    }
    catch{

    }



  }

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
              name="vizName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Full name with salutation</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Mr. Anderson Smith"
                        type="text"
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
