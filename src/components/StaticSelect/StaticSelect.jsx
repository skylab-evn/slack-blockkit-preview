import React from 'react'
import * as S from './StaticSelect.styles'

export const StaticSelect = ({ data }) => {
  return (
    <>
      <S.Main>
        {data.label && <S.Label>{data.label.text}</S.Label>}
        <S.StaticSelect>
          Select an item
          <S.Icon />
        </S.StaticSelect>
      </S.Main>
    </>
  )
}
