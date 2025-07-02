function GridLayout(children: React.ReactNode) {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {children}
      </main>
    </>
  )
}

export default GridLayout;