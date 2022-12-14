import React from "react";
import * as S from './styled';
import RepositoryItem from '../repository-item';

function Repositories() {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="repo 1"
                    fullName="joaosodres/repos"
                    linkToRepo="https://api.github.com/users/joaosodres/repos"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="repo 2"
                    fullName="joaosodres/joaosodres"
                    linkToRepo="https://github.com/joaosodres"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    );
}

export default Repositories;