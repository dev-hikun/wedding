import { useRouter } from 'next/router';

import Styled from 'components/AppHeader/Styled';
import usePageLoading from 'hooks/usePageLoading';
import { clsx } from 'utils/common';

const LanguageToggle = () => {
  const { locale } = useRouter();
  const toggle = usePageLoading();

  const isKorean = locale === 'ko';

  const handleToggleButton = () => toggle(true);
  return (
    <Styled.ToggleWrapper role="group" aria-label="language-toggle">
      <Styled.ToggleButton
        type="button"
        aria-pressed={isKorean}
        className={clsx([isKorean && 'active'])}
        aria-label="korean"
        href="/ko"
        onClick={handleToggleButton}
      >
        🇰🇷
      </Styled.ToggleButton>
      <Styled.ToggleButton
        type="button"
        aria-pressed={!isKorean}
        className={clsx([!isKorean && 'active'])}
        aria-label="japanese"
        href="/ja"
        onClick={handleToggleButton}
      >
        🇯🇵
      </Styled.ToggleButton>
    </Styled.ToggleWrapper>
  );
};

export default LanguageToggle;
