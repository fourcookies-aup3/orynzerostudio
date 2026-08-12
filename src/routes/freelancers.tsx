import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SectionHeader";
import { ApplicationForm } from "@/components/ApplicationForm";

export const Route = createFileRoute("/freelancers")({
  head: () => ({
    meta: [
      { title: "Apply as a Freelancer — ORYN ZERO" },
      {
        name: "description",
        content:
          "Apply to join the ORYN ZERO high-speed FPV & cinematic production roster. Register your portfolio, equipment, and CV.",
      },
    ],
  }),
  component: FreelancerApplicationPage,
});

function FreelancerApplicationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        eyebrow="JOIN OUR CREATIVE NETWORK"
        title="Sign Up as a Freelancer"
        intro="We are constantly seeking world-class FPV pilots, DPs, colorists, sound designers, and directors. Submit your application below."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <ApplicationForm type="freelancer" />
        </div>
      </section>
    </div>
  );
}
