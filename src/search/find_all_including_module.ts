import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const courses = await prisma.courses.findMany({
		include: {
			modules: true
		}
	})

	console.log(JSON.stringify(courses));
}

main();