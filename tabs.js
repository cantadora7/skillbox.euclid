document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.how-we-are-work__step').forEach(function (tabsBtn) {
 
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target=${path}]`).classList.add('tab-content-active')
    })

    tabsBtn.addEventListener('click', function () {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how-we-are-work__step').forEach(function (step) {
        step.classList.remove('step-active')
      })
      document.querySelector(`[data-path=${path}]`).classList.add('step-active')
    })

  })
})

