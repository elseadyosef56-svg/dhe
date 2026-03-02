document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  activateNav(page);
  setupMenu();

  if (page === 'gallery') renderGallery();
  if (page === 'contact') handleForm();
});

function activateNav(page) {
  const map = { home: 'index.html', gallery: 'gallery.html', contact: 'contact.html' };
  const target = map[page];
  document.querySelectorAll('.nav-links a').forEach(link => {
    const isActive = link.getAttribute('href') === target;
    if (isActive) link.classList.add('active');
  });
}

function setupMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('open'))
  );
}

function renderGallery() {
  const container = document.querySelector('[data-gallery]');
  if (!container) return;

  const items = [
    {
      src: 'https://cdn.pixabay.com/photo/2023/02/14/04/39/chemical-7788813_1280.jpg',
      alt: 'فني جودة يغمس عينة حبوب في مختبر أغذية',
      caption: 'اختبارات سلامة وجودة المواد الغذائية'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2023/06/19/07/13/food-8073610_1280.jpg',
      alt: 'عالمة تفحص محاليل خضراء في مختبر تفتيش غذائي',
      caption: 'تحليل العينات وفق مواصفات الاعتماد'
    },
    {
      src: 'https://images.pexels.com/photos/12429160/pexels-photo-12429160.jpeg?cs=srgb&dl=pexels-sir-lodi-82542846-12429160.jpg&fm=jpg',
      alt: 'معدات تعقيم UV وأوتوكلاف في مختبر طبي',
      caption: 'تفتيش وتعقيم المعدات الطبية بأعلى المعايير'
    },
    {
      src: 'https://images.pexels.com/photos/3912520/pexels-photo-3912520.jpeg?cs=srgb&dl=pexels-thisisengineering-3912520.jpg&fm=jpg',
      alt: 'مهندس زراعي يفحص محاصيل في مزرعة داخلية بإضاءة بنفسجية',
      caption: 'تفتيش تقني للمحاصيل والمعدات الزراعية'
    }
  ];

  container.innerHTML = items.map(item => `
    <figure class="gallery-item">
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
      <span>${item.caption}</span>
    </figure>
  `).join('');
}

function handleForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.querySelector('.form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      feedback.textContent = 'الرجاء تعبئة جميع الحقول بشكل صحيح.';
      feedback.style.color = '#c4472d';
      return;
    }
    feedback.textContent = 'تم استلام رسالتك، سنعاود التواصل قريبًا.';
    feedback.style.color = '#1d5a7a';
    form.reset();
  });
}
