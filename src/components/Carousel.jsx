function Carousel({ children }) {
  return (
    <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  )
}

export default Carousel
