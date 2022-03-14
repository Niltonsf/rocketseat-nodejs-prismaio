import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const courses = await prisma.courses.delete({
		where: {
			id: "80838b7e-4158-4380-8ab3-370715fafeb3"
		}
	})

	console.log(courses);
}

main();