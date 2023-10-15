/*  Drop Down Menu class which accepts three parameters. The container for
    whole drop down menu, the title which will activate the drop down, and
    a node list of the individual items within the dropdown.
    Once initialised, a drop down menu that activates by hovering the mouse
    over the title will be created.
*/

module.exports = class DropDownMenu {
  constructor (dropDownContainer, dropDownTitle, dropDownItems) {
    this.dropDownContainer = dropDownContainer
    this.dropDownTitle = dropDownTitle
    this.dropDownItems = []
    for (let i = 0; i < dropDownItems.length; i++) {
      this.dropDownItems.push(dropDownItems[i])
    }
  }

  hideDropDownItems () {
    this.dropDownItems.forEach(element => {
      element.style.display = 'none'
    })
  }

  displayDropDownItems () {
    this.dropDownItems.forEach(element => {
      element.style.display = 'block'
    })
  }

  initialise () {
    this.hideDropDownItems()
    this.dropDownContainer.addEventListener('mouseover', (e) => {
      if (e.target === this.dropDownTitle) {
        this.displayDropDownItems()
        this.menuHover = true
      }
    })
    this.dropDownContainer.addEventListener('mouseleave', () => {
      this.hideDropDownItems()
      this.menuHover = false
    })
  }
}

