import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.modules.create({
		data: {
			name: "Firebase",
			description: "Module firebase tutorial",
			courses: {
				create: {
					courses: {
						connect: {
							id: "250db684-3f7a-4aca-b431-d20221998ba9"
						}
					}
				}
			}
		}
	});

	console.log(result);
}

main();