"use client";
 
import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";
 
type DogImageProps = {
  message: string;
};
 
export function DogImage({ message }: DogImageProps) {
  const [imageUrl, setImageUrl] = useState(message);
 
  const refreshImage = async () => {
    setImageUrl(""); 
    const image = await fetchImage();
    setImageUrl(image.message);
  };
  return (
    <div className={styles.page}>
      <button onClick={refreshImage} className={styles.button}>
        他のわんこも見る
      </button>
      <div className={styles.frame}>
        {imageUrl && <img src={imageUrl} className={styles.img} />}
      </div>
    </div>
  );
}