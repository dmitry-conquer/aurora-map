import Modal from "./Modal";

export default class Buttons {
  private selectors: Record<string, string> = {
    buttons: "[data-area-button]",
  };
  private buttons: HTMLElement[] = [];
  private modal: Modal;

  constructor() {
    this.buttons = Array.from(document.querySelectorAll(this.selectors.buttons)) as HTMLElement[];
    this.modal = new Modal();
    this.bindEvents();
  }
  bindEvents(): void {
    this.buttons.forEach((button, index) => {
      button.addEventListener("click", () => this.modal.tiggerModal(index));
    });
  }
}
