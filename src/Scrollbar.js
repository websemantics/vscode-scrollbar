class Scrollbar {
  constructor(el) {
    this.el = el
    this.orientation = this.el.dataset.orientation
    this.slider = el.firstElementChild
  }
  resize(client, content) {
    const prop = this.orientation === 'vertical' ? 'height' : 'width'

    this.contentLength = content[prop]
    this.clientLength = client[prop]
    this.length = this.clientLength / content[prop] * this.clientLength

    this.slider.style[prop] = this.length + 'px'
  }
  move(scroll) {
    const prop = this.orientation === 'vertical' ? 'top' : 'left'
    const percent = scroll / (this.contentLength - this.clientLength)

    this.slider.style[prop] = (this.clientLength - this.length) * percent + 'px'
  }
}
