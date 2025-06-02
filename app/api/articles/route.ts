import { connectDB } from "@/lib/mongodb";
import Articles from "@/models/article";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const articles = await Articles.find();
    return NextResponse.json({ data: articles });
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
