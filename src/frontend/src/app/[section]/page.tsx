import { Container, Grid, SimpleGrid, Title, GridCol } from "@mantine/core";

import { NewsCardLarge } from "./_components/NewsCardLarge/NewsCardLarge";
import { NewsCardSmall } from "./_components/NewsCardSmall/NewsCardSmall";

import classes from "./_components/Section.module.css";

// import styles from "./page.module.css";

const mockdata = {
  uuid: "ebd7dace-7c4c-42c5-86a8-686063801c00",
  title:
    "Experts are (literally) standing by to take your call with this service",
  description:
    "Connecting with an expert over the phone might sound old-fashioned but some say it can be the fastest way to solve your problems. JustAnswer connects people wit...",
  keywords: "",
  snippet:
    "\n\nCopied\n\nConnecting with an expert over the phone might sound old-fashioned but some say it can be the fastest way to solve your problems. JustAnswer connects ...",
  url: "https://www.today.com/video/how-justanswer-is-helping-solve-problems-with-on-call-experts-231377477999",
  image_url:
    "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/mpx/2704722219/2025_02/1738939749770_tdy_money_9a_just_answer_250207_1920x1080-oj0b6u.jpg",
  language: "en",
  published_at: "2025-02-07T14:49:16.000000Z",
  source: "nbcnews.com",
  categories: ["business", "general", "tech"],
  relevance_score: null,
  locale: "us",
};

// const categories = ["General", "Science", "Health", "Tech", "Politics"];

function SingleSection(props: { data: CardData; label: string }) {
  //   const PRIMARY_COL_HEIGHT = "400px";
  //   const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  // style={{ paddingTop: "var(--mantine-spacing-xl)" }}
  return (
    <Container my="md" size="xl">
      <Title order={2} className={classes.afterTitle}>
        {props.label}
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
        <NewsCardLarge data={mockdata} />
        <Grid gutter="md">
          <GridCol>
            <NewsCardSmall data={mockdata} />
          </GridCol>
          <GridCol>
            <NewsCardSmall data={mockdata} />
          </GridCol>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default async function Section({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  return <SingleSection key={section} label={section} data={mockdata} />;
}
