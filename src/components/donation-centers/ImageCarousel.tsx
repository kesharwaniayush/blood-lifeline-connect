
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DonationImage } from "@/types/donation-center";

interface ImageCarouselProps {
  images: DonationImage[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <div className="mb-8">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-xl">
                    <div className="relative w-full h-full">
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                          {image.alt}
                        </div>
                      </AspectRatio>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
