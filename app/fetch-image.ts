"use server";

type Image = {
 message : string;
};

export async function fetchImage():Promise<Image> {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const images = await res.json();
  console.log("fetchImage: 画像情報を取得しました", images);
  return images;
}