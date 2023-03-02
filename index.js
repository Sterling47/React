function MainContent() {
    return (
        <h1 className="main-content">IM learning react</h1>
     )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)


const h1 = document.createElement("p")
h1.textContent = "im starting to get a hang of this, lots to learn though!"
h1.className = "text"
document.getElementById("root").append(h1)

// JSX (JAVASCRIPT XML) 

const element = <h1 className="text">This is JSX</h1>
console.log(element)

// ReactDOM.render(element, document.getElementById("root"))

