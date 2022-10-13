import React from "react";
import * as S from '../FreeText/FreeText.styles'

export const FreeText = ({data}) => {
    return (
        <>
          <S.Main>
         <S.Label>{data.label.text}</S.Label>
            <S.Input>Write something</S.Input>
          </S.Main>
        </>
    )
}