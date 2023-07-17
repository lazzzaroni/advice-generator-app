import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { cn } from "@/lib/utils";

type ApiData = {
  slip: {
    id: number;
    advice: string;
  };
};

export default function Container() {
  const { data, isLoading, refetch, isError } = useQuery<ApiData>({
    queryKey: ["advice"],
    queryFn: async () => {
      const response = await axios.get("https://api.adviceslip.com/advice");
      return response.data as ApiData;
    },
    refetchOnWindowFocus: false,
  });

  if (isError) {
    return (
      <div
        className={cn(
          "relative flex h-auto w-[343px] flex-col items-center justify-center rounded-xl bg-neutral-dark-grayish-blue px-6 pb-12 pt-10 shadow-lg",
          "md:w-[540px] md:p-12"
        )}
      >
        <p
          className={cn(
            "text-center text-2xl font-bold leading-snug",
            "md:w-4/5 md:text-[28px] md:leading-tight"
          )}
        >
          Something went wrong. Please try again later!
        </p>
      </div>
    );
  }

  return (
    <section
      className={cn(
        "relative flex h-auto w-[343px] flex-col items-center justify-center rounded-xl bg-neutral-dark-grayish-blue px-6 pb-12 pt-10 shadow-lg",
        "md:w-[540px] md:p-12"
      )}
    >
      <h1
        className={cn(
          "fit mb-6 text-xs font-extrabold uppercase tracking-[0.3em] text-primary-neon-green",
          "md:text-sm"
        )}
      >
        Advice #<span>{isLoading ? "..." : data?.slip.id}</span>
      </h1>
      <p
        className={cn(
          "text-center text-2xl font-bold leading-snug",
          "md:text-[28px] md:leading-tight"
        )}
      >
        {isLoading ? "Loading..." : <span>“{data?.slip.advice}”</span>}
      </p>
      <picture className={cn("mb-4 mt-6", "md:mb-6 md:mt-10")}>
        <source
          media="(min-width:768px)"
          srcSet="/advice-generator-app/pattern-divider-desktop.svg"
        />
        <img
          src="/advice-generator-app/pattern-divider-mobile.svg"
          alt=""
          className="h-auto w-full"
        />
      </picture>
      <button
        className={cn(
          "absolute bottom-0 left-1/2 h-16 w-16 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary-neon-green transition duration-200 ease-in-out hover:shadow-[0_0_32px_0] hover:shadow-primary-neon-green active:scale-95"
        )}
        onClick={() => refetch()}
      >
        <Image
          src="/advice-generator-app/icon-dice.svg"
          width={0}
          height={0}
          alt=""
          className="m-auto h-6 w-6"
        />
      </button>
    </section>
  );
}
