document.addEventListener('DOMContentLoaded', function() {
    // بيانات الطالبات والرسائل
    const students = [
        {
            name: "ألين",
            message: "يا مس ضحى، وجودك معنا هو أحلى صدفة بحياتنا",
            icon: "fa-heart"
        },
        {
            name: "ريتال",
            message: "ضحكتك بتنور الصف، وكلامك بيعلم القلب قبل العقل",
            icon: "fa-heart"
        },
        {
            name: "سميرة",
            message: "منك تعلمنا إن الطيبة قوة، والحب احترام",
            icon: "fa-heart"
        },
        {
            name: "ناردين",
            message: "يا أجمل معلمة، كل لحظة معك كانت نعمة",
            icon: "fa-heart"
        },
        {
            name: "تالا",
            message: "شرحك بيخلينا نحب المادة، بس قلبك بيخلينا نحبك إنتِ",
            icon: "fa-heart"
        },
        {
            name: "رغد",
            message: "لولاك، الصف ما كان حيضحك هالقدّ، ولا حبينا الدراسة هيك",
            icon: "fa-heart"
        },
        {
            name: "لميس",
            message: "مع كل درس، كنتِ تزرعي فينا أمل… ومع كل كلمة، كنتِ تبني فينا قوة، ونعمة إنك كنتِ جزء من رحلتنا",
            icon: "fa-heart"
        },
        {
            name: "تالا الغرابلي",
            message: "كنتِ المعلمة والأخت والصديقة، صوتك كان بيطمنّا، وكلماتك كانت بلسم لقلوبنا",
            icon: "fa-heart"
        }
    ];

    const heartsContainer = document.querySelector('.hearts-container');
    const heartSound = document.getElementById('heartSound');
    const bigHeartSound = document.getElementById('bigHeartSound');
    let revealedCount = 0;

    // إنشاء القلوب
    students.forEach((student, index) => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = `
            <i class="fas ${student.icon} heart-icon"></i>
            <div class="student-info" style="display: none;">
                <div class="student-name">${student.name}</div>
                <div class="student-message">${student.message}</div>
            </div>
        `;
        
        heart.addEventListener('click', function() {
            if (!heart.classList.contains('revealed')) {
                revealHeart(heart, index);
            }
        });
        
        heartsContainer.appendChild(heart);
    });

    // وظيفة كشف القلب
    function revealHeart(heart, index) {
        heart.classList.add('revealed');
        heart.querySelector('.student-info').style.display = 'block';
        heartSound.currentTime = 0;
        heartSound.play();
        
        // تأثير اهتزاز
        heart.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            heart.style.animation = '';
        }, 500);
        
        revealedCount++;
        
        // إذا تم كشف جميع القلوب
        if (revealedCount === students.length) {
            setTimeout(() => {
                showBigHeart();
            }, 1000);
        }
    }

    // وظيفة عرض القلب الكبير
    function showBigHeart() {
        const bigHeartContainer = document.querySelector('.big-heart-container');
        bigHeartContainer.style.display = 'block';
        bigHeartSound.play();
        
        // إنشاء الكونفيتي
        createConfetti();
        
        // التمرير إلى القلب الكبير
        bigHeartContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // وظيفة إنشاء الكونفيتي
    function createConfetti() {
        const colors = ['#ff6b8b', '#ff8e9e', '#e84393', '#ffcce0', '#ffffff'];
        const container = document.querySelector('.confetti-container');
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(confetti);
            
            // إزالة الكونفيتي بعد الانتهاء من الحركة
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }

    // تأثيرات عند تحميل الصفحة
    setTimeout(() => {
        document.querySelector('.title').style.animation = 'fadeIn 1s ease';
        document.querySelector('.subtitle').style.animation = 'fadeIn 1s ease 0.3s forwards';
        document.querySelector('.intro').style.animation = 'fadeIn 1s ease 0.6s forwards';
    }, 300);
});
