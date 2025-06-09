import { Container } from "@mantine/core";
import { MarkdownRenderer } from "../MarkdownRenderer/MarkdownRenderer";

import classes from "./ArticleHeading.module.css";

interface ArticleHeadingProps {
  title?: string;
  subtitle?: string;
  author?: string;
  publishDate?: string;
}

export default async function ArticleHeading({
  title = "Breaking News: Major Development in Technology",
  subtitle = "Experts weigh in on the latest industry trends and their potential impact",
  author = "Jane Smith",
  publishDate = "June 7, 2025",
}: ArticleHeadingProps) {
  const headingMarkdown = `
# ${title}

## ${subtitle}

**By:** ${author} | **Published:** ${publishDate}

---
`;

  return (
    <Container className={classes.headingContainer} fluid>
      <MarkdownRenderer content={headingMarkdown} />
    </Container>
  );
}
