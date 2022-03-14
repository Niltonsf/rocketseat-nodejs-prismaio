import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const courses = await prisma.courses.findMany({
		where: {
			id: "250db684-3f7a-4aca-b431-d20221998ba9"
		},
		include: {
			modules: true
		}
	})

	console.log(JSON.stringify(courses));
}

main();