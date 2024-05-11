import { TheyLoveUs, TheBestOfBest, WhyJoinUs, GrowYourCollection } from "@/views/widgets";
import { HomepageTopArea } from "@/views/homepage-top-area";

export default function LandingPage() {
  return (
    <main>
      <HomepageTopArea />
      <TheBestOfBest />
      <WhyJoinUs />
      <TheyLoveUs />
      <GrowYourCollection />
    </main>
  );
}
