import { menu } from '../../../data/data';

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // unwrap promise
  const food = menu.find((item: { id: number }) => item.id.toString() === id);
  return Response.json(food);
}