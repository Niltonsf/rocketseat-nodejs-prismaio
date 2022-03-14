import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.courses.create({
		data: {
			name: "Javascript",
			description: "Curso de Javascript",
			duration: 230,
			teacher: {
				connect: {
					id: "073c3feb-ba95-40a2-85ad-aa99d0a7f70f"
				}
			}
		}
	});

	console.log(result);
}

main();