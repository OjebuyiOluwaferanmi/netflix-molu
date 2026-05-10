import NetflixSlider from "./NetflixSlider";

export default function Body() {
  return (
    <>
      <div className="bg-black min-h-screen px-6 sm:px-6 md:px-12 lg:px-24 xl:px-44 pt-10">
        <h1 className="text-base md:text-2xl font-semibold text-white">
          Trending Now
        </h1>
        <NetflixSlider />
      </div>
    </>
  );
}