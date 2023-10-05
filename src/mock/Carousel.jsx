import Carousel from "react-bootstrap/Carousel";
import image from "../assets/img/project-img2.png";
import Image from "next/image";

function DarkVariantExample() {
  const getVisibleCards = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 4; // Display 4 cards on screens wider than 1200px
    } else if (screenWidth >= 992) {
      return 3; // Display 3 cards on screens between 992px and 1199px
    } else if (screenWidth >= 768) {
      return 2; // Display 2 cards on screens between 768px and 991px
    } else {
      return 1; // Display 1 card on screens narrower than 768px
    }
  };

  return (
    <Carousel
      controls={true}
      indicators={false}
      interval={null} // Disable automatic sliding
      slide={true}
      fade={false}
      wrap={true}
      touch={true}
      keyboard={true}
      visible={getVisibleCards()} // Number of cards to display
    >
      <Carousel.Item>
        <Image className="d-block w-100" src={image} alt="First slide" />
        {/* Add your content for the first card */}
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={image} alt="Second slide" />
        {/* Add your content for the second card */}
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={image} alt="Third slide" />
        {/* Add your content for the third card */}
      </Carousel.Item>
      {/* Add more Carousel.Items for additional cards */}
    </Carousel>
  );
}

export default DarkVariantExample;
