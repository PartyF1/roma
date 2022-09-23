import "./answer.css"

function Answer(props) {
    const {arrOfNums, arrState} = props;
    return (
        <div className="answer"> 
            <h1>{arrOfNums[arrState.length]}</h1>
        </div>
    )
}
export default Answer;