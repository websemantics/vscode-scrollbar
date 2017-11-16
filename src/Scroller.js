class Scroller {
  constructor(parent) {
    /* copy parent first (and only child) */
    this.content = parent.firstElementChild

    parent.classList.add('cf-scroller')
    parent.innerHTML = `<div class="cf-scroller__container">
				</div>
				<div class="cf-scroller__scrollbar" data-orientation="vertical">
					<div class="cf-slider"></div>
				</div>
				<div class="cf-scroller__scrollbar" data-orientation="horizontal">
					<div class="cf-slider"></div>
				</div>`

    this.el = parent.firstElementChild
    this.el.appendChild(this.content)

    this.vertical = new Scrollbar(
      document.querySelector('[data-orientation~=vertical]')
    )
    this.horizontal = new Scrollbar(
      document.querySelector('[data-orientation~=horizontal]')
    )

    this.el.addEventListener('scroll', event => {
      this.vertical.move(this.el.scrollTop)
      this.horizontal.move(this.el.scrollLeft)
    })

    this.resize()
  }
  resize() {
    const clientSize = this.el.getBoundingClientRect()
    const contentSize = this.content.getBoundingClientRect()

    this.vertical.resize(clientSize, contentSize)
    this.horizontal.resize(clientSize, contentSize)
  }
}
