import Link from "next/link";
import { Badge, Card, Group, Image, Text, CardSection } from "@mantine/core";
import classes from "./NewsCardLarge.module.css";

export function NewsCardLarge(props: { data: CardData }) {
  const {
    uuid,
    title,
    description,
    snippet,
    url,
    image_url,
    published_at,
    source,
    categories,
  } = props.data;

  return (
    <Link href={`/articles/${uuid}`}>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <CardSection>
          <Image
            src={image_url}
            alt={title}
            height={180}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </CardSection>

        <CardSection className={classes.section} mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {title}
            </Text>
            <Badge size="sm" variant="light">
              {source}
            </Badge>
          </Group>
          <Text fz="sm" mt="xs">
            {description}
          </Text>
        </CardSection>

        <CardSection className={classes.section}>
          <Text mt="md" className={classes.label} c="dimmed">
            Categories this article belongs to
          </Text>
          <Group gap={7} mt={5}>
            {categories.map((category) => (
              <Badge key={category} size="sm" variant="outline">
                {category}
              </Badge>
            ))}
          </Group>
        </CardSection>
      </Card>
    </Link>
  );
}
