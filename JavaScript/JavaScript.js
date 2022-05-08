        const testimonials = document.querySelector('.testimonials');
        const scroller = testimonials.querySelector('.scroller');
        const nextBtn = document.querySelector('.btn.next');
        const prevBtn = document.querySelector('.btn.prev');
        const itemWidth = testimonials.querySelector('.item').clientWidth/6;

        nextBtn.addEventListener('click', scrollToNextItem);
        prevBtn.addEventListener('click', scrollToPrevItem);

        function scrollToNextItem() {
            
                scroller.scrollBy({left:308, top: 0, behavior:'smooth'});
           
            
        } 
        function scrollToPrevItem() {
            if(scroller.scrollLeft != 0)
                // The scroll position is not at the beginning of first item
                scroller.scrollBy({left: -300, top: 0, behavior:'smooth'});
            else{
                // This is the first item. Go to last item by setting scroll position to scroller width
                scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
            }
            console.log(scroller.scrollWidth)
        }
