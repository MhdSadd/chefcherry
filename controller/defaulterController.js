
const indexPage = (req,res) =>{
    let Title = "Home ";
    res.render('default/index',{Title});

}

const portfolioPage =(req,res) =>{
    let Title = "Portfolio";
    res.render('default/portfolio',{Title});
}

const contactPage = (req,res) => {
    let Title = "Contact";
    res.render('default/contact', {Title})
}

module.exports = {
    indexPage,
    portfolioPage,
    contactPage
}