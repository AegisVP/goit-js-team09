export default class MyModal {
	constructor({ showClass = 'is-open', modalRef }) {
		if (!modalRef) {
			console.error('MyModal is initialized without modal refference:' + modalRef);
			return;
		}

		this.showClass = showClass;
		this.modalRef = modalRef;
		this.modalRef.addEventListener('click', this.closeModal.bind(this));
		this.modalRef.querySelectorAll('[data-mymodal-close]').forEach(r => r.addEventListener('click', this.closeModal.bind(this)));
	}

	openModal(e) {
		e.preventDefault();

		this.modalRef.classList.add(this.showClass);
		document.body.classList.add('show-modal');
		this.modalRef.removeAttribute('aria-hidden');

		window.addEventListener('keydown', this.monitorEscKey.bind(this));
	}

	closeModal({ type, target, currentTarget }) {
		if (type === 'click' && target !== currentTarget) return;

		this.modalRef.classList.remove(this.showClass);
		document.body.classList.remove('show-modal');
		this.modalRef.setAttribute('aria-hidden', true);
		window.removeEventListener('keydown', this.monitorEscKey.bind(this));
	}

	monitorEscKey(e) {
		if (e.code !== 'Escape') return;

		this.closeModal(e);
	}
}
