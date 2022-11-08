// import Footer from "./Footer";
import Header from "./Header";

const Base = props => (
    <div className="wrapper">
        <Header></Header>
        <section className="section-container">
            { props.children }
        </section>
        {/* <Footer></Footer> */}
    </div>
)

export default Base;