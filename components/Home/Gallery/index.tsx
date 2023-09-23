import { useState } from 'react';

import Image, { type StaticImageData } from 'next/image';
import { PhotoAlbum } from 'react-photo-album';
import type { RenderPhotoProps } from 'react-photo-album';
import { Lightbox, type RenderSlideProps, type SlideImage } from 'yet-another-react-lightbox';
import { isImageFitCover, isImageSlide, useLightboxProps } from 'yet-another-react-lightbox';

import Typography from 'components/common/Typography';
import Styled from 'components/Home/Gallery/Styled';

import 'yet-another-react-lightbox/styles.css';

import Wedding01 from 'public/photos/wedding01.jpg';
import Wedding02 from 'public/photos/wedding02.jpg';
import Wedding03 from 'public/photos/wedding03.jpg';
import Wedding04 from 'public/photos/wedding04.jpg';
import Wedding05 from 'public/photos/wedding05.jpg';
import Wedding06 from 'public/photos/wedding06.jpg';
import Wedding07 from 'public/photos/wedding07.jpg';
import Wedding08 from 'public/photos/wedding08.jpg';
import Wedding09 from 'public/photos/wedding09.jpg';
import Wedding10 from 'public/photos/wedding10.jpg';
import Wedding11 from 'public/photos/wedding11.jpg';
import Wedding12 from 'public/photos/wedding12.jpg';
import Wedding13 from 'public/photos/wedding13.jpg';
import Wedding14 from 'public/photos/wedding14.jpg';
const photos = [
  Wedding01,
  Wedding02,
  Wedding03,
  Wedding04,
  Wedding05,
  Wedding06,
  Wedding07,
  Wedding14,
  Wedding08,
  Wedding11,
  Wedding09,
  Wedding10,
  Wedding12,
  Wedding13,
];

const isNextJsImage = (slide): slide is StaticImageData => {
  return isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number';
};

const NextJsAlbumImage = ({
  photo,
  imageProps: { alt, title, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) => {
  return (
    <div css={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        fill
        alt="스즈와 희현이의 스튜디오 촬영사진"
        loading="lazy"
        src={photo}
        {...{ alt, title, onClick, className }}
        sizes="100%"
      />
    </div>
  );
};

const NextJsImage = ({ slide, rect }: RenderSlideProps<SlideImage>) => {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);
  if (!isNextJsImage(slide)) return undefined;

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

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  return (
    <Styled.Panel>
      <Typography variant="pageTitle" align="center">
        갤러리
      </Typography>

      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={150}
        renderPhoto={NextJsAlbumImage}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
        render={{ slide: NextJsImage }}
      />
    </Styled.Panel>
  );
};

export default Gallery;
