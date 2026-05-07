import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const order = await Order.create(body);

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}