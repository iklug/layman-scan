export default function ResultsContainer({ children }) {
  return (
    <div className="w-full h-[100dvh] flex flex-col gap-2 rounded-lg overflow-y-auto overflow-x-hidden py-4">
      {children}
    </div>
  );
}
