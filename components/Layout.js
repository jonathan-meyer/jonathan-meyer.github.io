import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  margin: 10,
  padding: 10,
  border: "1px solid #DDD",
  fontFamily: '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif'
};

const contetStyle = {
  padding: 10
};

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      <div style={contetStyle}>{props.children}</div>
      <Footer />
    </div>
  );
}
