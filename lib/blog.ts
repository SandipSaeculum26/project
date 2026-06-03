// Blog content lives here as structured blocks so the detail page can render
// it consistently. Add a new entry to `blogPosts` to publish a new article.

export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lang?: string; code: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date, e.g. "2026-05-12"
  readTime: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "breaking-the-monolith-microservices",
    title: "Breaking the Monolith: A Frontend Engineer's Guide to Microservices",
    excerpt:
      "Why teams move from a single codebase to independently deployable services — and what changes for the people building the UI on top of them.",
    category: "Architecture",
    date: "2026-05-18",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "Microservices split an application into small, independently deployable services that each own one slice of the business. Instead of one large codebase that ships as a unit, you get many focused services that talk to each other over the network. For a frontend engineer this sounds like a backend concern — but the way services are sliced has a direct impact on how the UI fetches data and how fast features ship.",
      },
      {
        type: "heading",
        text: "Why split a monolith at all?",
      },
      {
        type: "paragraph",
        text: "A monolith is the right choice when you are starting out — everything is in one place, deploys are simple, and there is no network boundary to reason about. The pain shows up as the team and the product grow: a one-line change forces the entire app to be rebuilt and redeployed, and one slow module can drag down the whole system.",
      },
      {
        type: "list",
        items: [
          "Independent deploys — ship the payments service without touching search.",
          "Fault isolation — if recommendations go down, checkout still works.",
          "Focused scaling — scale only the services under load, not the whole app.",
          "Team autonomy — small teams own a service end to end.",
        ],
      },
      {
        type: "heading",
        text: "What changes for the frontend",
      },
      {
        type: "paragraph",
        text: "When the backend is many services, the UI rarely talks to all of them directly. An API gateway or a Backend-for-Frontend (BFF) sits in front, aggregates the calls, and returns exactly the shape the screen needs. This keeps the client simple and avoids a waterfall of requests on page load.",
      },
      {
        type: "code",
        lang: "ts",
        code: `// A BFF endpoint composes several services into one UI-friendly payload\nasync function getDashboard(userId: string) {\n  const [profile, orders, recommendations] = await Promise.all([\n    profileService.get(userId),\n    orderService.recent(userId),\n    recommendationService.forUser(userId),\n  ]);\n\n  return { profile, orders, recommendations };\n}`,
      },
      {
        type: "heading",
        text: "The trade-offs to respect",
      },
      {
        type: "paragraph",
        text: "Microservices are not free. You trade in-process function calls for network hops, which means latency, partial failures, and eventual consistency become everyday realities. The UI has to be designed for it: loading and error states per section, optimistic updates, and retries. A good rule of thumb — don't split a service until the boundary is obvious and the pain of the monolith is real.",
      },
      {
        type: "paragraph",
        text: "Done well, microservices let a product scale with its team. Done too early, they add distributed-systems complexity to a problem that a single codebase would have solved. Start with a clean modular monolith, and extract services only when a seam clearly earns its own deploy.",
      },
    ],
  },
  {
    slug: "optimizing-react-performance-at-scale",
    title: "Optimizing React Performance at Scale",
    excerpt:
      "Practical techniques to keep a growing React app fast — from cutting unnecessary re-renders to trimming the JavaScript you ship.",
    category: "React",
    date: "2026-04-29",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "React is fast by default, but as an app grows, small inefficiencies compound. The goal of performance work is not to memoize everything — it's to find the few places where wasted work is actually hurting users, and fix those.",
      },
      {
        type: "heading",
        text: "Measure before you optimize",
      },
      {
        type: "paragraph",
        text: "Open the React DevTools Profiler and record an interaction that feels slow. It shows which components rendered, how long they took, and why. Optimizing without a profile is guessing — and you usually guess wrong.",
      },
      {
        type: "heading",
        text: "Cut unnecessary re-renders",
      },
      {
        type: "list",
        items: [
          "Lift state only as high as it needs to go — state at the top re-renders everything below it.",
          "Memoize expensive child components with React.memo when props are stable.",
          "Wrap callbacks in useCallback and derived values in useMemo only when they feed a memoized child or an effect dependency.",
          "Prefer composition (children props) so a frequently-updating parent doesn't re-render static subtrees.",
        ],
      },
      {
        type: "code",
        lang: "tsx",
        code: `const Row = React.memo(function Row({ item, onSelect }: RowProps) {\n  return <li onClick={() => onSelect(item.id)}>{item.name}</li>;\n});\n\nfunction List({ items }: { items: Item[] }) {\n  // stable identity so React.memo on <Row> actually pays off\n  const handleSelect = useCallback((id: string) => select(id), []);\n  return items.map((item) => (\n    <Row key={item.id} item={item} onSelect={handleSelect} />\n  ));\n}`,
      },
      {
        type: "heading",
        text: "Ship less JavaScript",
      },
      {
        type: "paragraph",
        text: "The fastest code is the code you never send. Code-split routes and heavy components with dynamic imports, lazy-load below-the-fold content, and virtualize long lists so you only render what's on screen. On the network side, serve images in modern formats and let the framework handle sizing.",
      },
      {
        type: "paragraph",
        text: "Performance is a habit, not a one-time pass. Profile real interactions, fix the biggest offender, and measure again. A handful of targeted changes almost always beats sprinkling memoization across the whole codebase.",
      },
    ],
  },
  {
    slug: "taming-state-with-redux-toolkit",
    title: "Taming Complex State with Redux Toolkit",
    excerpt:
      "How Redux Toolkit removes the boilerplate that gave Redux a bad name, and when reaching for global state is actually the right call.",
    category: "State Management",
    date: "2026-04-10",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Classic Redux earned a reputation for ceremony: action types, action creators, switch-statement reducers, and immutable updates by hand. Redux Toolkit (RTK) is the official, opinionated way to write Redux that collapses most of that boilerplate into a single createSlice call.",
      },
      {
        type: "heading",
        text: "A slice in one place",
      },
      {
        type: "paragraph",
        text: "createSlice generates the action creators and the reducer for you, and it uses Immer under the hood so you can write what looks like mutating code while staying fully immutable.",
      },
      {
        type: "code",
        lang: "ts",
        code: `const cartSlice = createSlice({\n  name: "cart",\n  initialState: { items: [] as Item[] },\n  reducers: {\n    added(state, action: PayloadAction<Item>) {\n      state.items.push(action.payload); // Immer makes this safe\n    },\n    removed(state, action: PayloadAction<string>) {\n      state.items = state.items.filter((i) => i.id !== action.payload);\n    },\n  },\n});\n\nexport const { added, removed } = cartSlice.actions;`,
      },
      {
        type: "heading",
        text: "Do you even need global state?",
      },
      {
        type: "paragraph",
        text: "Not every value belongs in a store. Reach for global state only when data is shared across distant parts of the tree or needs to survive navigation. For server data — lists, details, anything fetched — a data-fetching layer like RTK Query or React Query is usually a better fit than hand-rolled reducers.",
      },
      {
        type: "list",
        items: [
          "Local UI state (open/closed, input values) → useState.",
          "Shared client state (theme, cart, auth) → Redux Toolkit slice.",
          "Server cache (API data) → RTK Query / React Query.",
        ],
      },
      {
        type: "paragraph",
        text: "Used this way, Redux Toolkit stays lean: a small set of slices for genuinely global client state, and a caching layer for everything that comes from the server.",
      },
    ],
  },
  {
    slug: "scaling-frontends-with-monorepos",
    title: "Scaling Frontend Teams with Monorepos",
    excerpt:
      "What a monorepo actually buys you — shared design tokens, atomic cross-package changes, and consistent tooling — without the chaos.",
    category: "Architecture",
    date: "2026-03-22",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "A monorepo is a single repository that holds multiple projects — apps, shared UI libraries, utilities, and config — that are versioned and built together. It is not the same as a monolith: the code stays modular, it just lives in one place with shared tooling.",
      },
      {
        type: "heading",
        text: "Why teams adopt one",
      },
      {
        type: "list",
        items: [
          "Shared code without publishing — import a design-system package directly, no npm release cycle.",
          "Atomic changes — update a shared button and every app that uses it in one commit and one PR.",
          "Consistent tooling — one ESLint, TypeScript, and test config for the whole org.",
          "Easier refactors — a single search-and-replace can span every package.",
        ],
      },
      {
        type: "heading",
        text: "A typical layout",
      },
      {
        type: "code",
        lang: "txt",
        code: `repo/\n├─ apps/\n│  ├─ web/          # main customer app\n│  └─ admin/        # internal dashboard\n├─ packages/\n│  ├─ ui/           # shared components + design tokens\n│  ├─ config/       # eslint, tsconfig, tailwind presets\n│  └─ utils/        # shared helpers\n└─ package.json     # workspaces + task runner`,
      },
      {
        type: "heading",
        text: "Keeping it fast",
      },
      {
        type: "paragraph",
        text: "The risk with a monorepo is build times — rebuilding everything on every change does not scale. Tools like Turborepo or Nx solve this with a task graph and caching: they only rebuild and retest the packages affected by a change, and reuse cached results for everything else.",
      },
      {
        type: "paragraph",
        text: "For a small team, a monorepo with workspaces and a caching task runner gives you the consistency of a shared codebase with the modularity of separate packages — the best of both worlds when a design system is shared across several apps.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  // Deterministic formatting (no locale surprises between server and client).
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const [year, month, day] = iso.split("-").map(Number);
  return `${months[month - 1]} ${day}, ${year}`;
}
