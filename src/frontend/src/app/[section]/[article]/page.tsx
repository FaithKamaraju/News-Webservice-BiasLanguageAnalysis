import { Container, Stack, Flex } from "@mantine/core";
import ArticleContent from "./_components/ArticleContent/ArticleContent";
import ArticleHeading from "./_components/ArticleHeading/ArticleHeading";
import AnalysisBar from "./_components/AnalysisBar/AnalysisBar";

import classes from "./page.module.css";

export default async function Article(params: Promise<{ uuid: string }>) {
  const { uuid } = await params;

  return (
    <Stack>
      <ArticleHeading />
      <Flex justify="center" gap="xs" align="flex-start" direction="row">
        <Container className={classes.articleContainer}>
          <ArticleContent />
        </Container>
        <Container className={classes.analysisContainer}>
          <AnalysisBar />
        </Container>
      </Flex>
    </Stack>
  );
}
