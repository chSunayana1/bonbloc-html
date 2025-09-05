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