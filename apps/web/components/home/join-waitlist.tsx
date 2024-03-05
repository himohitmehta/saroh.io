"use client";
import React from "react";
import { Input } from "../ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import prisma from "@/lib/prisma";
const FormSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address!",
	}),
});

export default function JoinWaitlist() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
		},
	});
	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log({ data });

		prisma.waitlist
			.create({
				data: {
					email: data.email,
				},
			})
			.then(() => {
				toast({
					description:
						"Thanks for joining the waitlist! We'll be in touch soon.",
				});
				form.reset();
			})
			.catch((error) => {
				toast({
					title: "An error occurred. Please try again later.",
					variant: "destructive",
					description: error.message,
				});
			});
	}

	return (
		<div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
					Join the waitlist
				</h1>
				<p></p>
				<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
					Welcome to saroh.io, a full stack platform for building your
					personal portfolios, blogs or storefronts with ease.
				</p>
				{/* <Input
					type="text"
					placeholder="Enter your email address"
					className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
				/> */}
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className=" space-y-6"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder="Enter your email address"
											className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</div>
		</div>
	);
}
