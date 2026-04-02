import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

// Image imports
import workshop1 from "@/assets/images/pre-schedule-showcase/workshop-1.webp";
import workshop2 from "@/assets/images/pre-schedule-showcase/workshop-2.webp";
import workshop3 from "@/assets/images/pre-schedule-showcase/workshop-3.webp";

const WorkshopItem = ({ 
  title, 
  description, 
  image, 
  isReversed = false 
}: { 
  title: string; 
  description: string; 
  image: string;
  isReversed?: boolean;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}>
      <div className={`${isReversed ? "md:order-2" : "md:order-1"} space-y-4`}>
        <div className="aspect-[16/9] bg-[#f8f8f8] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className={`${isReversed ? "md:order-1 md:text-left" : "md:order-2 md:text-right"} space-y-4`}>
        <h3 style={{
          fontFamily: "'BL Melody', sans-serif",
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '100%',
          letterSpacing: '0%',
          opacity: 1
        }}>
          {title}
        </h3>
        <p className={`text-base md:text-lg text-muted-foreground leading-relaxed max-w-md ${!isReversed ? "ml-auto" : ""}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Workshops({ embedded = false }: { embedded?: boolean }) {
  return (
    <div className="min-h-screen bg-white text-black">
      {!embedded && <Navbar />}
      
      <main className={embedded ? "pt-16 pb-20" : "pt-32 pb-40"}>
        <div className="container max-w-6xl px-4">
          {/* Header */}
          <div className="text-center mb-24 flex flex-col items-center">
            <h1 className="mx-auto flex items-center justify-center text-center" style={{ 
              width: '258px',
              height: '58px',
              opacity: 1,
              fontFamily: "'BL Melody', sans-serif",
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              <span className="text-[#0052FF]">Work</span>shops
            </h1>
            <p className="text-xl text-gray-600">Master the Craft of Innovation</p>
          </div>

          {/* Staggered Content */}
          <div className="space-y-32 md:space-y-48">
            <WorkshopItem 
              title="Google Stitch: From Idea to Reality"
              description="&quot;Got a million dollar idea but don't know where to start?&quot; This workshop is all about the &quot;glue&quot; that holds modern apps together. It focuses on how different Google services (like Cloud, Firebase, and APIs) &quot;stitch&quot; together to turn a rough sketch into a working digital product."
              image={workshop1}
            />

            <WorkshopItem 
              title="Google's GenAI"
              description="&quot;Meet your digital super brain&quot; An entry-level deep dive into Generative AI. It explains how models like Gemini think, create, and assist us in daily tasks - from writing code to generating art."
              image={workshop1}
              isReversed
            />

            <WorkshopItem 
              title="Game Design"
              description="&quot;Don't just play games, make them!&quot; Explore how to make games using pygame and Unreal Engine 5. Join us as we pull back the curtain on game design. Whether you're a total beginner or a casual player, you'll learn the secrets to building worlds and characters that players will love."
              image={workshop1}
            />

            <WorkshopItem 
              title="Flagship AI models"
              description="&quot;Learn about the most intelligent superbrains in the world&quot; From Google Search to self-driving cars, flagship AI models are the engines running the world. We're demystifying the &quot;Big Tech&quot; mystery and showing you how these massive AI models work in plain English. Come find out how the smartest tech on earth thinks!"
              image={workshop1}
              isReversed
            />

            <WorkshopItem 
              title="AWS Bedrock"
              description="&quot;The ultimate generative AI foundation toolkit&quot; Explore how AWS Bedrock provides seamless access to industry-leading AI models. We're breaking down how you can build fully managed generative AI solutions, create custom enterprise apps, and scale them securely without managing the underlying infrastructure."
              image={workshop1}
            />
          </div>
        </div>
      </main>

      {!embedded && <Footer />}
    </div>
  );
}

