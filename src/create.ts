import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.courses.create({
		data: {
			name: "NodeJS",
			description: "Curso de NodeJS",
			duration: 100
		}
	});

	console.log(result);
}

main();