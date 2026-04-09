import hackathonA1 from "@/assets/images/event-cards/hackathonA1.webp";
import hackathonB1 from "@/assets/images/event-cards/hackathonB1.webp";
import hackathonC1 from "@/assets/images/event-cards/hackathonC1.webp";
import ainex from "@/assets/images/event-cards/ainex.webp";
import katha from "@/assets/images/event-cards/katha.webp";
import hackAlgo from "@/assets/images/event-cards/hack.algo.webp";
import stitchImage from "@/assets/images/event-cards/sticth.webp";
import agenticAiImage from "@/assets/images/event-cards/agentic-ai.webp";

export const eventsData = [
  {
    id: 1,
    name: "AINEX – AI Tech Challenge",
    description: "Hack2skill",
    fullDescription:
      "What if technology blended into the environment instead of demanding attention through screens?\n\nThis track focuses on building ambient AI systems that interact naturally using voice, vision, and real-world sensors. The aim is to create seamless, hands-free experiences where machines understand and respond like humans do — in real time.\n\nParticipants will develop systems that see, listen, and react intelligently, enabling intuitive human-AI interaction without traditional UI.",
    phase: "Phase I",
    type: "Hackathons",
    date: "Mar 21 - Apr 11, 2026",
    time: "Ongoing",
    venue: "TBA",
    registrationLink: "https://vision.hack2skill.com/event/ainex-hack",
    image: ainex,
    timeline: [
      { title: "Registration", timeString: "21 Mar 26, 10:57 AM – 05 Apr 26, 10:57 AM IST", dateRange: "21 Mar – 05 Apr" },
      { title: "Project Submission", timeString: "23 Mar 26, 10:57 AM – 05 Apr 26, 10:57 AM IST", dateRange: "23 Mar – 05 Apr" },
      { title: "Finale", timeString: "10 Apr 26, 09:00 AM – 11 Apr 26, 04:00 PM IST", dateRange: "10 Apr – 11 Apr" },
    ],
  },
  {
    id: 2,
    name: "KATHA Hackathon",
    description: "Hack2skill",
    fullDescription:
      "KATHA – The Story-Driven Hackathon. What if solving real-world problems felt like living a story?\n\nKATHA is a 24-hour immersive, story-driven hackathon where participants step into a narrative world and solve challenges as the story unfolds in real time. Participants experience challenges through specific characters like Ram (Education) or Village Officer Uncle (Agritech).",
    phase: "Phase I",
    type: "Hackathons",
    date: "Mar 23 - Apr 11, 2026",
    time: "24 Hours",
    venue: "TBA",
    registrationLink: "https://vision.hack2skill.com/event/katha-hack",
    image: katha,
    timeline: [
      { title: "Registration", timeString: "23 Mar 26, 10:57 AM – 06 Apr 26, 10:57 AM IST", dateRange: "23 Mar – 06 Apr" },
      { title: "Hack Day", timeString: "10 Apr 26, 09:00 AM – 11 Apr 26, 04:00 PM IST", dateRange: "10 Apr – 11 Apr" },
    ],
  },
  {
    id: 3,
    name: "HACK.ALGO",
    description: "Hack2skill",
    fullDescription:
      "Hack.Algo – REVA Edition is a 24-hour hybrid blockchain hackathon organized by Google Developer Group On Campus REVA University in collaboration with the Algorand Blockchain Club, hosted on Hack2Skill. Designed as a high-intensity innovation sprint, the hackathon brings together top student developers and Web3 builders from across India to create and deploy real-world decentralized applications on the Algorand TestNet.\n\nCentered around Future of Finance and Agentic Commerce, participants work in teams to build production-ready solutions—ranging from DeFi protocols and tokenized asset systems to autonomous, agent-driven transaction frameworks. The hackathon emphasizes end-to-end execution, requiring functional prototypes, smart contract deployment, and scalable system design.",
    phase: "Phase II",
    type: "Hackathons",
    date: "Mar 21 - Apr 11, 2026",
    time: "24 Hours",
    venue: "Hybrid",
    registrationLink: "https://vision.hack2skill.com/event/hack-algo",
    image: hackAlgo,
    timeline: [
      { title: "Registration", timeString: "21 Mar 26, 10:57 AM – 05 Apr 26, 10:57 AM IST", dateRange: "21 Mar – 05 Apr" },
      { title: "Team Formation", timeString: "21 Mar 26, 10:57 AM – 05 Apr 26, 10:57 AM IST", dateRange: "21 Mar – 05 Apr" },
      { title: "Project submission", timeString: "23 Mar 26, 10:57 AM – 05 Apr 26, 10:57 AM IST", dateRange: "23 Mar – 05 Apr" },
      { title: "Screening: Result Announcement", timeString: "06 Apr 26, 10:00 AM – 07 Apr 26, 10:00 AM IST", dateRange: "06 Apr – 07 Apr" },
      { title: "Finale", timeString: "10 Apr 26, 09:00 AM – 11 Apr 26, 04:00 PM IST", dateRange: "10 Apr – 11 Apr" },
    ],
  },
  {
    id: 7,
    name: "Google Stitch Workshop",
    description: "Google Ecosystem Integration",
    fullDescription:
      "Got a million-dollar idea but not sure how to turn it into a real product?\n\nThis workshop explores how modern applications are built by seamlessly connecting powerful tools within the Google ecosystem. Participants will learn how services such as Google Cloud, Firebase, and various APIs can be “stitched” together to transform a raw idea or simple prototype into a fully functional application.\n\nThrough practical insights and guided demonstrations, the session will walk participants through the process of structuring an app, integrating essential services, and building scalable solutions using Google technologies.",
    phase: "Phase II",
    type: "Workshops",
    date: "April 09, 2026",
    time: "10:30 AM - 12:30 PM",
    venue: "CK Prahlad Hall, 7th Floor, Swami Vivekananda Block",
    registrationLink: "https://gdg.community.dev/e/m6a3u7/",
    image: hackathonA1,
    timeline: [
      { title: "Workshop Start", timeString: "09 Apr 26, 10:00 AM", dateRange: "09 Apr" },
      { title: "Live Stitching Lab", timeString: "09 Apr 26, 11:30 AM", dateRange: "09 Apr" },
      { title: "Q&A Session", timeString: "09 Apr 26, 12:30 PM", dateRange: "09 Apr" },
    ],
  },
  {
    id: 8,
    name: "Agentic AI Systems",
    description: "Meet your digital superbrain.",
    fullDescription:
      "Meet your digital superbrain.\n\nThis workshop introduces participants to the world of Generative AI and how it is reshaping the way we build, create, and interact with technology. It provides an accessible, entry-level exploration of how advanced AI models—such as Gemini—process information, generate content, and assist in complex tasks.\n\nParticipants will discover how Generative AI can write code, generate creative content, assist in problem-solving, and enhance productivity across industries. The session will also highlight how developers and innovators can integrate GenAI capabilities into real-world applications.",
    phase: "Phase II",
    type: "Workshops",
    date: "April 09, 2026",
    time: "1:00 PM - 3:00 PM",
    venue: "CK Prahlad Hall, 7th Floor, SVB",
    registrationLink: "https://gdg.community.dev/e/mvy39e/",
    image: hackathonC1,
    timeline: [
      { title: "Intro to LLMs", timeString: "09 Apr 26, 02:00 PM", dateRange: "09 Apr" },
      { title: "Agent Building", timeString: "09 Apr 26, 03:30 PM", dateRange: "09 Apr" },
      { title: "Showcase", timeString: "09 Apr 26, 04:30 PM", dateRange: "09 Apr" },
    ],
  },
];
