const FilemsImage = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 text-center md:justify-between md:text-left md:flex-row items-center md:gap-8 p-4 md:p-8 bg-gray-900">
        {/* Text Section */}
        <div className="flex flex-col max-w-xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-snug">
            Do not hesitate to choose Filmic as your studio.
          </h2>
          <p className="mt-4 text-base md:text-lg text-white font-medium leading-relaxed">
            Donec accumsan auctor iaculis. Sed suscipit arcu ligula at egestas
            magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales
            orci. Nullam imperdiet, sem at fringilla lobortis, sem nibh
            fringilla nibh, id gravida mi purus sit amet erat. Ut dictum nisi
            massa, vitae pulvinar metus scelerisque in.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://d1nslcd7m2225b.cloudfront.net/Pictures/1180x787/5/8/7/1432587_photoofmanholdingcamera3062541_544963.jpg"
            alt="Man holding a camera"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 text-center md:justify-between md:text-left md:flex-row items-center md:gap-8 p-4 md:p-8 bg-gray-900">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="http://filmic.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2018/06/Layer-12.jpg"
            alt="Man holding a camera"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col max-w-xl">
          <h2 className="text-5xl md:text-[6rem] font-bold text-orange-700 leading-snug">
            20+
          </h2>
          <h3 className="text-3xl">YEARS OF EXPERIENCE IN THE INDUSTRY</h3>
          <p className="mt-4 text-base md:text-lg text-white font-medium leading-relaxed">
            Proin maximus ut augue ut finibus. In non est eu libero rutrum
            fringilla. Mauris dictum, turpis in convallis tincidunt, est dui
            varius est, eget ultrices magna quam eu tellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilemsImage;
