import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/CameronGuthrie/QA-Obsidian",
      Quartz: "https://quartz.jzhao.xyz",
      Obsidian: "https://obsidian.md"
    },
  }),
}



// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph({
      localGraph: {
        repelForce: 0.85, // how much nodes should repel each other
        depth: -1, // how many hops of notes to display
        scale: 0.9, // default view scale
        showTags: false, // whether to show tags in the graph
        linkDistance: 50, // how long should the links be by default?
        fontSize: 0.4, // what size should the node labels be?
      },
      globalGraph: {
        repelForce: 0.85, // how much nodes should repel each other
        showTags: false, // whether to show tags in the graph
        linkDistance: 50, // how long should the links be by default?
        fontSize: 0.4, // what size should the node labels be?
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
