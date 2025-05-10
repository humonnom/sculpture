import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const dummyProducts = [
    {
      name: "Wave Form",
      height: 2550,
      width: 3000,
      depth: 2000,
      year: new Date("2023-01-01"),
      artist_name: "John Doe",
      material: "Bronze",
    },
    {
      name: "Abstract Harmony",
      height: 1500,
      width: 1000,
      depth: 1000,
      year: new Date("2024-01-01"),
      artist_name: "Jane Smith",
      material: "Marble",
    },
    {
      name: "Nature's Voice",
      height: 4000,
      width: 2000,
      depth: 1500,
      year: new Date("2022-01-01"),
      artist_name: "David Kim",
      material: "Wood",
    },
  ];

  console.log("Starting to seed database...");

  // 기존 데이터 삭제
  await prisma.products.deleteMany({});
  console.log("Cleaned up existing records");

  // 새로운 데이터 추가
  for (const product of dummyProducts) {
    const createdProduct = await prisma.products.create({
      data: product,
    });
    console.log(`Created product with id: ${createdProduct.id}`);
  }

  console.log("Database seeding completed.");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
