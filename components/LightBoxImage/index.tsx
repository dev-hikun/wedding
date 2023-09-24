import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import {
  useLightboxProps,
  type SlideImage,
  type RenderSlideProps,
  isImageFitCover,
  isImageSlide,
} from 'yet-another-react-lightbox';

const isNextJsImage = (slide): slide is StaticImageData => {
  return isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number';
};

const LightboxImages = ({ slide, rect }: RenderSlideProps<SlideImage>) => {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);
  if (!isNextJsImage(slide)) return null;

  const width = !cover ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width)) : rect.width;
  const height = !cover ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height)) : rect.height;

  return (
    <div css={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=""
        src={slide}
        loading="eager"
        draggable={false}
        placeholder={slide.blurDataURL ? 'blur' : undefined}
        css={{ objectFit: cover ? 'cover' : 'contain' }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
};

export default LightboxImages;
