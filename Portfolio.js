

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  
    const themeBtn = document.getElementById("theme-btn");
    const darkTheme = document.querySelectorAll(".dark-theme");
    themeBtn.onclick = () => {
      themeBtn.classList.toggle("fa-sun");
      if (themeBtn.classList.contains("fa-sun")) {
        document.body.classList.add("changeTheme");
        for (const theme of darkTheme) {
          theme.style.backgroundColor = "rgb(14, 12, 49)";
          theme.style.color = "white";
        }
      } else {
        document.body.classList.remove("changeTheme");
        for (const theme of darkTheme) {
          theme.style.backgroundColor = "white";
          theme.style.color = "#080c1a";
        }
      }
    }
  