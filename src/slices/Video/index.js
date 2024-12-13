/**
 * @typedef {import("@prismicio/client").Content.VideoSlice} VideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSlice>} VideoProps
 * @param {VideoProps}
 */
const Video = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`flex justify-center items-center p-6 bg-gray-50`}>
        {/* Video Embed Container */}
        <div className="relative w-full flex items-center justify-center">
          <video
            
            src={slice.primary.videolink}
            title={'nova video'}
            muted={true} // Start with video muted
            autoPlay={false} // Autoplay option
            controls={true} // Show controls (play, pause, volume, etc.)
          ></video>
        </div>
        </div>
    </section>
  );
};

export default Video;
