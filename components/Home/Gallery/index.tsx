import { useState } from 'react';

import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { PhotoAlbum } from 'react-photo-album';
import type { RenderPhotoProps } from 'react-photo-album';
import { Lightbox } from 'yet-another-react-lightbox';

import Typography from 'components/common/Typography';
import Styled from 'components/Home/Gallery/Styled';
import 'yet-another-react-lightbox/styles.css';
import { photos } from 'components/Home/Gallery/WeddingImage';
import LightboxImages from 'components/LightBoxImage';

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
        sizes="30vw"
      />
    </div>
  );
};

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const { t } = useTranslation();
  return (
    <Styled.Panel>
      <Typography variant="pageTitle" align="center">
        {t('갤러리')}
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
        render={{ slide: LightboxImages }}
      />
    </Styled.Panel>
  );
};

export default Gallery;
