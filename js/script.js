$(document).ready(function(){

    // side 누르면 메뉴 나오게 

    $('.hamburger').click(function(){
        $('.side-menu').toggleClass('on');
        $('.hamburger').toggleClass('on');
        $('.fix-bar').toggleClass('on')
    });


    $('.tab-menu').click(function(){
        $('.side-menu').removeClass('on')
        $('.hamburger').removeClass('on');
        $('.fix-bar').removeClass('on')
    })



    // offset top 값을 하나하나 저장해서 

    
    const btn1 = document.querySelector('#offset-about')
    const btn2 = document.querySelector('#offset-portfolio')
    
    const box_pst1 = document.querySelectorAll('#offset1')[0].offsetTop
    const box_pst2 = document.querySelectorAll('#offset2')[0].offsetTop
   

    btn1.addEventListener('click',function(){
    window.scrollTo({left:0, top:box_pst1, behavior:'smooth'}) 
});
    btn2.addEventListener('click',function(){
    window.scrollTo({left:0, top:box_pst2 , behavior:'smooth'})  
});

$('#offset-contacts').click(function(x){
    x.preventDefault()
        const top = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop : $(top).offset().top
        },1000)
});







    // 글자 색 바꾸기 
    const ASCII_CHARS = "abcdefghijklmnñopqrstuvwxyz0123456789!#$%&/?'_-"
    const COLORS = ["#a21414", "#fc9867", "#FFEDBF", "#85A078", "#6BAEA6", "#BF94C6"]
    
    class RainbowButton {
        constructor(_btn) {
            this.el = _btn
            this.txt = this.el.innerText
            this.overColor = COLORS[0]
            this.fps = 12
            this.events()
        }
    
        events() {
            this.el.addEventListener("mouseenter", () => this.onMouseEnter(), false)
            this.el.addEventListener("mouseleave", () => this.onMouseLeave(), false)
        }
    
        onMouseEnter() {
            this.over_active = true
            this.el.innerHTML = ""
            this.rainbow()
        }
    
        rainbow() {
            let letters = this.txt.split("")
            for (let i = 0; i < letters.length; i++) {
                const span = document.createElement("span")
                this.el.appendChild(span)
                const letter = letters[i]
                span.innerText = letter
                if (letter != " ") {
                  let idx = ASCII_CHARS.indexOf(letter.toLowerCase())
                  let initChar = idx > 10 ? ASCII_CHARS[idx - 9] : ASCII_CHARS[0]
                  setTimeout(() => this.letterTo(span, initChar, letter), 60 * i)
                }
            }
        }
    
        onMouseLeave() {
            this.over_active = false
            this.el.innerHTML = this.txt
        }
    
        letterTo(span, from, to) {
            let char = to
            let color = this.overColor
            if (from != to.toLowerCase() && this.over_active) {
                const idx = ASCII_CHARS.indexOf(from.toLowerCase())
                color = COLORS[~~(Math.random() * COLORS.length)]
                char = Math.random() > 0.5 ? from : from.toUpperCase()
                setTimeout(() => this.letterTo(span, ASCII_CHARS[idx + 1], to), 1000 / this.fps)
            }
            span.style.color = color
            span.innerText = char
        }
    }
    
    const _btn = new RainbowButton(document.querySelector("#rainbow"))
     //end 글자 색 바꾸기 

     
//  스크롤트리거

    //  스크롤트리거

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        
        "(min-width: 501px)": function() {
  
            let sections = gsap.utils.toArray(".panel");
  
            gsap.to(sections, {
            // delay: 13, 
            // stagger: 0.05,
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".portfolio",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".portfolio").offsetWidth
                // (.panel)
            }
            
            }); 
  
    }, 
    
        "(max-width: 500px)": function() {
       
        //   let sections = gsap.utils.toArray(".panel");
  
        //     gsap.to(sections, {
        //     // delay: 13, 
        //     // stagger: 0.05,
        //     xPercent: 0,
        //     ease: "none",
        //     scrollTrigger: {
        //       //   trigger: ".portfolio",
        //       //   pin: true,
        //       //   scrub: 1,
        //       //   snap: 1 / (sections.length - 1),
        //       //   end: () => "+=" + document.querySelector(".portfolio").offsetWidth
        //         // (.panel)
        //     }
            
        //     }); 
         
    }, 
    
  
    
    });
  
    
});

