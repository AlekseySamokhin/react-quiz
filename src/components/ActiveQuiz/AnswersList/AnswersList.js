import React from "react";
 // Component
import AnswerItem from "./AnswerItem/AnswerItem";
// Styles
import classes from "./AnswersList.module.css";

const AnswersList = (props) => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    state={props.state ? props.state[answer.id] : null}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                />
            );
        })}
    </ul>
);

export default AnswersList;
