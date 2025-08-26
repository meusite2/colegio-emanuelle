document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile menu ---
  const menu = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.nav-list');

  if (menu && nav) {
    menu.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('active');
      menu.classList.toggle('active');
    });

    // Fecha ao clicar em um item do menu
    nav.querySelectorAll('li').forEach((item) => {
      item.addEventListener('click', () => {
        nav.classList.remove('active');
        menu.classList.remove('active');
      });
    });

    // Evita fechar ao clicar dentro do nav
    nav.addEventListener('click', (e) => e.stopPropagation());
  }

  // --- Submenu abre/fecha e fecha ao clicar fora ---
  document.querySelectorAll('.has-submenu').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      item.classList.toggle('active');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.has-submenu.active').forEach((item) => {
      item.classList.remove('active');
    });
    // também fecha o mobile menu, se quiser:
    if (nav && menu) {
      nav.classList.remove('active');
      menu.classList.remove('active');
    }
  });

  // --- Slider / Dots ---
  const banners = document.querySelectorAll('.banner');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  const total = banners.length;

  function showSlide(index) {
    if (!total) return;
    current = (index + total) % total;
    banners.forEach((banner, i) => {
      banner.classList.toggle('active', i === current);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  // Clique nos dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation(); // evita conflito com listeners globais
      showSlide(index);
    });
  });

  // Troca automática (opcional)
  const intervalMs = 3000;
  let timer = setInterval(() => showSlide(current + 1), intervalMs);

  // (Opcional) Pausar no hover do container do slider, se existir
  const slider = document.querySelector('.slider') || document.querySelector('article');
  if (slider) {
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => {
      timer = setInterval(() => showSlide(current + 1), intervalMs);
    });
  }

  // Inicializa
  showSlide(0);
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  main.addEventListener("scroll", () => {
    if (main.scrollTop > 0) {
      header.classList.add("hide");   // esconde
    } else {
      header.classList.remove("hide"); // mostra só no topo
    }
  });
});