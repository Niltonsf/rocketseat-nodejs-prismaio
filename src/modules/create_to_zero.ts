import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.coursesModules.create({
		data: {
			courses: {
				create: {
					name: "NestJS",
					fk_id_teacher: "82c627ca-c335-4b0a-b02b-13bc735a8dcf",
					duration: 10,
					description: "Curson de NestJS", 
				}
			},
			modules: {
				create: {
					description: "Exercises for NestJS",
					name: "Tutorial"
				}
			}
		}
	});

	console.log(result);
}

main();