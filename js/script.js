const modal = document.getElementById('rateLoginModal');
    const modalClose = document.getElementById('modal-close');
    const openLoginModal = () => {
      modal.style.display = 'block';
    };
    modalClose.onclick = () => {
      modal.style.display = 'none';
    };