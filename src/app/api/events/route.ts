import { events } from '../../data/data';

export async function GET() {
    return Response.json(events);
}