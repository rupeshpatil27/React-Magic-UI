import { IconCloud } from "./component/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "android",
  "html5",
  "tailwindcss",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "androidstudio",
  "figma",
  "threedotjs",
  "matterdotjs",
];

function App() {


  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative">
      <h1 className="text-center mt-10 text-3xl font-bold">Icon Cloud</h1>

      <div className="relative flex w-full h-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </div>
  );
}

export default App;

