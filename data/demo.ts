import { Page } from "@/types/landing";

export const page: Page = {
  template: "salient",
  theme: "light",
  header: {
    brand: {
      title: "Memora",
      avatar: {
        src: "/imgs/logo.png",
        title: "Memora",
      },
      url: "/",
    },
    nav: {
      items: [
        {
          title: "Blog",
          url: "https://www.crazykids.tech",
          target: "_blank",
        },
        {
          title: "GitHub",
          url: "https://github.com/duan0120",
          target: "_blank",
        },
      ],
    },
    buttons: [],
  },
  hero: {
    title: "Memora: Your Secure Read It Later App for iOS & macOS",
    description:
      "With Memora, effortlessly save articles, notes, and information from anywhere, and revisit them at your convenience. Perfect for busy professionals and avid readers.",
    image: {
      src: "/imgs/memora_home.png",
    },
    image_position: "right",
    text_align: "left",
    buttons: [
      {
        title: "Start for free",
        url: "https://apps.apple.com/us/app/memora-read-it-later/id6739724968",
        target: "_blank",
      },
    ],
    show_happy_users: true,
    show_proof: false,
  },
  section: {
    items: [
      {
        name: "what",
        title: "What is Memora",
        description:
          "Memora is a thoughtfully designed “Read It Later & Notes” app, created for busy individuals like you to efficiently collect, organize, and review all the content you find interesting. Whether it’s articles, web pages, or daily notes, Memora allows you to save and manage important information anytime, anywhere, ensuring nothing gets lost.",
        image: {
          src: "/imgs/iphone_reader.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "Get Started Instantly",
            description:
              "No registration required—just start saving your favorite content right away with an intuitive and easy-to-use interface.",
          },
          {
            title: "Local First, Privacy First",
            description:
              "Memora prioritizes privacy by storing all data locally on your device, with the option to sync your data to iCloud for multi-device support. Your privacy is always our top concern, whether you’re reading or saving content.",
          },
          {
            title: "Offline Reading Anytime, Anywhere",
            description:
              "No internet? No problem. Memora allows you to access saved content offline, ensuring your reading experience is seamless, regardless of your connection status.",
          },
          {
            title: "Web Page Copies to Avoid 404s",
            description:
              "Don’t worry about content disappearing or links breaking. Memora saves web pages as local copies, so you can view them anytime.",
          },
          {
            title: "Powerful Full-Text Search, Offline Support",
            description:
              "With a quick and efficient full-text search feature, you can easily find any saved article or note—even without internet access.",
          },
          {
            title: "Folders and Tags for Perfect Organization",
            description:
              "Use folders and tags to easily organize your saved content. You can also add detailed notes to each item, making content management more efficient.",
          },
        ],
      },
      {
        name: "why",
        title: "Collect links from anywhere",
        description:
          "Add links through Copy & Paste, the Action Sheet. All platforms are supported.",
        image: {
          src: "/imgs/section1.png",
        },
        image_position: "right",
        text_align: "center",
        items: [],
      },
    ],
  },
  feature: {
    title: "Key Features of Memora",
    description:
      "Permanently Save Your Ideas and Knowledge",
    items: [
      {
        title: "Save and Read Web Pages Offline",
        description:
          "Memora is a powerful read it later app for iOS and macOS, designed to help you save web pages for offline reading. Download articles and websites to your device to avoid 404 errors and access content anytime, anywhere.",
        avatar: {
          src: "/imgs/icons/1.svg",
        },
      },
      {
        title: "Privacy-First with Local Storage",
        description:
          "Your data stays safe with Memora. We prioritize privacy by storing data locally on your device and syncing securely via iCloud. No user data is stored on our servers, ensuring maximum security.",
        avatar: {
          src: "/imgs/icons/2.svg",
        },
      },
      {
        title: "Distraction-Free Reading Mode",
        description:
          "Enjoy a clean, distraction-free reading mode that removes ads and clutter. Future updates will include note-taking and full-text search, making Memora the ultimate reading companion.",
        avatar: {
          src: "/imgs/icons/3.svg",
        },
      },
      {
        title: "Organize with Tags and Smart Search",
        description:
          "Bookmark and archive web pages effortlessly. Organize URLs with custom tags and find them quickly using multiple search methods, including tag-based and keyword searches.",
        avatar: {
          src: "/imgs/icons/4.svg",
        },
      },
    ],
  },
  cta: {
    title: "Get Started Today",
    description: "Download Memora, the best read it later app for iOS and macOS, and take control of your reading list with privacy and ease.",
    buttons: [
      {
        title: "Try Now",
        url: "https://apps.apple.com/us/app/memora-read-it-later/id6739724968",
        target: "_blank",
      },
    ],
  },
  footer: {
    brand: {
      title: "Memora",
      description:
        "Memora is a thoughtfully designed “Read It Later & Notes” app, created for busy individuals like you to efficiently collect, organize, and review all the content you find interesting.",
      avatar: {
        src: "/imgs/logo.png",
        title: "Memora",
      },
      url: "https://www.memora.top",
    },
    badge_disabled: false,
    copyright: "© 2025 • Memora All rights reserved.",
    social: {
      items: [
        {
          title: "Twitter",
          url: "https://x.com/alexander_duan",
          target: "_blank",
        },
        {
          title: "Telegram",
          url: "https://t.me/duanhjlt",
          target: "_blank",
        },
        {
          title: "Email",
          url: "mailto:support@memora.top",
          target: "_self",
        },
      ],
    },
    nav: {
      items: [
        {
          title: "Products",
          children: [
            {
              title: "Memora - Read it late",
              url: "https://apps.apple.com/us/app/memora-read-it-later/id6739724968",
              target: "_blank",
            },
          ],
        },
        {
          title: "Friends",
          children: [
            {
              title: "Black Screen",
              url: "https://www.blackscreennow.space",
              target: "_blank",
            },
            {
              title: "It is friday?",
              url: "https://itisfriday.crazykids.tech",
              target: "_blank",
            },
            {
              title: "CrazyKids",
              url: "https://www.crazykids.tech",
              target: "_blank",
            },
          ],
        },
        {
          title: "Services",
          children: [
            {
              title: "Privacy Policy",
              url: "/privacy",
            },
          ],
        },
      ],
    },
  },
};
