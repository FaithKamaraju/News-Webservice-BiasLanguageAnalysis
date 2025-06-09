import { Container } from "@mantine/core";
import { MarkdownRenderer } from "../MarkdownRenderer/MarkdownRenderer";

import classes from "./ArticleContent.module.css";

interface ArticleContentProps {
  content?: string;
}

export default async function ArticleContent({ content }: ArticleContentProps) {
  const defaultArticleContent = `
## Introduction

This is a comprehensive article that provides detailed insights into the current topic. Our investigation reveals several key findings that will shape the industry moving forward.

## Key Findings

### First Major Point

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

- **Critical insight**: Data shows a 35% increase in adoption
- **Market impact**: Industry leaders are adapting their strategies
- **Future implications**: This trend is expected to continue through 2026

### Second Important Discovery

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

> "This development represents a significant shift in how we approach the problem," says leading expert Dr. Sarah Johnson.

### Technical Analysis

The technical aspects of this development include:

1. **Performance improvements** of up to 40%
2. **Cost reduction** through optimized processes
3. **Enhanced security** with new protocols

## Impact Assessment

The broader implications of these findings extend beyond the immediate industry:

- Economic effects on related sectors
- Regulatory considerations for policymakers
- Long-term sustainability concerns

## Conclusion

As we move forward, these developments will likely reshape the landscape. Organizations that adapt quickly will be best positioned for success in the evolving market conditions.

The evidence clearly indicates that stakeholders must prepare for significant changes ahead.
`;

  return (
    <Container className={classes.contentContainer}>
      <MarkdownRenderer content={content || defaultArticleContent} />
    </Container>
  );
}
