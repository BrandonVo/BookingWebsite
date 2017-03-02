
export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'

export function toggleDropdown(isOpen) {
  return {
    type: TOGGLE_DROPDOWN,
    isOpen
  }
}
