import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.courses.create({
		data: {
			name: "NodeJS",
			description: "Curso de NodeJS",
			duration: 100,
			teacher: {
				connectOrCreate: {
					where: {
						name: "Nilton Schumacher F"
					},
					create: {
						name: "Nilton Schumacher F"
					}
				}
			}
		}
	});

	console.log(result);
}

main();