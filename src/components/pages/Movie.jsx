const Movie = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
      <div>
        <video
          muted
          loop
          playsInline
          style={{
            border: 'none',
            outline: 'none',
          }}
        >
          <source
            src="https://cinerama.qodeinteractive.com/wp-content/uploads/2018/04/170216A_016_BoyPlayingPiano2_1080p_x264_x264.mp4"
            type="video/mp4"
          />
        </video>

        <h2>ISLAND</h2>
        <p>Comedy</p>
      </div>
      <div>
        <video controls width="300">
          <source
            src="https://cinerama.qodeinteractive.com/wp-content/uploads/2018/04/170216A_051_BigWavesBreakingOnCliff_1080p_x264_x264_002.mp4"
            type="video/mp4"
          />
        </video>
        <h2>ISLAND</h2>
        <p>Comedy</p>
      </div>
    </div>
  );
};

export default Movie;
