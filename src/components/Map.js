"use client";
const Map = () => {
    const apiKey = process.env.GOOGLE_API_KEY;
    return (
        <iframe
            width="100%"
            height="450"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Here+To+Stay,Warsaw`}
        />
    );
};

export default Map;
