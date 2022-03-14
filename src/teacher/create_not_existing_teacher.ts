import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.courses.create({
		data: {
			name: "Elixir",
			description: "Curso de Elixir",
			duration: 90,
			teacher: {
				create: {
					name: "Viviane Kowalski Schumacher"
				}
			}
		}
	});

	console.log(result);
}

main();