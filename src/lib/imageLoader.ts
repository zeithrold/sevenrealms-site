import type { ImageLoaderProps } from "next/image";

const imageLoader = ({ src }: { src: string }) => {
  return `https://storage.zeithrold.com/sevenfield/${src}`;
  // return `https://storage.zeithrold.com/sevenfield/${src}?x-oss-process=image/resize,w_${width}/quality,q_${quality || 100}`
};

export default imageLoader;
