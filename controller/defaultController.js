
const indexPage = (req,res) =>{
    let Title = "Home";
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
const loginPage = (req, res) => {
    let Title = "Login";
    res.render('default/login', {Title})
}
const Tables = (req, res) =>{
    let Title = "Tables | Admin";
    res.render("default/tables")
}

module.exports = {
    indexPage,
    portfolioPage,
    contactPage,
    loginPage,
    Tables
}