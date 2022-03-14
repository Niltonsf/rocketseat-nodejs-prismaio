import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.coursesModules.create({
		data: {
			fk_id_course: "7d18fdca-0a2d-4d87-a3e3-04e5551c7536",
			fk_id_module: "fb17ace1-43ad-4eab-88d5-aeb16647bf64"
		}
	});

	console.log(result);
}

main();