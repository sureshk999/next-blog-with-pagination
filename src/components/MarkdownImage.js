import Image from 'next/image';

const MarkdownImage = ({ src, alt }) => {
  const aspectRatio = 2 / 3;
  const width = 640; 
  const height = width * aspectRatio;
  const blurDataURL = 'data:image/svg+xml;base64,...'; // base64-encoded image

  return (
    <span style={{ display: 'block', position: 'relative', borderRadius: '10px', overflow: 'hidden', width: `${width}px`, height: `${height}px`, marginLeft: 'auto', marginRight: 'auto' }}>
     
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={blurDataURL}

      />
    </span>
  );
};

export default MarkdownImage;
