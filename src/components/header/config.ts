import { Link } from "@/types";

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: '/assets/nav-link-previews/landing.png'
  },
  {
    title: 'About',
    href: '/about',
    thumbnail: '/assets/nav-link-previews/about.png'
  },
  {
    title: 'Skills',
    href: '/#skills',
    thumbnail: '/assets/nav-link-previews/skills.png'
  },
  {
    title: 'Projects',
    href: '/#projects',
    thumbnail: '/assets/nav-link-previews/projects.png'
  },
  // {
  //   title: 'Skills',
  //   href: '/skills',
  //   thumbnail: '/assets/nav-link-previews/skills.png'
  // },
  // {
  //   title: 'Testimonials',
  //   href: '/testimonials',
  //   thumbnail: '/assets/nav-link-previews/testimonials.png'
  // },
  {
    title: 'Contact',
    href: '/#contact',
    // Match actual filename in public/assets/nav-link-previews
    thumbnail: '/assets/nav-link-previews/contacts.png'
  }
];

export { links };
