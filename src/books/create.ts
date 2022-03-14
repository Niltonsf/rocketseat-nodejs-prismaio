import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.books.create({
		data: {
			name: "Macbook PRO Tutorial",
			author_id: "67d2ef18-d2f8-495f-98a1-278acb9d744e"
		}
	});

	console.log(result);
}

main();