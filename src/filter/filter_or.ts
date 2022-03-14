import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const courses = await prisma.courses.findMany({
		where: {
			OR: [
				{ 
					name: {
						contains: "JS",
						mode: "insensitive"
					}
				},
				{ 
					name: {
						contains: "xir",
						mode: "insensitive"
					}
				}
			],
			AND: {
				duration: 100
			}
		}
	})

	console.log(courses);
}

main();