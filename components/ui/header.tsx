'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IMenu } from '@/types'
import { Input, Icon, AnimatedButton } from '@/components/utils'
import BannerLogoMax from '@/assets/images/banner_logo_max.svg'
import whiteImgLogo from '@/assets/images/white-text-transparent-logo.png'

const MENUS : IMenu[] = [
  {
    title: "CULTURE",
    path: "/culture",
  },
  {
    title: "CAPABILITIES",
    path: "/capabilities",
  },
  {
    title: "LOCATIONS",
    path: "/locations",
  },
  {
    title: "BLOG",
    path: "/blog",
  },
  {
    title: "CONTACT US",
    path: "/contact"
  }
]


interface ILink {
  name: string;
  path: string;
}

const links: ILink[] = [
  { name: "CAPABILITIES DIRECTORY", path: '/capabilities-catalog'},
  // { name: "INVESTOR RELATIONS", path: ''},
  { name: "CONTACT US", path: '/contact'},
]

interface ISummaryItem {
  title: string;
  contents: ILink[];
  link: string;
}

const summarys: ISummaryItem[] = [
  {
    title: "CULTURE",
    contents: [
      { name: "Leadership", path: "/culture/leadership" },
      { name: "About Us", path: "/aboutus" },
      { name: "Diversity & Inclusion", path: "/diversity-inclusion" },
    ],
    link: '/culture'
  },
  {
    title: "CAPABILITIES",
    contents: [
      { name: "Electric Power", path: "/capabilities/electric-power" },
      { name: "Energy Efficiency", path: "/capabilities/energy-efficiency" },
      { name: "Safety", path: "/capabilities/safety" },
      { name: "Interior Remodeling", path: "/capabilities/interior-remodeling" },
      { name: "Exterior Remodeling", path: "/capabilities/exterior-remodeling" },
      { name: "Restoration", path: "/capabilities/restoration" },
      { name: "Generators", path: "/capabilities/generators" },
      { name: "Maintenance Subscriptions", path: "/capabilities/maintenance-subscriptions" }
    ],
    link: '/capabilities'
  },
  {
    title: "LOCATIONS",
    contents: [
      { name: "Millsboro, DE", path: "/locations/millsboro" },
      { name: "Lewes, DE", path: "/locations/lewes" },
      { name: "Dover, DE", path: "/locations/dover" },
      { name: "Smyrna, DE", path: "/locations/smyrna" },
      { name: "Dagsboro, DE", path: "/locations/dagsboro" },
      { name: "Laurel, DE", path: "/locations/laurel" },
      { name: "Milford, DE", path: "/locations/milford" },
      { name: "Bridgeville, DE", path: "/locations/bridgeville" }
    ],
    link: '/locations'
  },
  {
    title: "BLOG",
    contents: [],
    link: '/blog'
  },
  // {
  //   title: "CAREERS",
  //   contents: [
  //     { name: "Pay & Benefits", path: "/pay-benefits" },
  //   ],
  //   link: '#'
  // },
  // {
  //   title: "CAMPANIES",
  //   contents: [],
  //   link: ''
  // },
]

export default function Header() {

  const [curPos, setCurPos] = useState<number>(0);
  const [summaryPage, setSummaryPage] = useState<boolean>(false);

  // detect whether user has scrolled down or up
  const scrollHandler = () => {
    setCurPos(window.pageYOffset);
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const onClickLink = () => {
    const summaryBtn = document.getElementById("summarybtn");
    summaryBtn?.click();
  }

  return (
    <header>
      <div className={`header fixed top-0 w-full flex flex-col z-30 transition-all duration-500 ${summaryPage ? 'h-full header-bg-summary' : 'header-bg'}`}>
        <div className='w-full bg-black py-2.5 md:hidden'>
          <h2 className='text-white font-bold text-center text-xl'>302-404-4526</h2>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5">

          {/* Site branding */}
          <a href='/' className="header-icon flex items-center">
            {summaryPage ? (
              <Image src={whiteImgLogo} width={190} height={190} alt="Logo" style={{ height: 'auto' }} />
            ) : (
              <BannerLogoMax width={190} height={190} style={{ height: 'auto', maxWidth: 190 }} className="inline-block" aria-hidden="true" />
            )}
          </a>

          {/* Menu Bar */}
          <div className="flex items-center">
            <div className='header-menuitems flex items-center'>
              {
                MENUS.map((menuItem, idx) => (
                  <Link key={idx} href={menuItem.path}>
                    <div key={idx} className={`mx-4 font-bold header-menuitems-item 'text-black`}>{menuItem.title}</div>
                  </Link>
                ))
              }
            </div>
            <div className='header-icons font-bold'>
              {/* <Icon icon="bar" className='mx-3' width={40} height={40}/> */}
              <input id="menu-toggle" type="checkbox" />
              <label id='summarybtn' className='menu-button-container' htmlFor="menu-toggle" onClick={() => {setSummaryPage(!summaryPage)}}>
                <div className={`menu-button ${summaryPage ? '' : 'menu-button-black'}`}></div>
              </label>
            </div>
            {/* <div className={`header-icons font-bold ${!summaryPage ? "block" : "hidden"}`}>
              <Icon icon="search" className='mx-3' width={30} height={30} />
            </div> */}
          </div>
        </div>
        {!!summaryPage &&
          <div className='header-summary flex-1 grid md:grid-cols-2 xl:grid-cols-4 text-white px-5 py-5' >
          {
            summarys.map((summaryItem, idx) => (
              <div key={idx} className='p-4 flex flex-row justify-between'>
                <div className={`w-11/12 ${(idx === 2 || idx === 3) ? 'flex flex-col' : ''}`}>
                  <Link href={summaryItem.link}>
                    <div className='text-3xl font-bold mb-8 header-underline' onClick={() => {setSummaryPage(!summaryPage); onClickLink();}}>
                      {summaryItem.title}
                    </div>
                  </Link>
                  <div className={''}>
                    { summaryItem.contents.map((contentItem, contentIdx) => (
                      <div key={contentIdx} className='p-3 header-underline header-underline-list txt-warning' >
                        <Link href={contentItem.path} onClick={onClickLink}>{contentItem.name}</Link>
                      </div>
                    )) }
                      
                    { idx == 1 && <div>
                      {
                        links.map((link, idx) => (
                          <Link href={link.path} key={idx} onClick={onClickLink}>
                            <AnimatedButton key={idx} variant='warning' fullWidth={true} icon='arrow-right' className='text-white text-left text-sm my-1'>
                              {link.name}
                            </AnimatedButton>
                          </Link>
                        ))
                      }
                    </div> }
                  </div>
                </div>
                {idx < 3 ? <div className='header-bar w-11/12'></div> : <></>}
              </div>
            ))
          }
        </div>
      }
      </div>
    </header>
  )
}