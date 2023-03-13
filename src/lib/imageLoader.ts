import type { ImageLoaderProps } from "next/image";

const imageLoader = ({ src }: { src: string }) => {
  return `https://storage.zeithrold.com/sevenfield/${src}`;
};

export default imageLoader;
