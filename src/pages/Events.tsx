import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventCards from "@/sections/EventCards";

const Events = ({ embedded = false }: { embedded?: boolean }) => {
  useEffect(() => {
    if (!embedded) {
      document.title = "Events | REVA RIFT";
      window.scrollTo(0, 0);
    }
  }, [embedded]);

  return (
    <div className="bg-black min-h-screen text-white font-outfit overflow-hidden" data-theme="dark">
      {!embedded && <Navbar />}
      
      <div className={embedded ? "pt-8 pb-12" : "pt-24 pb-12"}>
        <EventCards hideExploreButton={true} />
      </div>

      {!embedded && <Footer />}
    </div>
  );
};

export default Events;
