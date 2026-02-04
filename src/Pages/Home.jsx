import React from 'react'
import Banner from '../Components/Home/Banner'
import BlogBanner from '../Components/Home/BlogBanner'
import Features from '../Components/Home/Features'
import PopularAuthors from '../Components/Home/Authors/PopularAuthors'
import FeaturedBooks from '../Components/Home/FeaturedBooks'
import BestSelling from '../Components/Home/BestSelling'

export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <FeaturedBooks></FeaturedBooks>
        <Features></Features>
        <BestSelling></BestSelling>
        <BlogBanner></BlogBanner>
        <PopularAuthors></PopularAuthors>
    </div>
  )
}
