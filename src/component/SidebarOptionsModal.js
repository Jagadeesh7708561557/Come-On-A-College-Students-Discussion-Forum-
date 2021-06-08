import React from 'react'
import ReactDom from 'react-dom'
	const MODAL_STYLES ={
		position: "fixed",
		top: "50%",
		left: "50%",
		backgroundColor: "#FFF",
		padding: '50px',
		zIndex: 1000,
		marginTop: '-280px',
		width: "550px",
		height: "auto",
		marginLeft: '-350px',
		borderRadius: '10px'
	}

	const OVERLAY_STYLE = {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, .7)',
		zIndex: 1000
	}
export default function SidebarOptionsModal({ isOpen, children, onClose, onClose1}){

	if (!isOpen) return null
	return ReactDom.createPortal(
<>
			<div style = {OVERLAY_STYLE}/>
			<div style = {MODAL_STYLES}>
			{children}
			</div>
</>,
  	document.getElementById('portal')

		
		) 
}

