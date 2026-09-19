import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://owaishkhumar.netlify.app'

const pages = {
  '/': {
    title: 'Mohammed Owaish Khumar | Software Developer | .NET Backend Specialist',
    description:
      'Official portfolio of Mohammed Owaish Khumar (Owaish Khumar / Owaish), Software Developer at Sportz Interactive, Mumbai. Backend specialist in .NET, ASP.NET Core, APIs, PostgreSQL, and cloud.'
  },
  '/about': {
    title: 'About Mohammed Owaish Khumar | Software Developer in Mumbai',
    description:
      'About Mohammed Owaish Khumar, also known as Owaish Khumar — Software Developer specializing in C#, ASP.NET Core, scalable APIs, and cloud-backed systems.'
  },
  '/skills': {
    title: 'Skills of Mohammed Owaish Khumar | .NET, APIs, Cloud',
    description:
      'Technical skills of Mohammed Owaish Khumar: C#, ASP.NET Core, REST APIs, PostgreSQL, Redis, AWS, Docker, Jenkins, and React.'
  },
  '/experience': {
    title: 'Experience of Mohammed Owaish Khumar | Sportz Interactive',
    description:
      'Work experience of Mohammed Owaish Khumar at Sportz Interactive, building fan-engagement platforms for UEFA, ICC, and other global sports organizations.'
  },
  '/projects': {
    title: 'Projects by Mohammed Owaish Khumar | Fantasy, APIs, IoT',
    description:
      'Software projects by Mohammed Owaish Khumar, including sports fantasy backends, quiz engines, REST APIs, and IoT applications.'
  },
  '/education': {
    title: 'Education of Mohammed Owaish Khumar | DJ Sanghvi, Mumbai',
    description:
      'Education of Mohammed Owaish Khumar: B.Tech from Dwarkadas J. Sanghvi College of Engineering and Diploma from M.H. Saboo Siddik Polytechnic, Mumbai.'
  },
  '/contact': {
    title: 'Contact Mohammed Owaish Khumar | Software Developer',
    description:
      'Contact Mohammed Owaish Khumar (Owaish Khumar) for software development opportunities, collaborations, and backend engineering roles.'
  }
}

const setMeta = (attr, key, content) => {
  let element = document.querySelector(`meta[${attr}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

const setCanonical = (href) => {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

const Seo = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = pages[pathname] || pages['/']
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

    document.title = page.title
    setMeta('name', 'title', page.title)
    setMeta('name', 'description', page.description)
    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)
    setMeta('name', 'twitter:url', url)
    setCanonical(url)
  }, [pathname])

  return null
}

export default Seo
