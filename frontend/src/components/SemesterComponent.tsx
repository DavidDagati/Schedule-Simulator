import { Divider, List, ListItem, ListItemText, ListSubheader } from "@mui/material";

type SemesterProps = {
    term: String
    classes: Array<String>
}

export default function SemesterComponent(props: SemesterProps) {

    return (
        <List
            subheader={
                <ListSubheader>{props.term}</ListSubheader>
            }
            className="max-w-xs border-gray-100 rounded-sm"
        >
            {props.classes.map((Class) => {
                return (
                    <>
                        <Divider />
                        <ListItem>
                            <ListItemText primary={Class}></ListItemText>
                        </ListItem>
                    </>
                )
            })}
        </List>
    )
}