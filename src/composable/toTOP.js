export const useToTop =()=>{
    const toTop = (() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
    return{toTop}
}

