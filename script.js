document.addEventListener('DOMContentLoaded', function() {
    // 为FAQ添加交互效果
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        
        // 初始状态下隐藏答案
        answer.style.display = 'none';
        
        // 添加展开/收起指示器
        question.innerHTML += '<span class="toggle-icon">+</span>';
        const toggleIcon = question.querySelector('.toggle-icon');
        
        // 点击问题时切换答案的显示状态
        question.addEventListener('click', () => {
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                toggleIcon.textContent = '-';
            } else {
                answer.style.display = 'none';
                toggleIcon.textContent = '+';
            }
        });
        
        // 添加鼠标悬停样式
        question.style.cursor = 'pointer';
    });
    
    // 为升级按钮添加点击事件
    const upgradeButtons = document.querySelectorAll('.btn-upgrade');
    
    upgradeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 这里可以添加确认对话框
            if (!confirm('确定要升级店铺等级吗？升级后需要满足相应条件。')) {
                e.preventDefault();
            }
        });
    });
});