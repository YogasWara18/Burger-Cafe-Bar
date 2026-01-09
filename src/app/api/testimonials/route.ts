import { testimonials } from "../../data/data";

export async function GET() {
    return Response.json(testimonials);
}