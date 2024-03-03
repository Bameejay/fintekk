const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// Testimonial Pagination

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial')
    const pageLinks = document.querySelectorAll('.page-link')
    const totalTestimonials = testimonials.length

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('hidden', i !== index)
        })
        updatePaginationLinks(index)
    }

    function updatePaginationLinks(index) {
        pageLinks.forEach((link, i) => {
            if (i === index) {
                link.classList.add('bg-[#172E80]', 'text-white', 'rounded-full', 'w-5', 'h-5', 'text-xs', 'flex', 'items-center', 'justify-center', 'align-middle')
                link.classList.remove('text-[#172E80]')
            } else {
                link.classList.remove('bg-[#172E80]', 'text-white')
                link.classList.add('text-[#172E80]')
            }
        })
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        showTestimonial(currentIndex)
    })

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials
        showTestimonial(currentIndex)
    })

    pageLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'))
            currentIndex = index
            showTestimonial(currentIndex)
        })
    })


})