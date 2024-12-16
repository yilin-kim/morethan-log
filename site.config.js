const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Irin(이린)",
    image: "/avatar.webp", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Service Planner",
    bio: "Value is all that matters.",
    email: "irenek91@naver.com",
    github: "yilin-kim",
    instagram: "gimme_moment",
    linkedin: "yilin-kim",
  },
  projects: [
    {
      name: "고려대학교 멋쟁이사자처럼 9기",
      href: "https://next-ku.com",
    },
    {
      name: "초기 창업 팀 아일로(hapl) 서비스 기획",
      href: "https://hapl.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "irin-way",
    description: "welcome to irin-way!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://irin-way.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
