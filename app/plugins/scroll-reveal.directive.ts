// plugins/scroll-reveal.directive.ts
export default defineNuxtPlugin ((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-reveal', {
    mounted(el, binding) {
      const defaultAnimationClass = 'animate__animated animate__bounceInUp'
      const animationClass = binding.value || defaultAnimationClass
      const delay = el.dataset.delay || '0s'

      if (!el.dataset.scrollRevealTriggered) {
        el.dataset.scrollRevealTriggered = 'false'
      }

      const handleAnimationEnd = () => {
        el.classList.remove(...animationClass.split(' '))
        el.dataset.scrollRevealTriggered = 'false'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (el.dataset.scrollRevealTriggered === 'false') {
              el.dataset.scrollRevealTriggered = 'true'
              el.style.animationDelay = delay
              el.classList.add(...animationClass.split(' '))
              void el.offsetWidth
              el.addEventListener('animationend', handleAnimationEnd, { once: true })
            }
          } else {
            el.removeEventListener('animationend', handleAnimationEnd)
            el.dataset.scrollRevealTriggered = 'false'
          }
        })
      }, {
        threshold: 0.1,
      })

      observer.observe(el)
      el._scrollRevealObserver = observer
    },
    unmounted(el) {
      if (el._scrollRevealObserver) {
        el._scrollRevealObserver.unobserve(el)
        delete el._scrollRevealObserver
      }
      el.removeEventListener('animationend', () => {})
    },
  })
})