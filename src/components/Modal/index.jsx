import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useKeypress } from "../../hooks/useKeypress";
import { useTrapFocus } from "../../hooks/useTrapFocus";

import "./styles.scss";

/**
 * Modal component that can be opened and closed by clicking outside of the modal or the close button.
 *
 * @category Components
 * @component
 * @returns {React.Component} - The modal component.
 */
function Modal({
	id,
	modalContent,
	isOpenStateInParent,
	onClose,
	modalClassName = "modal",
	modalBackgroundClassName = "modal-background",
	addCloseButton = true,
	closeButtonClassName = "close-modal",
	closeButtonText = "Close",
	...props
}) {
	// UseRef hook to create a ref for the modal.
	// The useEffect hook is then used to add an event listener to the document.
	// The event listener checks if the user clicked outside of the modal.
	const ref = useRef();
	useClickOutside(ref, isOpenStateInParent, () => onClose(false));
	useKeypress("Escape", isOpenStateInParent, () => onClose(false));
	useTrapFocus(ref, isOpenStateInParent);

	const handleClose = () => {
		if (onClose) {
			onClose();
		}
	};

	return (
		<>
			{isOpenStateInParent && (
				<>
					<div id={id + "-modal-background"} className={modalBackgroundClassName}></div>
					<div id={id + "-modal"} ref={ref} className={modalClassName} {...props} role={"dialog"} aria-modal="true">
						{modalContent}
						{addCloseButton && (
							<button id={id + "-modal-button"} className={closeButtonClassName} type="button" onClick={handleClose} aria-label="Close Modal">
								{closeButtonText}
							</button>
						)}
					</div>
				</>
			)}
		</>
	);
}