function Button(props) {
    const { onClick, name, title, isActive } = props;

    const setActive = () => `field ${isActive === name ? "active" : "default"}`;

    return (
        <div
            className={setActive()}
            onClick={() => onClick(name)}>
            {title}
        </div>
    )
}
export default Button;