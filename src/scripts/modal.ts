import MicroModal from "micromodal";

export function openModal(modalId: string) {
  const element = document.getElementById(modalId);
  if (!element) return;
  MicroModal.show(modalId, {
    disableScroll: true,
    disableFocus: true,
  });
}
