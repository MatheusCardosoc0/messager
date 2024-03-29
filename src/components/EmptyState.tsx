const EmptyState = () => {
  return (
    <div
      className="
        flex
        h-full
        min-h-screen
        items-center
        justify-center
        bg-gray-100
        px-4
        py-10
        sm:px-6
        lg:px-8
      "
    >
      <div className="flex flex-col items-center text-center">
        <h3
          className="
            mt-2
            text-2xl
            font-bold
            text-gray-900
          "
        >
          Selecione um chat e inicie uma nova conversa
        </h3>
      </div>
    </div>
  )
}

export default EmptyState
