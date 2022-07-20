
const indexPage = (req,res) =>{
    let pageTilte = "Home ";
    res.render('default/index',{pageTilte});

}

const portfolioPage =(req,res) =>{
    let pageTilte = "Portfolio";
    res.render('default/portfolio',{pageTilte});
}

const contactPage = (req,res) => {
    let pageTilte = "Contact";
    res.render('default/contact', {pageTilte})
}

module.exports = {
    indexPage,
    portfolioPage,
    contactPage
}