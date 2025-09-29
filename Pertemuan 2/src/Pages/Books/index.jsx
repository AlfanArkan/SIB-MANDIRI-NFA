import Contact from "../../component/shared/Contact";
import Footer from "../../component/shared/Footer";
import Header from "../../component/shared/Header";
import Hero from "../../component/shared/Hero";
import ProductList from "../../component/shared/Product List";
import Team from "../../component/shared/Team";

export default function Books(){
    return(
        <>
        <ProductList />
        <Team />
        <Contact />
        <Hero />
        <Footer />
        </>
    )
}