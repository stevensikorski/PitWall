import { Page } from "@/components/containers/Page";

export default function NotFound() {
  return (
    <Page>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-14vh)] desktop:h-[calc(100vh-24vh)] w-full">
        <h2>404 Page Not Found</h2>
        <p className="mt-2">The page you are looking for does not exist.</p>
      </div>
    </Page>
  );
}
