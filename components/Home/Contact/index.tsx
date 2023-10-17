import { useState } from 'react';

import { css } from '@emotion/react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

import { Button, IconButton } from 'components/common/Button';
import Typography from 'components/common/Typography';
import Modal from 'components/Home/Contact/Modal';
import Styled from 'components/Home/Contact/Styled';
import { color, spacing } from 'constants/theme';

import callIcon from 'assets/icons/icon-tel.svg';
import KakaoPayLogo from 'assets/icons/kakaopay.png';
import TossLogo from 'assets/icons/toss.png';
import paperImg from 'assets/images/paper-background.png';

const liCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 50%;
`;
const buttonCss = css`
  &&& {
    background-color: #78c0e9;
    border-radius: 25px;
    width: 80%;
    color: white;
    padding: ${spacing[16]}px;
    font-size: 16px;
    margin-top: ${spacing[32]}px;
    &.suzu {
      background-color: #f79e9e;
    }
  }
`;
const copy = (copyText: string) => {
  const tmpTextarea = document.createElement('textarea');
  tmpTextarea.value = copyText;

  document.body.appendChild(tmpTextarea);
  tmpTextarea.select();
  tmpTextarea.setSelectionRange(0, 9999); // 셀렉트 범위 설정

  document.execCommand('copy');
  document.body.removeChild(tmpTextarea);
  alert('계좌번호 복사가 완료되었습니다.');
};
const Contact = () => {
  const [modalState, setModalState] = useState<0 | 1 | 2>(0);
  const handleHeehyeonDetailButtonClick = () => setModalState(1);
  const handleMisuzuDetailButtonClick = () => setModalState(2);
  const handleModalClose = () => setModalState(0);
  return (
    <Styled.Panel>
      <Image
        fill
        src={paperImg}
        alt=""
        sizes="30vw"
        placeholder="blur"
        blurDataURL={paperImg.blurDataURL}
        css={{ zIndex: 0, opacity: 0.4 }}
      />
      <div css={{ position: 'relative', zIndex: 1, minHeight: 'inherit' }}>
        <Typography variant="pageTitle" align="center">
          마음 전하실 곳 & 연락처
        </Typography>
        <ul css={{ display: 'flex', flexWrap: 'wrap', padding: `${spacing[40] * 2}px 0` }}>
          <li css={liCss}>
            <Typography variant="title18" align="center">
              <b>신랑</b> 이희현
            </Typography>
            <Button css={buttonCss} onClick={handleHeehyeonDetailButtonClick}>
              자세히 보기
            </Button>
            {modalState === 1 &&
              createPortal(
                <Modal onClose={handleModalClose}>
                  <Typography variant="body3" align="center" css={{ display: 'flex' }}>
                    <input
                      readOnly
                      defaultValue="토스뱅크 1000-0007-0990"
                      css={{
                        border: '1px solid #eee',
                        background: '#f9f9f9',
                        fontSize: 16,
                        padding: 10,
                        flex: '1 1 80%',
                      }}
                    />
                    <button
                      type="button"
                      css={{ color: color.white, flex: '1 1 20%', border: 0, backgroundColor: color.blue }}
                      onClick={() => copy('100000070990')}
                    >
                      복사
                    </button>
                  </Typography>
                  <div css={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href="tel:01063397866"
                      css={{ height: 40, position: 'relative', display: 'inline-block', padding: '7.5px 12px' }}
                    >
                      <Image width={25} height={25} src={callIcon} alt="call" />
                    </a>
                    <IconButton onClick={() => window.open('https://qr.kakaopay.com/FTcFMuGXR', '_blank')}>
                      <Image width={60.25} height={25} src={KakaoPayLogo} alt="kakao-pay" />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://toss.me/프론트엔더', '_blank')}>
                      <Image width={80} height={40} src={TossLogo} alt="toss-pay" />
                    </IconButton>
                  </div>
                  <hr css={{ width: '100%' }} />

                  <Typography variant="body3" align="left" css={{ display: 'flex', alignItems: 'center' }}>
                    아버지&nbsp;<b>이규근</b>
                    <a
                      href="tel:01076576272"
                      css={{ height: 40, position: 'relative', display: 'inline-block', padding: '5px 12px' }}
                    >
                      <Image width={25} height={25} src={callIcon} alt="call" />
                    </a>
                  </Typography>

                  <Typography variant="body3" align="left" css={{ display: 'flex', alignItems: 'center' }}>
                    어머니&nbsp;<b>손란</b>
                    <a
                      href="tel:01097187273"
                      css={{ height: 40, position: 'relative', display: 'inline-block', padding: '5px 12px' }}
                    >
                      <Image width={25} height={25} src={callIcon} alt="call" />
                    </a>
                  </Typography>
                </Modal>,
                document.body
              )}
          </li>
          <li css={liCss}>
            <Typography variant="title18" align="center" css={{ letterSpacing: -1 }}>
              <b>신부</b> 오쿠다이라미스즈
            </Typography>

            <Button css={buttonCss} className="suzu" onClick={handleMisuzuDetailButtonClick}>
              자세히 보기
            </Button>

            {modalState === 2 &&
              createPortal(
                <Modal onClose={handleModalClose}>
                  <Typography variant="body3" align="center" css={{ display: 'flex' }}>
                    <input
                      readOnly
                      defaultValue="토스뱅크 1000-2766-5449"
                      css={{
                        border: '1px solid #eee',
                        background: '#f9f9f9',
                        fontSize: 16,
                        padding: 10,
                        flex: '1 1 80%',
                      }}
                    />
                    <button
                      type="button"
                      css={{ color: color.white, flex: '1 1 20%', border: 0, backgroundColor: color.blue }}
                      onClick={() => copy('100027665449')}
                    >
                      복사
                    </button>
                  </Typography>
                  <div css={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href="tel:01083707866"
                      css={{ height: 40, position: 'relative', display: 'inline-block', padding: '7.5px 12px' }}
                    >
                      <Image width={25} height={25} src={callIcon} alt="call" />
                    </a>
                    <IconButton onClick={() => window.open('https://qr.kakaopay.com/flWhr76cOR', '_blank')}>
                      <Image width={60.25} height={25} src={KakaoPayLogo} alt="kakao-pay" />
                    </IconButton>
                  </div>
                </Modal>,
                document.body
              )}
          </li>
        </ul>
      </div>
    </Styled.Panel>
  );
};

export default Contact;
