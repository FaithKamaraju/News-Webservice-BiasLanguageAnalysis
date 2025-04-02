import classes from "./NewsCardSmall.module.css";
import { Card, Group, Image, Text, Badge } from "@mantine/core";

type CardData = {
  uuid: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  image_url: string;
  published_at: string;
  source: string;
  categories: string[];
};

export default function NewsCardSmall(props: { data: CardData }) {
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
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image
          src={image_url}
          alt={title}
          height={190}
          w={250}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
        <div className={classes.body}>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {source}
          </Badge>

          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Text size="xs">Elsa Typechecker</Text>
            </Group>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              Feb 6th
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
