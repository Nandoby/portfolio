import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfies clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
            {companies.map(({ id, img, name, nameImg }) => (
              <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
                <img src={img} alt={name} className="w-5 md:w-10" />
                <img src={nameImg} alt={name} className="w-10 md:w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;