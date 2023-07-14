import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main
        className={cn(
          "flex min-h-screen flex-col items-center justify-center bg-neutral-dark-blue font-sans text-primary-light-cyan",
          fontSans.variable
        )}
      >
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </main>
    </QueryClientProvider>
  );
};

export default MyApp;
