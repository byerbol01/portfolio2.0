import NotionHeader from "@/components/NotionHeader";
import NotionCover from "@/components/NotionCover";
import NotionProperties from "@/components/NotionProperties";
import NotionProjectsDatabase from "@/components/NotionProjectsDatabase";
import NotionSkillsMatrix from "@/components/NotionSkillsMatrix";
import NotionExperience from "@/components/NotionExperience";
import NotionContact from "@/components/NotionContact";
import NotionFooter from "@/components/NotionFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--notion-bg)] text-[var(--notion-text)] antialiased transition-colors duration-200">
      <NotionHeader />
      <NotionCover />
      <NotionProperties />
      <NotionProjectsDatabase />
      <NotionSkillsMatrix />
      <NotionExperience />
      <NotionContact />
      <NotionFooter />
    </main>
  );
}
