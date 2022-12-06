
export default function generateImageElement(imgBase64: String) : HTMLImageElement{
    const img = new Image()
    console.log(imgBase64)
    img.src = `${imgBase64}`
    return img
}
