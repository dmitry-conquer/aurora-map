import { openModal } from "../modal";

export default class Modal {
  private selectors: Record<string, string> = {
    modalId: "map-modal",
    modalSlot: "[data-modal-slot]",
    modalContentContainer: "[data-map-modal-container]",
  };
  private modalElement: HTMLElement | null = null;
  private modalSlotElement: HTMLElement | null = null;
  private modalContentContainerElement: HTMLElement | null = null;

  constructor() {
    this.modalElement = document.getElementById(this.selectors.modalId);
    this.modalSlotElement = this.modalElement?.querySelector(this.selectors.modalSlot) || null;
    this.modalContentContainerElement = document.querySelector(this.selectors.modalContentContainer) || null;
  }

  public tiggerModal(index: number): void {
    if (!this.modalElement || !this.modalSlotElement || !this.modalContentContainerElement) return;

    const els = Array.from(this.modalContentContainerElement?.children || []);
    if (!els) return;
    this.modalSlotElement!.innerHTML = els[index]?.innerHTML || "";

    openModal(this.selectors.modalId);
  }
}
