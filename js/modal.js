function modal() {
  var modalOn     = document.querySelector(".--modal--on"),
      modalOff    = document.querySelector(".--modal--off"),
      modal       = document.querySelector(".modal"),
      wrapper     = document.querySelector(".wrapper"),

      show = 
        function showModal() {
          modal.className   += "  --show";
          wrapper.className += "  --shadow";
        },

      hide = 
        function hideModal() {
          modal.className   = "modal";
          wrapper.className = "wrapper";
        };

      modalOn.addEventListener("click", show);
      modalOff.addEventListener("click", hide);
}

modal();