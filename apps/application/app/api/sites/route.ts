import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const session = await getSession();
	if (!session) {
		return {
			status: 401,
			body: {
				message: "Unauthorized",
			},
		};
	}
	// const {} = req.json();
	const sites = await prisma.site.findMany({
		where: {
			user: {
				id: session?.user.id as string,
			},
		},
		orderBy: {
			createdAt: "asc",
		},
		// ...(limit ? { take: limit } : {}),
	});
	return NextResponse.json({
		result:sites,
        status:"success"
	});
}
