import { getItem } from "./getItem";

export default async function Home() {

  const item = await getItem() // cache MISS
  console.log(item)

  return (
  <div className="h-screen flex items-center justify-center">
     <h1>hello world</h1>
  </div>
  );
}
