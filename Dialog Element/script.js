const modalOpenButton = document.querySelector("[data-open-modal]");
const modalCloseButton = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")

const dialogOpenButton = document.querySelector("[data-open-dialog]");
const dialogCloseButton = document.querySelector("[data-close-dialog]")
const dialog = document.querySelector("[data-dialog]")

const formOpenButton = document.querySelector("[data-open-form]");
const form = document.querySelector("[data-form]")

modalOpenButton.addEventListener("click", () => {
    modal.showModal()
})

modalCloseButton.addEventListener("click", () => {
    modal.close()
})

dialogOpenButton.addEventListener("click", () => {
    dialog.show()
})

dialogCloseButton.addEventListener("click", () => {
    dialog.close()
})

formOpenButton.addEventListener("click", () => {
    form.showModal()
})