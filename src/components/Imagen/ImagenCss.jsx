function ImagenCss(props) {
    return (<img
        className={props.className}
        src={props.src}
        alt={props.alt} />);
}
export default ImagenCss;