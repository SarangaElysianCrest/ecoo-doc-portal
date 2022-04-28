export default function ListItem(props) {
    return (
        <li {...props}>
            {props.children}
        </li>
    )
}