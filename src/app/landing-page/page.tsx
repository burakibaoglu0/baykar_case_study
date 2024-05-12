import { HomepageTopArea } from "@/views/homepage-top-area";
import { TheyLoveUs, TheBestOfBest, WhyJoinUs, GrowYourCollection, ShoesCollected } from "@/views/widgets";

export default function LandingPage() {
  return (
    <main>
      <HomepageTopArea />
      <TheBestOfBest />
      <WhyJoinUs />
      <TheyLoveUs />
      <GrowYourCollection />
      <ShoesCollected />
    </main>
  );
}
