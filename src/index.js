import Artist from '.Artist'

const props = { id: "jpnelson", name: "Jeremy Nelson" }

render(<Artist {..props} />, document.getElementById("artists"))
