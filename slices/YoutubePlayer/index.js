/**
 * @typedef {import("@prismicio/client").Content.YoutubePlayerSlice} YoutubePlayerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<YoutubePlayerSlice>} YoutubePlayerProps
 * @param {YoutubePlayerProps}
 */
const YoutubePlayer = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="container flex youtube"
        >
            <div className="youtube">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${slice.primary.videoid}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </section>
    );
};

export default YoutubePlayer;
