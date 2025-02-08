import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "~/lib/prisma";

interface UpdateProductBody {
  name: string;
}

// GET /api/products/[id] - 특정 제품 조회
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.products.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

// PUT /api/products/[id] - 제품 수정
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json() as UpdateProductBody;
    const product = await prisma.products.update({
      where: { id: parseInt(params.id) },
      data: {
        name: body.name,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

// DELETE /api/products/[id] - 제품 삭제
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.products.delete({
      where: { id: parseInt(params.id) },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
