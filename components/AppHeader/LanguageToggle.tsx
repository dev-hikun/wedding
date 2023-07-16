import { useRouter } from 'next/router';

import Styled from 'components/AppHeader/Styled';
import { clsx } from 'utils/common';

const LanguageToggle = () => {
  const { locale } = useRouter();
  const isKorean = locale === 'ko';
  return (
    <Styled.ToggleWrapper role="group" aria-label="language-toggle">
      <Styled.ToggleButton
        type="button"
        aria-pressed={isKorean}
        className={clsx([isKorean && 'active'])}
        aria-label="korean"
        href="/"
        locale="ko"
      >
        🇰🇷
      </Styled.ToggleButton>
      <Styled.ToggleButton
        type="button"
        aria-pressed={!isKorean}
        className={clsx([!isKorean && 'active'])}
        aria-label="japanese"
        href="/"
        locale="ja"
      >
        🇯🇵
      </Styled.ToggleButton>
    </Styled.ToggleWrapper>
  );
};

export default LanguageToggle;
