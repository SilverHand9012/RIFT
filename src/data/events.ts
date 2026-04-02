import hackathonA1 from "@/assets/images/event-cards/hackathonA1.webp";
import hackathonB1 from "@/assets/images/event-cards/hackathonB1.webp";
import hackathonC1 from "@/assets/images/event-cards/hackathonC1.webp";

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
    image: hackathonA1,
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
    image: hackathonB1,
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
    id: 4,
    name: "React Performance Tuning",
    description: "Short Description",
    fullDescription:
      "Join us for an exciting deep dive into the latest technologies. This event will cover everything from foundational concepts to advanced practical applications. Perfect for all skill levels wanting to get hands-on experience.",
    phase: "Phase I",
    type: "Workshops",
    date: "October 20, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium",
    registrationLink: "#",
    image: hackathonA1,
    timeline: [
      { title: "Workshop Start", timeString: "20 Oct 26, 10:00 AM", dateRange: "20 Oct" },
      { title: "Practical Lab", timeString: "20 Oct 26, 12:00 PM", dateRange: "20 Oct" },
      { title: "Conclusion", timeString: "20 Oct 26, 04:00 PM", dateRange: "20 Oct" },
    ],
  },
  {
    id: 5,
    name: "Global Web3 Hackathon",
    description: "Short Description",
    fullDescription:
      "A 48-hour coding marathon where innovators and creators build bold prototypes, learn fast, and ship ideas that strengthen our digital future. Work with mentors, meet co-founders, and win amazing prizes.",
    phase: "Phase II",
    type: "Hackathons",
    date: "November 10-12, 2026",
    time: "48 Hours",
    venue: "Innovation Center",
    registrationLink: "#",
    image: hackathonB1,
    timeline: [
      { title: "Check-in", timeString: "10 Nov 26, 08:00 AM", dateRange: "10 Nov" },
      { title: "Opening", timeString: "10 Nov 26, 10:00 AM", dateRange: "10 Nov" },
      { title: "Finale", timeString: "12 Nov 26, 04:00 PM", dateRange: "12 Nov" },
    ],
  },
  {
    id: 6,
    name: "AI & Machine Learning",
    description: "Short Description",
    fullDescription:
      "An exclusive masterclass by industry experts on building at scale. Learn cutting edge technologies, understand architecture design patterns, and get ready for the ultimate developer experience.",
    phase: "Phase III",
    type: "Workshops",
    date: "December 5, 2026",
    time: "2:00 PM - 6:00 PM",
    venue: "Virtual Event",
    registrationLink: "#",
    image: hackathonC1,
    timeline: [
      { title: "Intro to ML", timeString: "05 Dec 26, 02:00 PM", dateRange: "05 Dec" },
      { title: "Deep Dive", timeString: "05 Dec 26, 04:00 PM", dateRange: "05 Dec" },
      { title: "End Session", timeString: "05 Dec 26, 06:00 PM", dateRange: "05 Dec" },
    ],
  },
];
