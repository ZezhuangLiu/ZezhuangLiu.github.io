(function () {
  const buttons = document.querySelectorAll(".copy-email");
  const status = document.querySelector(".copy-status");
  let timer;

  function setStatus(message) {
    if (!status) return;
    status.textContent = message;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      status.textContent = "";
    }, 2200);
  }

  async function copyEmail(email) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const input = document.createElement("input");
        input.value = email;
        input.setAttribute("readonly", "");
        input.style.position = "absolute";
        input.style.left = "-9999px";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
      setStatus("Email copied");
    } catch (error) {
      window.location.href = `mailto:${email}`;
      setStatus("Opening email client");
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      copyEmail(button.dataset.email || "20205214@cqu.edu.cn");
    });
  });
})();
