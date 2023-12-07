
function Up() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={scrollToTop} className="up-button btn btn-dark"><i className="fa-solid fa-arrow-up"></i></button>
    );
}

export default Up;