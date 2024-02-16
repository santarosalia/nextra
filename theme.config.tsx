import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Worktronics</span>,
  docsRepositoryBase: 'https://github.com/santarosalia/nextra',
  footer: {
    text: 'Nextra Docs Template',
  },
  search: {
    placeholder: '검색어를 입력하세요.',
  },
  editLink: {
    text: ''
  },
  feedback: {
    content: <></>
  },
  banner: {
    key : '2402.16',
    text: <a href='/releaseNote/2024/240216'>새로운 버전 출시! 👉릴리즈노트 보기👈 </a>
  }
}

export default config
