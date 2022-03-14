import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const updatedCourse = await prisma.courses.update({
		where: {
			id: "1d2b543f-a786-4c4c-af93-cffdc00c36d3"
		},
		data: {
			description: "Curso de Python Atualizado",
			duration: 20
		}
	});

	console.log(updatedCourse);
}

main();