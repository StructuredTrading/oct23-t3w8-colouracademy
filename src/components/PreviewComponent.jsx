import "../styles/PreviewCard.css"

export function PreviewCard({colourEntry}){

    return (
        <div className="previewCard"style={{backgroundColor: colourEntry.hex}}>
            <h1>Preview Content Card</h1>
            <h5>Subtitle of the card</h5>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ullam ut perspiciatis placeat nihil nobis, enim pariatur, officia obcaecati nisi unde illo ab soluta similique! Perspiciatis aliquid dolor amet repellendus?
            </p>

            <button>
                Example Button
            </button>
        </div>
    )
}