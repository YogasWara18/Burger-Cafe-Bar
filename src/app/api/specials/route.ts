import { specials } from '../../data/data';

export async function GET() {
    return Response.json(specials);
}