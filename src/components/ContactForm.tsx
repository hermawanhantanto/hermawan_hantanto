"use client";
import { formSchema } from "@/app/validation";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { RotateCw } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const { email, subject, message } = values;

    try {
      await axios.post("/api/send", {
        email,
        subject,
        message,
      });
      form.reset();
      toast({
        title: "Your message has been sent successfully",
        variant: "default",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "An error occured while sending your message",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="flex lg:justify-between lg:p-10 p-5 lg:flex-row flex-col max-lg:items-center">
      <div className="max-w-[400px] max-lg:text-center max-lg:mb-4 ">
        <h2 className="font-semibold sm:text-2xl text-xl ">
          Let&apos;s <span className="font-bold text-green-600">Connect</span>
        </h2>
        <p className="text-gray-500 text-balance mt-4 max-sm:text-sm">
          I&apos;m currently looking for new oppurtunities, my inbox is always
          open. Wheter you have a question or just want to say hi, I&apos;ll try
          my best to get back to you.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 lg:w-1/2 md:w-96 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className={buttonVariants({
              size: "lg",
              className: "w-full",
            })}
            disabled={isLoading}
          >
            {isLoading ? (
              <RotateCw className="w-6 h-6 animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default ContactForm;
