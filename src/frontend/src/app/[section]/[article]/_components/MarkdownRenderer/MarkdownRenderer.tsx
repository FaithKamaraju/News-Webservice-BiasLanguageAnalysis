import ReactMarkdown from "react-markdown";
import classes from "./MarkdownRenderer.module.css";

const defaultContent = `
# Main Article

This is the primary content with more detailed information.

## Important Section

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eu nisl.
`;

interface MarkdownRendererProps {
  content?: string;
}

export async function MarkdownRenderer({
  content = defaultContent,
}: MarkdownRendererProps) {
  return (
    <div className={classes.markdownContainer}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
