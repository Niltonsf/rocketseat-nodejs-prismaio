import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.authors.create({
		data: {
			name: "Mayk Brito",
			books: {
				createMany: {
					data: [
						{ name: "First Book to Javascript" },
						{ name: "Life Book" }
					]
				}
			}
		}
	});

	console.log(result);
}

main();