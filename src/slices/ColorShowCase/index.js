/**
 * @typedef {import("@prismicio/client").Content.ColorShowCaseSlice} ColorShowCaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ColorShowCaseSlice>} ColorShowCaseProps
 * @param {ColorShowCaseProps}
 */
const ColorShowCase = ({ slice }) => {
  const { primary, items } = slice;

  return (
    <section className="bg-white py-10 px-5 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">{primary.title}</h2>
        <p className="text-gray-600 mt-3">{primary.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((color, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={color.color_image.url}
                alt={color.color_name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{color.color_name}</h3>
              <p className="text-gray-600 mt-2">{color.color_description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
};

export default ColorShowCase;
