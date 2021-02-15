const labels = document.querySelectorAll(".checkbox label");

labels.forEach(label => {
  label.addEventListener("click", e => {
    // Toggle active class
    label.classList.toggle("active");

    let oldIcon = label.querySelector("i");

    if (oldIcon !== undefined && oldIcon !== null) {
      label.removeChild(oldIcon);
    } else {
      const icon = document.createElement("i");
      icon.classList.add("fas", "fa-check-circle");
      label.appendChild(icon);
    }
  });
});
