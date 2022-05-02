import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useSWR from "swr";
import { fetcher } from "../../utilities/featcher";

const Banner = () => {
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     axios.get("data.json").then(({ data }) => {
    //         setItems(data);
    //     });
    // }, []);
    const { data } = useSWR(
        `https://smartphone-warehouse-saad.herokuapp.com/inventories`,
        fetcher
    );
    return (
        <Carousel
            autoPlay
            dynamicHeight
            infiniteLoop
            width="100%"
            centerMode
            centerSlidePercentage={100}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators
            useKeyboardArrows
            stopOnHover
            swipeable
            emulateTouch
            autoFocus
            className="object-cover object-center "
        >
            {data?.inventory?.slice(0, 6).map((item) => (
                <div key={item.name}>
                    <img
                        src={item.images[0]}
                        className="object-contain object-center h-screen p-20 rounded-md w-96"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/75 text-slate-50">
                        <div className="space-y-4 ">
                            <h1 className="text-5xl">{item.name}</h1>
                            <p className="text-3xl">
                                ${item.price} ({item.quantity} pice available)
                            </p>
                            <a
                                href="#inventoryItems"
                                className="inline-block px-4 py-2 bg-teal-500 rounded-md text-slate-900 hover:bg-teal-600"
                            >
                                Explore More
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
