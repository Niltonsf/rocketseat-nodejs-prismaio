import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const courses = await prisma.courses.findMany({
		skip: 0,
		take: 2
	})

	console.log(courses);
}

main();