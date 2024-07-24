"use client"

export default function ScrollButton() {
  const portfolio = document.getElementById("portfolio")?.style.height
  function scrollItems() {}
  return (
    <div>
      <button
        className="button-primary"
        onClick={() => {
          scrollItems
        }}
      >
        older works
      </button>
    </div>
  )
}
