
 document.addEventListener("DOMContentLoaded", () => {
      const accordionHeaders = document.querySelectorAll(".accordion-header");

      accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
          const item = header.parentElement;
          item.classList.toggle("active");

          // Close other accordions when one is opened
          accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
              otherHeader.parentElement.classList.remove("active");
            }
          });
        });
      });
    });
   

     document.addEventListener("DOMContentLoaded", () => {
  // Existing accordion code...
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      item.classList.toggle("active");

      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.parentElement.classList.remove("active");
        }
      });
    });
  });
    
  // --- Hero Slider Logic ---
  const heroSlides = [
    {
      title: "Data Predictions Minutes Without <span>Writing Code.</span>",
      desc: "Prove the ROI of social media, plan more engaging content, and create automated white label analytics reports.",
      img: "Data Analytics Overview with Leads.png"
    },
    {
      title: "Turn Insights Into <span>Actionable Strategies.</span>",
      desc: "Empower your team with AI-driven insights that help you make smarter business decisions faster.",
      img: "data analyst.png"
    },
    {
      title: "Smarter <span>Automation</span> for Your Business.",
      desc: "Automate workflows and reporting so you can focus on what really matters — growth.",
      img: "data analysis 2.png"
    }
  ];

  let currentSlide = 0;

  const heroTitle = document.querySelector(".hero-text h1");
  const heroDesc = document.querySelector(".hero-text p");
  const heroImg = document.querySelector(".hero-img img");

  function updateHero(index) {
    heroTitle.innerHTML = heroSlides[index].title;
    heroDesc.textContent = heroSlides[index].desc;
    heroImg.src = heroSlides[index].img;
  }

  document.querySelector(".right-arrow").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    updateHero(currentSlide);
  });

  document.querySelector(".left-arrow").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    updateHero(currentSlide);
  });
});
