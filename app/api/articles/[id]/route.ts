import { connectDB } from "@/lib/mongodb";
import Articles from "@/models/article";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log(id);
    await connectDB();
    const article = await Articles.findById(id);
    return NextResponse.json({ message: "success", data: article });
  } catch (error) {
    return NextResponse.json({ message: error, data: null });
  }
}

export async function DELETE(
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    await Articles.deleteOne({ _id: id });
    return NextResponse.json({ message: "Xóa bài viết thành công" });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    // Validate ID exists
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const { title, content, tags } = await req.json();

    // Validate required fields
    if (!title || !content || !tags) {
      return NextResponse.json(
        { message: "Please provide all fields" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if document exists first
    const existingArticle = await Articles.findById(id);
    console.log(existingArticle);
    if (!existingArticle) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }
    // Update and return the updated document
    existingArticle.title = title;
    existingArticle.content = content;
    existingArticle.tags = tags;
    await existingArticle.save();
    return NextResponse.json({
      message: "Cập nhật thành công",
      data: existingArticle,
    });
  } catch (error) {

    if (error instanceof Error) {
      // Handle invalid ObjectId (Mongoose CastError)
      if (error.name === "CastError") {
        return NextResponse.json(
          { message: "Invalid ID format" },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { message: error.message || "Internal server error" },
        { status: 500 }
      );
    }

    // Handle non-Error objects
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
