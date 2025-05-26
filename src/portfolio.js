/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Seo Youngsik",
  title: "안녕하세요. 😀 ",
  subTitle:
    "저는 풀스택 개발자입니다.\n\n풀스택 개발자로서 웹, 모바일, 서버 등 다양한 환경에서 사용자 경험을 최우선으로 생각하며 개발합니다.\n\n새로운 기술을 빠르게 습득하고, 문제 해결에 집요하게 접근합니다.\n\n함께 성장하는 개발 문화를 지향합니다.",
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/seoys",
  linkedin: "https://www.linkedin.com/in/seoyoungsik/",
  gmail: "angelskying@gmail.com",
  medium: "https://medium.com/@sosohappy",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "다양한 백엔드, 프론트엔드, 데이터베이스, 기타 기술을 활용하여 견고하고 확장성 있는 시스템을 개발합니다.",
  skills: [
    "⚡ Node.js, Python, Java, PHP 등 다양한 백엔드 언어 및 프레임워크(Django, Spring) 활용",
    "⚡ JavaScript, TypeScript, React, Vue.js, Svelte, Next.js 등 최신 프론트엔드 기술 적용",
    "⚡ TailwindCSS, Bootstrap 등 CSS 프레임워크로 반응형 UI 구현",
    "⚡ MongoDB, PostgreSQL, MySQL, MariaDB, Oracle, Redis 등 다양한 데이터베이스 설계 및 운영",
    "⚡ GraphQL, Git, Docker, Webpack 등 협업 및 배포 자동화 도구 활용"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Django", fontAwesomeClassname: "fas fa-leaf"}, // Font Awesome에 공식 Django 아이콘 없음, leaf로 대체
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Spring", fontAwesomeClassname: "fas fa-seedling"}, // 공식 Spring 아이콘 없음, seedling으로 대체
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "TypeScript", fontAwesomeClassname: "fab fa-js"}, // 공식 TypeScript 아이콘 없음, js로 대체
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Vue.js", fontAwesomeClassname: "fab fa-vuejs"},
    {skillName: "Svelte", fontAwesomeClassname: "fas fa-fire"}, // 공식 Svelte 아이콘 없음, fire로 대체
    {skillName: "Next.js", fontAwesomeClassname: "fas fa-circle"}, // 공식 Next.js 아이콘 없음, circle로 대체
    {skillName: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf"}, // 공식 MongoDB 아이콘 없음, leaf로 대체
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"}, // 공식 PostgreSQL 아이콘 없음, database로 대체
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MariaDB", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Oracle", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Redis", fontAwesomeClassname: "fas fa-memory"}, // 공식 Redis 아이콘 없음, memory로 대체
    {skillName: "GraphQL", fontAwesomeClassname: "fas fa-project-diagram"}, // 공식 GraphQL 아이콘 없음, project-diagram로 대체
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Webpack", fontAwesomeClassname: "fab fa-js"} // 공식 Webpack 아이콘 없음, js로 대체
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Database",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer(fullstack)",
      company: "EQL(한섬)",
      companylogo: require("./assets/images/eql_logo.png"),
      date: "2019.11-현재",
      desc: "린스타트업 방법론을 기반으로 MSA(Micro Service Architecture) 개발과 빠른 시장 검증을 통한 효율적인 제품 개발 전략을 수립했습니다.",
      descBullets: [
        "2025년 3월 동영상 서비스(shorts) 출시 준비 중",
        "2023년 11월 기획전/이벤트 템플릿화 적용으로 내부 운영비 절감",
        "2023년 6월 콘텐츠 웹사이트 리뉴얼 오픈 예정(React에서 Svelte로 전환)",
        "2023년 6월 ChatGPT를 활용한 카카오 오픈빌더 챗봇 오픈 예정",
        "2022년 3월 콘텐츠 웹사이트 고도화 작업 완료 및 오픈(https://wch.eqlstore.com)",
        "개인화 추천 상품 개발을 통한 서비스 개선, 선호 브랜드 및 상품 선택 기반 페르소나 유추",
        "MSA(Micro Service Architecture)를 활용한 독립적 배포 가능 설계로 유연한 콘텐츠 개발 환경 조성",
        "카카오 챗봇과 EQL 상품 연동을 통한 개인화 추천, 이미지 검색 및 고객 편의성 제공, CS 상담 감소"
      ]
    },
    {
      role: "Software Engineer(chatbot)",
      company: "엠비아이솔루션",
      companylogo: require("./assets/images/happytalk_logo.png"),
      date: "2017.11-2019.11",
      desc: "챗봇 이용 후, 고객사 CS 상담건 평균 30%이상 감소 및 CS 상담 품질 향상",
      descBullets: [
        "챗봇 Back-End 시스템 개발 및 운영",
        "상담톡(해피톡)과 챗봇에 연계를 위한 Back-End 시스템 개발",
        "페이스북 메신저 챗봇 연동 개발",
        "카카오 챗봇(아이봇빌더) 연동 개발/19년 상반기",
        "라인 메신저 챗봇 연동 개발/19년 상반기"
      ]
    },
    {
      role: "Software Engineer(API)",
      company: "29CM",
      companylogo: require("./assets/images/29cm_logo.png"),
      date: "2016.01-2017.09",
      desc: "RESTful API 설계 및 개발을 통해 쇼핑몰 플랫폼의 핵심 기능을 구현했습니다.",
      descBullets: [
        "콘텐츠 API 개발 - 콘텐츠 관리 시스템 구현",
        "회원/인증 API 개발 - JWT 기반 인증 시스템 구축",
        "성능 최적화 - Redis 캐싱 도입으로 API 응답 시간 50% 개선"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "주요 프로젝트 목록입니다.",
  projects: [
    {
      image: require("./assets/images/eql.png"),
      projectName: "EQL",
      projectDesc: "EQL은 온라인 쇼핑몰 플랫폼입니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ch.eqlstore.com/main"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/happytalk.png"),
      projectName: "Happytalk",
      projectDesc: "Happytalk은 온라인 채팅 플랫폼입니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://happytalk.io/"
        }
      ]
    },
    {
      image: require("./assets/images/29cm.png"),
      projectName: "29CM",
      projectDesc: "29CM는 온라인 쇼핑몰 플랫폼입니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.29cm.com/"
        }
      ]
    },
    {
      image: require("./assets/images/goodneighbors.png"),
      projectName: "굿네이버스",
      projectDesc: "굿네이버스는 국제구호개발 NGO(비정부기구) 사이트입니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://m.goodneighbors.kr/"
        }
      ]
    },
    {
      image: require("./assets/images/starbucks.png"),
      projectName: "스타벅스",
      projectDesc: "스타벅스(Starbucks)는 커피 브랜드입니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.starbucks.co.kr/"
        }
      ]
    },
    {
      image: require("./assets/images/emart.png"),
      projectName: "이마트 에브리데이",
      projectDesc: "이마트 에브리데이는 이마트의 온라인 쇼핑몰 플랫폼입니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://emile.emarteveryday.co.kr/"
        }
      ]
    },
    {
      image: require("./assets/images/sindoh.png"),
      projectName: "신도리코",
      projectDesc:
        "신도리코(SINDOH)는 한국의 대표적인 사무기기 전문 기업입니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.sindoh.com/ko/"
        }
      ]
    },
    {
      image: require("./assets/images/lg.png"),
      projectName: "lg u+ 케어코치",
      projectDesc: "LG U+ 케어코치는 LG U+의 고객 건강 지원 서비스입니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://m.lguplus.com/main"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "개발 과정에서 마주친 문제들을 해결하고 개선한 경험을 공유한 개인블로그입니다.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@sosohappy/how-i-fixed-the-mcp-puppeteer-server-disconnected-error-c38773f72bd4",
      title: "How I Fixed the “MCP puppeteer: Server disconnected” Error",
      description:
        "MCP(Multi-Channel Platform) 서버에서 Puppeteer를 사용할 때 발생하는 'Server disconnected' 에러의 원인과 해결 방법을 설명합니다. 서버 연결이 끊어지는 문제를 해결하기 위한 재연결 로직 구현과 에러 핸들링 방법을 다룹니다."
    },
    {
      url: "https://medium.com/@sosohappy/postman%EC%9C%BC%EB%A1%9C-random%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0-b996ba84b212",
      title: "Postman으로 Random데이터 호출하기",
      description:
        "Postman에서 랜덤 데이터를 생성하고 API 테스트에 활용하는 방법을 설명합니다. Faker 라이브러리를 활용하여 다양한 형태의 더미 데이터를 생성하고, 이를 API 요청에 활용하는 방법을 다룹니다."
    },
    {
      url: "https://medium.com/@sosohappy/typegraphql-%EC%82%AC%EC%9A%A9%EC%8B%9C-fastify-plugin-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-6d22641b968d",
      title: "TypeGraphql 사용시 fastify plugin 사용하기",
      description:
        "TypeGraphQL과 Fastify를 함께 사용할 때 발생하는 플러그인 통합 문제를 해결하는 방법을 설명합니다. Fastify 플러그인 시스템을 활용하여 TypeGraphQL 서버를 효율적으로 구성하고, 타입 안정성을 유지하면서 API를 개발하는 방법을 다룹니다."
    },
    {
      url: "https://medium.com/@sosohappy/avvioerror-error-plugin-did-not-start-in-time-app-default-e44fa4c43313",
      title: "AvvioError [Error]: Plugin did not start in time: 'app_default'",
      description:
        "Fastify 서버에서 발생하는 'Plugin did not start in time' 에러의 원인과 해결 방법을 설명합니다. 플러그인 시작 시간 초과 문제를 해결하기 위한 설정 방법과 타임아웃 값 조정, 비동기 플러그인 처리 방법을 다룹니다."
    },
    {
      url: "https://medium.com/@sosohappy/typegraphql-error-noexplicittypeerror-unable-to-infer-graphql-type-from-typescript-reflection-ecaca8e1c071",
      title:
        "[TypeGraphql Error] NoExplicitTypeError: Unable to infer GraphQL type from TypeScript reflection system.",
      description:
        "TypeGraphQL에서 발생하는 타입 추론 에러의 원인과 해결 방법을 설명합니다. TypeScript의 리플렉션 시스템을 통한 GraphQL 타입 자동 추론이 실패할 때 발생하는 문제를 해결하기 위한 명시적 타입 선언 방법과 데코레이터 사용법을 다룹니다."
    },
    {
      url: "https://medium.com/@sosohappy/unmetgraphqlpeerdependencyerror-3386823e2777",
      title: "UnmetGraphQLPeerDependencyError",
      description:
        "GraphQL 관련 패키지 설치 시 발생하는 peer dependency 에러의 원인과 해결 방법을 설명합니다. 패키지 버전 충돌 문제를 해결하기 위한 의존성 관리 방법과 호환되는 버전 선택, package.json 설정 방법을 다룹니다."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "연락주세요.",
  number: "+82-010.6418.7623",
  email_address: "angelskying@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
