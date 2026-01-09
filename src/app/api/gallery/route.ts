import { gallery } from '../../data/data';

export async function GET() {
    return Response.json(gallery);
}