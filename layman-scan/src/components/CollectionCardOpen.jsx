export default function CollectionCardOpen() {
  return (
    <div className="flex flex-col">
      <div className="w-full border-b border-blue-300 py-2 px-2 flex justify-between text-gray-700">
        {"pancreas"}
        <div className="flex gap-4">
          <div>A</div>
          <div>B</div>
        </div>
      </div>
      <div className="p-2 text-sm border-b text-gray-600">
        This is the definition for this particular thing, and we can see that
        this can be the of somewhere in between
      </div>
    </div>
  );
}
