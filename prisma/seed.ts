import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const dummyProducts = [
    {
      name: "Wave Form",
      height: 25.5,
      width: 30.0,
      depth: 20.0,
      year: 2023,
      artist_name: "John Doe",
      material: "Bronze"
    },
    {
      name: "Abstract Harmony",
      height: 15.0,
      width: 10.0,
      depth: 10.0,
      year: 2024,
      artist_name: "Jane Smith",
      material: "Marble"
    },
    {
      name: "Nature's Voice",
      height: 40.0,
      width: 20.0,
      depth: 15.0,
      year: 2022,
      artist_name: "David Kim",
      material: "Wood"
    }
  ]

  console.log('Starting to seed database...')

  // 기존 데이터 삭제
  await prisma.products.deleteMany({})
  console.log('Cleaned up existing records')

  // 새로운 데이터 추가
  for (const product of dummyProducts) {
    const createdProduct = await prisma.products.create({
      data: product
    })
    console.log(`Created product with id: ${createdProduct.id}`)
  }

  console.log('Database seeding completed.')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
