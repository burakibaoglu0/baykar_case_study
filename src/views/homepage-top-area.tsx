import { CollectibleSneakers, Features } from "@/views/widgets";

export const HomepageTopArea = () => {
  return (
    <section className="w-full flex flex-col relative overflow-hidden">
      <CollectibleSneakers />
      <Features />
      <div
        className="absolute -z-20 bg-amber-100 left-0 bottom-0 w-full h-full"
        style={{
          clipPath: "polygon(100% 14.5%, 1% 100%, 100% 100%);"
        }}
      ></div>
    </section>
  );
}

//matrix(-1, 0, 0, 1, 0, 0);
