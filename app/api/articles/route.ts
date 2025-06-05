import { connectDB } from "@/lib/mongodb";
import Articles from "@/models/article";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "0");
    const limit = parseInt(url.searchParams.get("limit") || "3");
    const skip = page * limit;

    const [articles, total] = await Promise.all([
      Articles.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Articles.countDocuments(),
    ]);

    return NextResponse.json({
      data: articles,
      metadata: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { title, content, tags } = body;

    if (!title || !content || !tags) {
      return NextResponse.json(
        { message: "Please provide all fields" },
        { status: 400 }
      );
    }

    // Use the destructured fields instead of req.body
    const article = await Articles.create({ title, content, tags });
    return NextResponse.json({ data: article });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
