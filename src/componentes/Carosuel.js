import Carousel from 'better-react-carousel'


function Carosuel(props) {

    return (

        <Carousel cols={2} rows={1} gap={10} loop>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=1" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=2" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          {/* anything you want to show in the grid */}
          <img width="100%" src="https://picsum.photos/800/600?random=4" />
        </Carousel.Item>
        {/* ... */}
      </Carousel>

    );
}

export default Carosuel;