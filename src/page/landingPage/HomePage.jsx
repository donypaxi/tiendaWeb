import React from 'react'
import { GalleryLayout, NavBarLayout } from '../../layout/landinPage'
import { Footer } from '../../components/landingPage/Footer'
import { Button } from '@mui/material'

export const HomePage = () => {
  return (
    <>

        <NavBarLayout/>
        <GalleryLayout/>
        <Footer/>
        
    </>
  )
}
