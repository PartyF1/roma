import Button from "./button"


function Header(props) {
    const { activeButton, setActiveButton } = props;
    return (
        <div key={activeButton}>
            <Button onClick={setActiveButton}
                isActive={activeButton}
                name="arabic"
                title='В Римские'
            > </Button>
            <Button onClick={setActiveButton}
                isActive={activeButton}
                name="romanic"
                title='В Арабские'
            > </Button>
        </div>
    )
}

export default Header;