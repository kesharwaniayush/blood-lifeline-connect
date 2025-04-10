
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
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
                    <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                      {/* In a real application, this would be an actual image */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <p className="text-sm text-gray-600 text-center">{image.alt}</p>
                      </div>
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
