type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EMAIL = 'daohuyhoang494@GMAIL.COM'

export const WEB_TITLE = 'Đào Huy Hoàng - RTL Design'
export const WEB_DESCRIPTION =
  'Personal portfolio of Đào Huy Hoàng, an RTL Design student interested in digital design and hardware development.'
export const FOOTER_COPYRIGHT = '© 2026 Đào Huy Hoàng'
export const FOOTER_LINK = 'https://github.com/daohuyhoang46'

export const NAME = 'Đào Huy Hoàng'
export const JOB_TITLE = 'RTL Design'
export const DESCRIPTION =
  'I am a student in the Faculty of Electronics and Telecommunications at the University of Science, VNU-HCM, with an interest in RTL design and digital hardware. I work with Verilog HDL and enjoy building and verifying hardware projects.'

export const PROJECTS: Project[] = [
  {
    name: 'Simple Processor',
    description:
      'A simple processor designed in Verilog HDL, including datapath, control logic, instruction execution, and memory interface.',
    link: 'https://github.com/daohuyhoang46',
    id: 'project1',
  },
  {
    name: 'DMA Controller',
    description:
      'A simple DMA controller designed in Verilog HDL with read and write master logic, control registers, FIFO data flow, and simulation testbench.',
    link: 'https://github.com/daohuyhoang46',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'University of Science, VNU-HCM',
    title: 'Faculty of Electronics and Telecommunications',
    start: '',
    end: 'Present',
    link: 'https://hcmus.edu.vn/',
    id: 'education1',
  },
]

export const BLOG_POSTS: BlogPost[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/daohuyhoang46',
  },
]
