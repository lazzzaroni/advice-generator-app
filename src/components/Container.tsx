import Image from "next/image";

import { cn } from "@/lib/utils";

export default function Container() {
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
      >{`Advice #${117}`}</h1>
      <p
        className={cn(
          "text-center text-2xl font-bold leading-snug",
          "md:text-[28px] md:leading-tight"
        )}
      >{`"It is easy to sit up and take notice, what's difficult is getting up and taking action."`}</p>
      <picture className={cn("mb-4 mt-6", "md:mb-6 md:mt-10")}>
        <source
          media="(min-width:768px)"
          srcSet="/pattern-divider-desktop.svg"
        />
        <img
          src="/pattern-divider-mobile.svg"
          alt=""
          className="h-auto w-full"
        />
      </picture>
      <button
        className={cn(
          "absolute bottom-0 left-1/2 h-16 w-16 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary-neon-green transition duration-200 ease-in-out hover:shadow-[0_0_32px_0] hover:shadow-primary-neon-green active:scale-95"
        )}
      >
        <Image
          src="/icon-dice.svg"
          width={0}
          height={0}
          alt=""
          className="m-auto h-6 w-6"
        />
      </button>
    </section>
  );
}
