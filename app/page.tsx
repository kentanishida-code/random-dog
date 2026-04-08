import { connection } from "next/server";
import { DogImage } from "./dog-image";
import { fetchImage } from "./fetch-image";
 
export default async function Home() {
  await connection();
  const image = await fetchImage();
  return <DogImage message={image.message} />;
}