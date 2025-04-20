import Landing from "@/templates/shadcn/pages/landing";
import { page } from "@/data/demo";

export const runtime = "edge";

export default async function () {
  return <Landing page={page} />;
}
