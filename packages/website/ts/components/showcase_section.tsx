import * as React from 'react';
import styled from 'styled-components';

import { Section } from 'ts/components/newLayout';

interface Props {
    children?: React.ReactNode;
    showcaseImgSrc: string;
    maxWidth?: string;
    sectionPadding?: string;
    paddingMobile?: string;
}

const ShowcaseImg = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    right: -20%;
    margin: auto 0 auto 0;
    width: 60%;
    max-width: 900px;
    height: 100%;
    @media (max-width: 900px) {
        display: none;
    }
`;

const MobileImg = styled.img`
    display: none;
    @media (max-width: 900px) {
        display: block;
        width: 100%;
        padding: 0 30px;
    }
`;

interface WrapProps {
    sectionPadding?: string;
    paddingMobile?: string;
}

const Wrap = styled.section<WrapProps>`
    position: relative;
    padding: ${props => props.sectionPadding || '0 0'};
    @media (max-width: 768px) {
        padding: ${props => props.paddingMobile || '40px 0'};
    }
`;

const ContentWrap = styled.div`
    width: 60%;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const ShowcaseSection = (props: Props) => (
    <Wrap paddingMobile={props.paddingMobile} sectionPadding={props.sectionPadding}>
        <MobileImg src={props.showcaseImgSrc} />
        <Section maxWidth={props.maxWidth} padding={'80px 0'}>
            <ContentWrap>{props.children}</ContentWrap>
        </Section>
        <ShowcaseImg src={props.showcaseImgSrc} />
    </Wrap>
);
