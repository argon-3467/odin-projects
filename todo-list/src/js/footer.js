export default function footerFactory(footer) {
  function display() {
    footer.innerHTML = `<p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>argon-3467<a href="https://github.com/argon-3467"><i class="fa-brands fa-github"></i></a></p>`;
  }
  function remove() {
    let footer = document.querySelector(".footer");
    footer.remove();
  }
  return {
    display,
    remove,
  };
}
