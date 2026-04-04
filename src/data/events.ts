import hackathonA1 from "@/assets/images/event-cards/hackathonA1.webp";
import hackathonB1 from "@/assets/images/event-cards/hackathonB1.webp";
import hackathonC1 from "@/assets/images/event-cards/hackathonC1.webp";
import ainex from "@/assets/images/event-cards/ainex.webp";
import katha from "@/assets/images/event-cards/katha.webp";

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
    image: hackathonC1,
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
    description: "Cloud Integration Masterclass",
    fullDescription:
      "Explore the power of Google Stitch in this hands-on workshop designed to teach you how to weave together various Google Cloud services into a seamless, automated workflow. Learn about service account management, cross-platform integration, and secure data stitching techniques for modern enterprise applications.",
    phase: "Phase II",
    type: "Workshops",
    date: "April 09, 2026",
    time: "10:00 AM - 01:00 PM",
    venue: "TBA",
    registrationLink: "#",
    image: hackathonA1,
    timeline: [
      { title: "Workshop Start", timeString: "09 Apr 26, 10:00 AM", dateRange: "09 Apr" },
      { title: "Live Stitching Lab", timeString: "09 Apr 26, 11:30 AM", dateRange: "09 Apr" },
      { title: "Q&A Session", timeString: "09 Apr 26, 12:30 PM", dateRange: "09 Apr" },
    ],
  },
  {
    id: 8,
    name: "Generative AI (GenAI)",
    description: "Building with LLMs",
    fullDescription:
      "Dive into the world of Generative AI. This workshop covers the fundamentals of Large Language Models (LLMs), prompt engineering, and building practical AI agents using state-of-the-art frameworks. Get hands-on experience deploying your first RAG-based application and understand the future of agentic workflows.",
    phase: "Phase II",
    type: "Workshops",
    date: "April 09, 2026",
    time: "02:00 PM - 05:00 PM",
    venue: "TBA",
    registrationLink: "#",
    image: hackathonC1,
    timeline: [
      { title: "Intro to LLMs", timeString: "09 Apr 26, 02:00 PM", dateRange: "09 Apr" },
      { title: "Agent Building", timeString: "09 Apr 26, 03:30 PM", dateRange: "09 Apr" },
      { title: "Showcase", timeString: "09 Apr 26, 04:30 PM", dateRange: "09 Apr" },
    ],
  },
  {
    id: 9,
    name: "Drone Technology",
    description: "Hardware & Flight Control",
    fullDescription:
      "A comprehensive introduction to drone hardware, flight controllers, and autonomous navigation. In this session, you will learn about the mechanics of quadcopters, PID tuning for stable flight, and how to program simple flight paths using open-source drone firmware. Perfect for hardware enthusiasts and future roboticists.",
    phase: "Phase II",
    type: "Workshops",
    date: "April 09, 2026",
    time: "11:00 AM - 03:00 PM",
    venue: "TBA",
    registrationLink: "#",
    image: hackathonB1,
    timeline: [
      { title: "Hardware Basics", timeString: "09 Apr 26, 11:00 AM", dateRange: "09 Apr" },
      { title: "Flight Simulation", timeString: "09 Apr 26, 01:00 PM", dateRange: "09 Apr" },
      { title: "Open Discussion", timeString: "09 Apr 26, 02:30 PM", dateRange: "09 Apr" },
    ],
  },
];
