import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.courses.create({
		data: {
			name: "Java",
			description: "Curso de Java",
			duration: 800,
			fk_id_teacher: "078c2c62-d147-435b-9861-fc154046bce6" 
		}
	});

	console.log(result);
}

main();