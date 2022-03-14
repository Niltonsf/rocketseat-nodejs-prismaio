import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const courses = await prisma.coursesModules.delete({
		where: {
			id: "cd4ce04f-03c4-474c-8ec7-23c983394f67"
		}
	})

	console.log(courses);
}

main();