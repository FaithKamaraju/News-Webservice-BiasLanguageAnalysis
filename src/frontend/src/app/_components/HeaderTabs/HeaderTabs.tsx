"use client";
import { useRouter, usePathname } from "next/navigation";
import { Autocomplete } from "@mantine/core";

import { IconSearch } from "@tabler/icons-react";
import { Container, Group, Tabs } from "@mantine/core";
import classes from "./HeaderTabs.module.css";

import Logo from "../Logo";

const categories = ["General", "Science", "Health", "Tech", "Politics"];

export function HeaderTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const items = categories.map((category) => (
    <Tabs.Tab value={category} key={category}>
      {category}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container fluid style={{ marginBottom: "20px" }}>
        <Group align="center" justify="space-between" style={{ width: "100%" }}>
          <Container style={{ flex: 2 }}>
            <Logo />
          </Container>
          <Container size="md" style={{ flex: 8 }} fluid>
            <Autocomplete
              classNames={{ input: classes.input }}
              leftSection={<IconSearch size={16} stroke={1.5} />}
              placeholder="Search for keywords, topics, or sources"
              // inputSize={"100"}
              data={["React", "Angular", "Vue", "Svelte"]}
              className={classes.search}
            />
          </Container>
          <Container size="md" style={{ flex: 2 }}></Container>
        </Group>
      </Container>

      <Container size="md">
        <Tabs
          value={pathname || "General"}
          onChange={(value) => router.push(`/${value}`)}
          defaultValue="Home"
          variant="outline"
          // visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}
