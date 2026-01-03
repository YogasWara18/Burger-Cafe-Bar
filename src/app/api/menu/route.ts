import { menu } from '../../data/data';

export async function GET() {
    return Response.json(menu);
}