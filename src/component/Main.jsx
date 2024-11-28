import React from 'react'
import {HeaderMain, BodyMain} from './main/index'
import {backgroundHeader1, backgroundHeader2, backgroundHeader3, backgroundHeader4, backgroundHeader5, backgroundHeader6, backgroundHeader7, backgroundHeader8, backgroundHeader9, backgroundHeader10, backgroundHeader11 } from '../assets/index'

const Main = () => {
  const data = [
    {url: backgroundHeader1},
    {url: backgroundHeader2},
    {url: backgroundHeader3},
    {url: backgroundHeader4},
    {url: backgroundHeader5},
  ]
  const image = [
    {url: backgroundHeader6},
    {url: backgroundHeader7},
    {url: backgroundHeader8},
    {url: backgroundHeader9},
    {url: backgroundHeader10},
    {url: backgroundHeader11},
  ]
  return (
    <main>
    <HeaderMain data={data} />
    <BodyMain image={image} />
    </main>
  )
}

export default Main