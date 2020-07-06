const pool = [
  {
    id: 1,
    accountId: 1,
    type: 1,
    theme: 1,
    title: 'civic',
    createAt: 1594013552000,
    updateAt: 1594013552000,
    name: 'Maria Williams',
    introduction: 'I’m a digital designer in love with photography, painting and discovering new worlds and cultures.',
    info: {
      title: 'General Info',
      list: [
        {
          label: 'Date of Birth',
          content: 'Aug 25, 1988'
        },
        {
          label: 'Address',
          content: 'Rosia Road 55, Gibraltar, UK'
        },
        {
          label: 'E-mail',
          content: 'mariawilliams@company.com'
        },
        {
          label: 'Phone',
          content: '+43 5266 22 345'
        }
      ]
    },
    heroImage: '/preview/type_1/img/hero.jpg',
    socialLinks: [
      {
        type: 'pinterest',
        url: ''
      },
      {
        type: 'linkedin',
        url: ''
      },
      {
        type: 'instagram',
        url: ''
      },
      {
        type: 'facebook',
        url: ''
      },
      {
        type: 'twitter',
        url: ''
      }
    ],
    workExperienceList: [
      {
        startAt: '2016',
        endAt: 'Present',
        company: 'Web Design Company',
        title: 'Web Designer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. '
      },
      {
        startAt: '2014',
        endAt: '2016',
        company: 'Web Design Company',
        title: 'Web Designer',
        description: 'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. '
      }
    ],
    educationList: [
      {
        startAt: '2014',
        endAt: '2018',
        diploma: 'Ui/Ux Diploma',
        college: 'Design College California',
        description: 'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed.'
      },
      {
        startAt: '2013',
        endAt: '2014',
        diploma: 'Web design Diploma',
        college: 'Design College California',
        description: 'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed.'
      }
    ],
    referenceList: [
      {
        description: 'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. ',
        name: 'Robert G. Smith',
        title: 'Mnagager, Company'
      },
      {
        description: 'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. ',
        name: 'Robert G. Smith',
        title: 'Mnagager, Company'
      },
      {
        description: 'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. ',
        name: 'Robert G. Smith',
        title: 'Mnagager, Company'
      }
    ],
    portfolioList: [
      {
        img: '/preview/type_1/img/portfolio/1.jpg',
        url: '/preview/type_1/img/portfolio/1.jpg',
        name: 'Brand Campaign',
        category: 'Graphic design'
      },
      {
        img: '/preview/type_1/img/portfolio/2.jpg',
        url: '/preview/type_1/img/portfolio/2.jpg',
        name: 'A Corporate Identity',
        category: 'Graphic design'
      }, {
        img: '/preview/type_1/img/portfolio/3.jpg',
        url: '/preview/type_1/img/portfolio/3.jpg',
        name: 'Web Design Website',
        category: 'Graphic design'
      },
      {
        img: '/preview/type_1/img/portfolio/4.jpg',
        url: '/preview/type_1/img/portfolio/4.jpg',
        name: 'Logo design',
        category: 'Graphic design'
      }
    ],
    skills: [
      {
        type: 'progress',
        columns: {
          percent: '75',
          name: 'Inspiration',
          description: 'Etiam nec odio vestibulum est.'
        }
      },
      {
        type: 'progress',
        columns: {
          percent: '83',
          name: 'Inspiration',
          description: 'Etiam nec odio vestibulum est.'
        }
      }
    ]
  }
]
module.exports.findByAccountId = async function (accountId) {
  return pool.filter(elem => {
    return elem.accountId === accountId
  })
}
module.exports.findById = async function (id) {
  const list = pool.filter(elem => {
    return elem.id === id
  })
  if (list.length > 0) {
    return list[0]
  }
  return null
}
module.exports.insert = async function (accountId, resume) {
  resume.id = pool.length
  resume.accountId = accountId
  pool.push(resume)
}
