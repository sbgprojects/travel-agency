import Hero from "@/components/sections/Hero";
import Destinations from "@/components/sections/Destinations";
import GroupTours from "@/components/sections/GroupTours";
import EmiPlan from "@/components/sections/EmiPlan";
import WhyYeto from "@/components/sections/WhyYeto";
import YetoExperience from "@/components/sections/YetoExperience";
import Reviews from "@/components/sections/Reviews";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <GroupTours />
      <EmiPlan />
      <WhyYeto />
      <YetoExperience />
      <Reviews />
      <FinalCta />
    </>
  );
}
