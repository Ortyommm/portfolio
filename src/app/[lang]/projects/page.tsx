import { githubLink } from "@/consts/links";
import { DefaultParams } from "@/types/globalTypes";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import { BottomLink } from "@/app/[lang]/components/BottomLink/BottomLink";
import styles from "./Projects.module.scss";
import { Paragraph } from "@/app/[lang]/components/Typography/Paragraph/Paragraph";
import { ProjectsList } from "@/app/[lang]/projects/components/ProjectsList/ProjectsList";
import { Heading } from "@/app/[lang]/components/Typography/Heading/Heading";
import { IconWrapper } from "@/app/[lang]/components/IconWrapper/IconWrapper";
import EditIcon from "@image/icons/edit.svg";
import WorkIcon from "@image/icons/work.svg";
import { StyledLink } from "@/app/[lang]/components/StyledLink/StyledLink";

export default async function Page({ params }: { params: DefaultParams }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const projectsText = dict.projects;

  const projects = [
    {
      src: "/other/me.png",
      alt: projectsText.thisSite.title,
      git: `${githubLink}/portfolio`,
      description: (
        <>
          <p>{projectsText.thisSite.description}</p>
          <p>{projectsText.thisSite.description2}</p>
        </>
      ),
    },
    {
      src: "/project-images/miem.png",
      alt: projectsText.miem.title,
      description: (
        <>
          <p>{projectsText.miem.description}</p>
          <p>{projectsText.miem.experience}</p>
        </>
      ),
      href: "https://cabinet.miem.hse.ru/",
    },
    {
      src: "/project-images/chatikus.png",
      alt: projectsText.chatikus.title,
      description: (
        <>
          <p>{projectsText.chatikus.description}</p>
          <p>
            {projectsText.chatikus.description2}{" "}
            <StyledLink
              className={styles["description__link"]}
              target={"_blank"}
              href="https://chatikus.ru"
            >
              chatikus.ru
            </StyledLink>
          </p>
        </>
      ),
      href: "https://t.me/chatikus_summary_bot",
    },
    {
      src: "/project-images/nest-url-shortener.png",
      alt: projectsText.urlShortener.title,
      git: `${githubLink}/nest-url-shortener`,
      href: "https://artemdev.com/c/Us",
      description: (
        <>
          <p>{projectsText.urlShortener.description}</p>
          <p>
            <StyledLink
              className={styles["description__link"]}
              href="https://artemdev.com/c/Us"
              target={"_blank"}
            >
              https://artemdev.com/c/Us
            </StyledLink>
          </p>
        </>
      ),
    },
    {
      src: "/project-images/localpass.png",
      alt: "LocalPass",
      git: `${githubLink}/LocalPass`,
      description: (
        <>
          <p>{projectsText.localPass.description}</p>
          <p>{projectsText.localPass.description2}</p>
        </>
      ),
    },
    {
      src: "/project-images/onenilla.png",
      alt: projectsText.onenilla.title,
      git: `${githubLink}/onenilla`,
      href: "https://onenilla.netlify.app",
      description: (
        <>
          <p>{projectsText.onenilla.description}</p>
          <p>{projectsText.onenilla.description2}</p>
        </>
      ),
    },
    {
      src: "/project-images/muziqo.png",
      alt: projectsText.muziqo.title,
      git: `${githubLink}/muziqo`,
      href: "https://youtu.be/F3Ki_5bdsvg?si=8Obz0Vs9Czh1Z4iC",
      description: (
        <>
          <p>{projectsText.muziqo.description}</p>
          <p>{projectsText.muziqo.description2}</p>
        </>
      ),
    },
  ];

  return (
    <>
      <div className={styles.projects}>
        <div className={styles.projects__description}>
          <div>
            <Heading type={"h1"}>{projectsText.title}</Heading>
            <Paragraph>{projectsText.description}</Paragraph>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon_pencil}>
              <IconWrapper Icon={EditIcon} />
            </div>
            <div className={styles.icon_suitcase}>
              <IconWrapper Icon={WorkIcon} />
            </div>
          </div>
        </div>
        <ProjectsList projects={projects} dict={dict} />
      </div>
      <BottomLink to="/contact" title={dict.bottomLinks.contact} lang={lang} />
    </>
  );
}
