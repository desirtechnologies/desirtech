import Hero from "@components/Hero";
import SimpleForm from "@components/SimpleForm";
import StatsGrid from "@components/StatsGrid";
import SummarySection from "@components/SummarySection";

export default async function Home() {
  return (
    <>
      <Hero />
      <StatsGrid />
      <SimpleForm />
      <SummarySection />
    </>
  );
}

