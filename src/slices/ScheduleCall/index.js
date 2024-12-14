import { CallSchedule } from "@/components/Pages/Homepage/CallSchedule";

/**
 * @typedef {import("@prismicio/client").Content.ScheduleCallSlice} ScheduleCallSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ScheduleCallSlice>} ScheduleCallProps
 * @param {ScheduleCallProps}
 */
const ScheduleCall = ({ slice }) => {
  // console.log('slice------',slice.primary.logo?.url)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 md:px-10 lg:px-20 xl:px-40"

    >
      <CallSchedule
      logo={slice.primary.logo?.url}
      title={slice.primary.title}
      button={slice.primary.button}
      />
    </section>
  );
};

export default ScheduleCall;
