import { type NextRequest, NextResponse } from "next/server";
import prisma from "~/lib/prisma";

interface CreateProductBody {
  name: string;
  height: number;
  width: number;
  depth: number;
  year: number;
  artist_name: string;
  material: string;
}

// GET /api/products - 모든 제품 조회
export async function GET(_request: NextRequest) {
  try {
    const products = await prisma.products.findMany();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

// POST /api/products - 새 제품 생성
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateProductBody;
    const product = await prisma.products.create({
      data: {
        name: body.name,
        height: body.height,
        width: body.width,
        depth: body.depth,
        year: body.year,
        artist_name: body.artist_name,
        material: body.material,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 },
    );
  }
}
