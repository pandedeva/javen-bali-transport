import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

interface VehicleCarouselProps {
  data: any[];
  onBook: (item: any) => void;
  title: string;
  sectionId?: string;
}

const VehicleCarousel = ({
  data,
  onBook,
  title,
  sectionId,
}: VehicleCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div id={sectionId} className="pt-1">
      <div className="my-8 flex flex-col gap-2 items-start">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="h-0.5 w-12 bg-black/20 rounded-full" />
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          slidesToScroll: 1,
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="gap-1">
          {data.map((data, index) => (
            <CarouselItem
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              key={index}
            >
              <VehicleCard
                type={data.type}
                key={index}
                title={data.name}
                price={data.price}
                img={data.img}
                onBook={() => onBook(data)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 w-2 rounded-full ${
                i === current ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default VehicleCarousel;
