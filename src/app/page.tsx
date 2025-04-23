import { PageLoadAnimationWrapper } from "@/components/page-load-animation";
import { ProjectContainer, ProjectItem } from "@/components/project";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Home() {
  return (
    <PageLoadAnimationWrapper className="flex flex-col mt-16 md:mt-24 lg:mt-32 mb-32 gap-y-10 md:gap-y-12">
      <section>
        <h1 className="font-instrument-serif text-3xl md:text-4xl">
          <span>Mohit Raj</span>
          <br />
          <Tooltip>
            <TooltipTrigger tabIndex={0}>
              <span className="text-muted-foreground contrast-more:text-foreground cursor-help">
                Web Developer & Designer
              </span>
            </TooltipTrigger>
            <TooltipContent aria-hidden="true">
              <p className="font-sans">
                Blurring the boundaries between design{" "}
                <span className="font-ovo">&</span> development
              </p>
            </TooltipContent>
          </Tooltip>
        </h1>
      </section>
      <section>
        <p>
          <em>Crafting interfaces</em> with meticulous attention to detail.
          Diving deep into technical intricacies. Currently pushing pixels at{" "}
          <Link href="https://next-motion.de" target="_blank">
            next.motion
          </Link>{" "}
        </p>
      </section>
      <section className="flex flex-col gap-y-6">
        <h2 id="projects">Projects</h2>
        <ProjectContainer aria-labelledby="projects">
          <ProjectItem
            href="https://developer-docs-gallery.xyz"
            target="_blank"
            name="Developers Docs Gallery"
            position="Founder"
            summary="Documentation gallery for open-source projects"
          />
          <ProjectItem
            href="https://vercel-internship.vercel.app"
            target="_blank"
            name="Internship Card"
            position="Developer"
            summary="A simple and elegant internship card"
          />
          <ProjectItem
            href="https://aiblock.netlify.app"
            target="_blank"
            name="Ai Block"
            position="Founder"
            summary="Core Components For Ai Apps"
          />
          <ProjectItem
            href="#"
            target="_blank"
            name="Roblox Model Renderer "
            position="Creator"
            summary="3D model renderer for Roblox"
          />
          <ProjectItem
            href="#"
            target="_blank"
            name="p"
            position="Creator"
            summary="Tasteful project management"
          />
          <ProjectItem
            href="https://create.t3.gg"
            target="_blank"
            name="Create T3 App"
            position="Contributor"
            summary="Popular full-stack project boilerplate"
          />
        </ProjectContainer>
      </section>
      <section className="flex flex-col gap-y-6">
        <h2>Now</h2>
        <p>
          Developing skill through doing, guiltlessly exploring passion and
          interests, imbuing quality. Mindful that <em>everything</em> around me
          is someone’s life work.
          <span aria-hidden="true" className="select-none">
            <br />
            <br />
          </span>
          All I want to do is build websites. Typography, motion design,
          copywriting, performance—the web is an endless medium of opportunity
          and creativity of which I’ve only scratched the surface.
        </p>
      </section>
      <section className="flex flex-col gap-y-6">
        <h2>Get in touch</h2>
        <p>
          Reach me at{" "}
          <Link href="https://x.com/mohitraj2546" target="_blank">
            @Mohit
          </Link>{" "}
          or email me at{" "}
          <Link href="mailto:mohitraj2546@gmail.com" target="_blank">
            mohitraj2546@gmail.com
          </Link>
        </p>
      </section>
    </PageLoadAnimationWrapper>
  );
}