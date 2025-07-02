function RespContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

export default RespContainer;