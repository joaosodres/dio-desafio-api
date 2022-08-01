import React from "react";
import * as S from './styled';

function Layout({ children }) {
    return (
        <S.Wrapper>
            <header>
                Header
            </header>
            {children}
        </S.Wrapper>
    );
}

export default Layout;