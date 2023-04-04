import Hero from "@/Components/Home/Hero";
import Manage from "@/Components/Home/Manage/Manage";
import StartedCard from "@/Components/Home/StartedCard";
import Software from "@/Components/Home/Software";
import Tools from "@/Components/Home/Tools";

export default function Home() {
  return (
    <>
      <Hero />
      <Manage />
      <StartedCard />
      <Tools />
      <Software />
    </>
  )
}
