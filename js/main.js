// ナビゲーションのトグル
document.addEventListener('DOMContentLoaded', () => {
    // エラーモーダルの初期化
    const errorModal = document.getElementById('errorModal');
    const errorMessage = document.getElementById('errorMessage');
    const errorModalClose = document.querySelector('.error-modal-close');

    // エラーモーダルを表示する関数
    function showErrorModal(message) {
        errorMessage.textContent = message;
        errorModal.style.display = 'block';
    }

    // エラーモーダルを閉じる関数
    function hideErrorModal() {
        errorModal.style.display = 'none';
    }

    // OKボタンのクリックイベント
    if (errorModalClose) {
        errorModalClose.addEventListener('click', hideErrorModal);
    }

    // クリックイベントのバブリングを使ってモーダル外をクリックしたときに閉じる
    errorModal.addEventListener('click', (e) => {
        if (e.target === errorModal) {
            hideErrorModal();
        }
    });
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenuBtn = document.querySelector('.close-menu');

    // ハンバーガーメニューのクリックイベント
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // 閉じるボタンのクリックイベント
    closeMenuBtn.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });

    // ナビゲーションのスムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // モバイルメニューを閉じる
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }
        });
    });

    // スクロール時のヘッダーの透明度変更
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const scrollPosition = window.scrollY;

    // フォームの送信処理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbxn9SuyOYEb0hY-ZqLRjXR0awOwJmyKI77Bsdal6L33VxFWEhuogfmVPf9OlHYmyDWlQg/exec', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    alert('お問い合わせありがとうございます。後ほどご連絡させていただきます。');
                    contactForm.reset();
                } else {
                    alert('送信に失敗しました。もう一度お試しください。');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('送信に失敗しました。もう一度お試しください。');
            }
        });
    }
        const opacity = 0.8 + (scrollPosition / 1000);
        header.style.background = `rgba(0, 0, 0, ${Math.min(1, opacity)})`;
    });

    // お問い合わせフォームの送信処理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbxn9SuyOYEb0hY-ZqLRjXR0awOwJmyKI77Bsdal6L33VxFWEhuogfmVPf9OlHYmyDWlQg/exec', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    alert('お問い合わせありがとうございます。後ほどご連絡させていただきます。');
                    contactForm.reset();
                } else {
                    showErrorModal('送信に失敗しました。もう一度お試しください。');  // ここを変更
                }
            } catch (error) {
                console.error('Error:', error);
                showErrorModal('送信に失敗しました。もう一度お試しください。');  // ここを変更
            }
        });
    }
});
