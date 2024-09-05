"use client";

import moment from "moment";
import Image from "next/image";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Half1Icon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  sfName: z
    .string()
    .trim()
    .min(2, { message: "Must be 2 or more characters long" })
    .max(60, { message: "Must not be 60 or more characters long" }),
  slName: z
    .string()
    .trim()
    .min(2, { message: "Must be 2 or more characters long" })
    .max(60, { message: "Must not be 60 or more characters long" }),
  semail: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .min(2, { message: "Must be 2 or more characters long" })
    .max(60, { message: "Must not be 60 or more characters long" }),
  stimeStamp: z.string().optional(),
  swebinarRef: z.string().trim().optional(),
  swebinarNote: z.string().trim().optional(),
});

// const page = () => {
export default function WebRegister() {
  const searchParams = useSearchParams();
  const webRef = searchParams.get("wref");
  const webNote = searchParams.get("wnote");
  console.log(
    "Parameters passed: Webinar Reference: " +
      webRef +
      ", Webinar Note: " +
      webNote +
      ""
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sfName: "",
      slName: "",
      semail: "",
      stimeStamp: "",
      swebinarRef: "",
      swebinarNote: "",
    },
  });
  
  // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  // const handleSubmit = (values: z.infer<typeof formSchema>) => {

  const handleSubmit = (values: z.infer<typeof formSchema>) => {

    console.log("Submit button clicked ...!");
    values.stimeStamp = moment().format();
    console.log({ values });
    values.swebinarRef = "W-101 Default Reference ...";
    values.swebinarNote = "W-101 Default Note ...";
    console.log(
      "Submit button clicked. First Name: " +
        values.sfName +
        ", Last Name: " +
        values.slName +
        ", email: " +
        values.semail +
        ", Time Stamp: " +
        values.stimeStamp +
        ", Webinar Reference: " +
        webRef +
        " and Webinar Note: " +
        webNote +
        ""
    );
  };


  return (
    <div className="mx-auto min-h-svh flex items-center justify-center">
      <div className="border border-slate-700 w-[100%] flex flex-col items-center justify-center lg:flex-row">
        {/* Left side div*/}
        <div className="m-0 border border-slate-700 w-[100%] relative bg-cover bg-center lg:w-[60%]">
          <Image
            src="/assets/webinar-reg-small.jpg"
            alt="Picture for the Webinar registeration form"
            width={900}
            height={600}
            layout="responsive"
            objectFit="contain" // or 'cover' depending on your needs
            className="sm:min-h-full"
          />
          {/* <h1 className="absolute top-10 left-10 text-white text-xl font-bold">
            Webinar Registeration Form
          </h1> */}
          {/* <div className="flex flex-col absolute top-[10px] left-[10px] text-slate-800 text-xl">
            <div className="text-2xl sm:text-3xl font-bold md:text-[16px]/[2]">
              Level-up your game{" "}
            </div>
            <div className="text-[18px] sm:text-1.5xl md:text-[12px]/[1.5] lg:text-[14px]/[1.5]">
              <div>Learn valuable insights and gain a competitive edge</div>
              <div>Don't miss out - register "Now!"</div>
            </div>
          </div> */}
        </div>

        {/* Right side div */}
        <div className="w-[100%] p-5 lg:w-[40%]">
          <Form {...form}>
            <h1 className="my-2 text-2xl text-primary">Register NOW!</h1>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-[100%] flex flex-col justify-center py-2"
            >
              <FormField
                control={form.control}
                name="sfName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-slate-100 text-slate-900"
                          placeholder="Andrew"
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
                name="slName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-slate-100 text-slate-900"
                          placeholder="Sharma"
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
                name="semail"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-slate-100 text-slate-900"
                          placeholder="Email Address"
                          type="email"
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
    </div>
  );
}
